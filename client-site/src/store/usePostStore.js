import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set) => ({
    posts: [],
    loading: false,

   getAllPosts: async () => {
    set({ loading: true });

    try {
        const { data } = await axiosInstance.get("posts/getAllPost");

        const sorted = data.posts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        set({ posts: sorted, loading: false });

    } catch (error) {
        console.error(error);
        set({ loading: false });
    }
},

    createPost: async (newPost) => {
        try {
            const res = await fetch("http://localhost:5000/api/posts/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost),
            });

            const data = await res.json();

            set((state) => ({
                posts: [data.post, ...state.posts]   // instantly update feed
            }));

        } catch (error) {
            console.log(error);
        }
    },

     likePost: async (postId, userId) => {
        try {
            const res = await axiosInstance.patch(`posts/${postId}/like`, { userId });

            return res.data.likes; // updated likes array
        } catch (err) {
            console.error("Like error:", err);
        }
    }
}));
