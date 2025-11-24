import React, { useEffect } from 'react'
import StoryBar from '../../components/StoryBar'
import PostMaker from '../../components/PostMaker'
import { usePostStore } from '../../store/usePostStore';
import PostCard from '../../components/PostCard';

const Home = () => {

    const { posts, loading, getAllPosts } = usePostStore();

    useEffect(() => {
        getAllPosts();
    }, []);
    return (
        <div className="bg-[#F0F2F5] min-h-screen p-4">
            <div className="flex gap-3">

                {/* LEFT SIDEBAR — hidden on mobile */}
                <aside className="hidden lg:block w-1/5 bg-red-400 min-h-screen rounded-3xl">
                    sidebar
                </aside>

                {/* MAIN FEED — full width on mobile */}
                <div className="w-full lg:w-3/5 border border-blue-400 min-h-screen rounded-3xl">

                    <StoryBar />
                    <PostMaker />

                    <div className="mt-4 max-w-3xl mx-auto">
                        {posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>


                </div>

                {/* RIGHT SIDEBAR — hidden on mobile */}
                <div className="hidden lg:block w-1/5 bg-green-400 h-screen rounded-3xl">
                    like
                </div>

            </div>
        </div>
    )
}

export default Home
