import React, { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { usePostStore } from "../store/usePostStore";

import wowIcon from "../assets/icons/love.png";
import likeIcon from "../assets/icons/png-transparent-thumbs-up-sign-illustration-thumb-signal-emoji-domain-emoticon-smiley-lettuce-emoji-hand-over-sign-thumbnail.png";
import heartIcon from "../assets/icons/fblove.png";

const PostCard = ({ post }) => {
    const { user } = useAuthStore();
    const { likePost } = usePostStore();

    const [likes, setLikes] = useState(post.likes || []);

    const isLiked = likes.includes(user?._id);

    const handleLike = async () => {
        const updatedLikes = await likePost(post._id, post.user);
        if (updatedLikes) {
            setLikes(updatedLikes); // update UI instantly
        }
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
            {post.images && post.images.length > 0 && (
                <img
                    src={post.images[0]}
                    alt="Post Image"
                    className="mt-3 rounded-lg w-full object-cover"
                />
            )}

            {/* Reactions */}
            <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                    <img src={likeIcon} className="w-5 h-5 object-contain" />
                    <img src={wowIcon} className="w-5 h-5" />
                    <img src={heartIcon} className="w-5 h-5 object-cover" />

                    {/* Dynamic Like Count */}
                    <span>{likes.length}</span>
                </div>

                <div className="flex gap-4">
                    <span>12 Comments</span>
                    <span>4 Shares</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4 pt-3 border-t">
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 w-1/3 justify-center py-2 rounded-lg
                        ${isLiked ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}
                    `}
                >
                    👍 {isLiked ? "Liked" : "Like"}
                </button>

                <button className="flex items-center gap-2 w-1/3 justify-center py-2 hover:bg-gray-100 rounded-lg">
                    💬 Comment
                </button>

                <button className="flex items-center gap-2 w-1/3 justify-center py-2 hover:bg-gray-100 rounded-lg">
                    ➤ Share
                </button>
            </div>

            {/* Comment Input */}
            <div className="flex items-center gap-3 mt-3">
                <img
                    src={post.userId?.avatar || "https://i.pravatar.cc/100"}
                    className="w-8 h-8 rounded-full"
                />
                <input
                    placeholder="Write a comment..."
                    className="flex-1 bg-gray-100 p-2 rounded-full text-sm"
                />
            </div>
        </div>
    );
};

export default PostCard;
