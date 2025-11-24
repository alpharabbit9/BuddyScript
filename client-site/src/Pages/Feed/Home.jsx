import React, { useEffect } from 'react'
import StoryBar from '../../components/StoryBar'
import PostMaker from '../../components/PostMaker'
import { usePostStore } from '../../store/usePostStore';
import PostCard from '../../components/PostCard';
import LeftSidebar from '../../components/LeftSidebar';
import RightSidebar from '../../components/RightSidebar';

const Home = () => {

    const { posts, loading, getAllPosts } = usePostStore();

    useEffect(() => {
        getAllPosts();
    }, []); // only run once

    return (
        <div className="bg-[#F0F2F5] min-h-screen p-4">
            <div className="flex gap-3">

                <aside className="hidden lg:block w-1/5">
                    <div className="sticky top-0 h-screen overflow-y-auto">
                        <LeftSidebar />
                    </div>
                </aside>

                <div className="w-full lg:w-3/5 rounded-3xl">
                    <StoryBar />
                    <PostMaker />

                    <div className="mt-4 max-w-3xl mx-auto">
                        {posts.map((post) => (
                            <PostCard key={post._id} post={post} />
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block w-1/5 rounded-3xl max-w-lg space-y-5 sticky top-0 h-screen overflow-y-auto">
                    <RightSidebar />
                </div>

            </div>
        </div>
    )
}

export default Home
