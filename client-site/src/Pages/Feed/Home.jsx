import React from 'react'
import StoryBar from '../../components/StoryBar'
import PostMaker from '../../components/PostMaker'

const Home = () => {
    return (
        <div className="bg-[#F0F2F5] min-h-screen p-4">
            <div className="flex gap-3">

                {/* LEFT SIDEBAR — hidden on mobile */}
                <aside className="hidden lg:block w-1/5 bg-red-400 h-screen rounded-3xl">
                    sidebar
                </aside>

                {/* MAIN FEED — full width on mobile */}
                <div className="w-full lg:w-3/5 border border-blue-400 h-screen rounded-3xl">

                    <StoryBar/>
                    <PostMaker/>

                    
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
