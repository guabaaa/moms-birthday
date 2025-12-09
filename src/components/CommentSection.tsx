'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 로컬 스토리지에서 댓글 불러오기
    const savedComments = localStorage.getItem('birthday-comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem('birthday-comments', JSON.stringify(updatedComments));
    setName('');
    setMessage('');
  };

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-rose-600 mb-4">축하 메시지</h3>
      
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
          required
        />
        <textarea
          placeholder="축하 메시지를 남겨주세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors font-medium"
        >
          등록하기
        </button>
      </form>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-4">첫 번째 축하 메시지를 남겨주세요!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-rose-50 rounded-lg p-4 border border-rose-100"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-semibold text-rose-700">{comment.name}</p>
                <p className="text-xs text-gray-500">{comment.date}</p>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

