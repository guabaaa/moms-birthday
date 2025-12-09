'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

// Leaflet CSS는 동적으로 import
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface MapProps {
  address: string;
  placeName: string;
  lat?: number;
  lng?: number;
}

export default function Map({ address, placeName, lat, lng }: MapProps) {
  // 인천광역시 부평구 삼산동 464-5 명윤빌딩 좌표
  const defaultLat = lat || 37.5074;
  const defaultLng = lng || 126.7226;

  useEffect(() => {
    // Leaflet CSS 동적 로드
    import('leaflet/dist/leaflet.css');
    
    // 마커 아이콘 설정 (기본 아이콘 경로 문제 해결)
    if (typeof window !== 'undefined') {
      const icon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = icon;
    }
  }, []);

  // Kakao Maps 검색 URL
  const searchQuery = encodeURIComponent(`${placeName} ${address}`);
  const mapUrl = `https://map.kakao.com/link/search/${searchQuery}`;

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mt-3 relative">
      <MapContainer
        center={[defaultLat, defaultLng]}
        zoom={16}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[defaultLat, defaultLng]}>
          <Popup>
            <div className="text-center">
              <p className="font-semibold text-sm">{placeName}</p>
              <p className="text-xs text-gray-600 mt-1">{address}</p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 text-xs underline mt-1 inline-block"
              >
                카카오맵에서 보기
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute bottom-2 right-2 z-[1000]">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 hover:bg-white text-rose-600 text-xs px-3 py-1.5 rounded-full shadow-md transition-colors"
        >
          카카오맵에서 보기
        </a>
      </div>
    </div>
  );
}

