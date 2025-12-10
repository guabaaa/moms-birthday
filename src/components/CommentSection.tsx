"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface Comment {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      setComments(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsLoading(true);

    const { error } = await supabase.from("comments").insert([
      {
        name: name.trim(),
        message: message.trim(),
      },
    ]);

    if (error) {
      console.error("Error adding comment:", error);
      alert("메시지 등록에 실패했습니다.");
    } else {
      setName("");
      setMessage("");
      fetchComments();
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-neutral-900 rounded-xl border border-neutral-800">
      <h3 className="text-xl font-semibold text-amber-500 mb-6 font-danjo-bold">
        축하 메시지
      </h3>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-neutral-200 placeholder-neutral-500 transition-all"
          required
        />
        <textarea
          placeholder="축하 메시지를 남겨주세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-neutral-200 placeholder-neutral-500 resize-none transition-all"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-600 text-neutral-900 py-3 rounded-lg hover:bg-amber-500 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "등록 중..." : "등록하기"}
        </button>
      </form>

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {comments.length === 0 ? (
          <p className="text-neutral-500 text-center py-8">
            첫 번째 축하 메시지를 남겨주세요!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-800 text-left"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-amber-500/90">{comment.name}</p>
                <p className="text-xs text-neutral-500">
                  {new Date(comment.created_at).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-neutral-300 text-sm whitespace-pre-wrap leading-relaxed font-light">
                {comment.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

