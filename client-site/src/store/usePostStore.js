import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set, get) => ({
    posts: [],
    loading: false,

    // Fetch all posts
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

    // Create post and auto-refresh
    createPost: async (newPost) => {
        try {
            set({ loading: true });

            const { data } = await axiosInstance.post(
                "posts/create",
                newPost
            );

            // Re-fetch posts to stay consistent
            await get().getAllPosts();

        } catch (error) {
            console.error(error);
        } finally {
            set({ loading: false });
        }
    },

}));
