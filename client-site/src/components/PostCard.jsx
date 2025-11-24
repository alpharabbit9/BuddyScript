import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import wowIcon from "../assets/icons/love.png";
import likeIcon from "../assets/icons/png-transparent-thumbs-up-sign-illustration-thumb-signal-emoji-domain-emoticon-smiley-lettuce-emoji-hand-over-sign-thumbnail.png";
import heartIcon from "../assets/icons/fblove.png";
import { axiosInstance } from "../lib/axios";

const PostCard = ({ post }) => {
  const { user } = useAuthStore();

  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  // 🔹 Fetch likes
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await axiosInstance.get(`/likes/${post._id}`);
        setLikesCount(res.data.likesCount);
        setIsLiked(res.data.isLiked);
      } catch (error) {
        console.log("Failed to fetch likes", error);
      }
    };
    fetchLikes();
  }, [post._id]);

  // 🔹 Fetch comments function (used in useEffect & after posting)
  const fetchComments = async () => {
    try {
      const res = await axiosInstance.get(`/comments/${post._id}`);
      setComments(res.data);
    } catch (error) {
      console.log("Failed to fetch comments", error);
    }
  };

  // 🔹 Fetch comments on mount
  useEffect(() => {
    fetchComments();
  }, [post._id]);

  // 🔹 Handle like/unlike
  const handleLike = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await axiosInstance.post("/likes/toggle", { postId: post._id });
      if (res.data.liked) {
        setLikesCount((prev) => prev + 1);
        setIsLiked(true);
      } else {
        setLikesCount((prev) => prev - 1);
        setIsLiked(false);
      }
    } catch (error) {
      console.log("Like error", error);
    }

    setLoading(false);
  };

  // 🔹 Handle adding a comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentLoading(true);

    try {
      await axiosInstance.post("/comments", {
        postId: post._id,
        text: commentText,
      });

      setCommentText("");
      // 🔥 Refresh comments automatically
      fetchComments();
    } catch (error) {
      console.log("Failed to add comment", error);
    }

    setCommentLoading(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post.userId?.avatar || "https://i.pravatar.cc/100"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">
              {post.userFullName || "Unknown User"}
            </p>
            <p className="text-gray-400 text-xs">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-black text-xl">⋮</button>
      </div>

      {/* Text */}
      {post.text && (
        <p className="mt-3 text-gray-700 whitespace-pre-line text-sm">
          {post.text}
        </p>
      )}

      {/* Image */}
      {post.images?.length > 0 && (
        <img
          src={post.images[0]}
          alt="Post"
          className="mt-3 rounded-lg w-full object-cover"
        />
      )}

      {/* Reactions */}
      <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <img src={likeIcon} className="w-5 h-5" />
          <img src={wowIcon} className="w-5 h-5" />
          <img src={heartIcon} className="w-5 h-5" />
          <span>{likesCount}</span>
        </div>

        <div className="flex gap-4">
          <span>{comments.length} Comments</span>
          <span>4 Shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 pt-3 border-t">
        <button
          onClick={handleLike}
          disabled={loading}
          className={`flex items-center gap-2 w-1/3 justify-center py-2 rounded-lg 
            ${isLiked ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
          `}
        >
          {isLiked ? "👍 Liked" : "👍 Like"}
        </button>

        <button className="flex items-center gap-2 w-1/3 justify-center py-2 hover:bg-gray-100 rounded-lg">
          💬 Comment
        </button>

        <button className="flex items-center gap-2 w-1/3 justify-center py-2 hover:bg-gray-100 rounded-lg">
          ➤ Share
        </button>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleAddComment} className="flex items-center gap-3 mt-3">
        <img
          src={user?.avatar || "https://i.pravatar.cc/100"}
          className="w-8 h-8 rounded-full"
        />
        <input
          placeholder="Write a comment..."
          className="flex-1 bg-gray-100 p-2 rounded-full text-sm"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          disabled={commentLoading}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm"
          disabled={commentLoading}
        >
          Post
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-3 space-y-2">
        {comments.map((c) => (
          <div key={c._id} className="flex items-start gap-3">
            <img
              src={c.userId?.avatar || "https://i.pravatar.cc/100"}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm">
                <span className="font-semibold">{c.userId?.fullName || "Unknown"}</span>{" "}
                {c.text}
              </p>
              <p className="text-gray-400 text-xs">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PostCard;
