import React, { useRef } from 'react';
import { Plus, ChevronRight, ChevronLeft } from 'lucide-react';

const StoryBar = () => {
  const scrollContainerRef = useRef(null);

  const stories = [
    {
      id: 1,
      name: 'Your Story',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop',
      isYourStory: true,
    },
    {
      id: 2,
      name: 'Elina Martell',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Robert Lewandowski',
      image: 'https://www.fcbarcelona.com/photo-resources/2024/10/30/ddfffa0c-e58a-478d-9dc1-31bab6743378/_MGA5923.jpg?width=1200&height=750',
      avatar: 'https://s.hs-data.com/bilder/spieler/gross/119750.jpg',
    },
    {
      id: 4,
      name: 'Ryan Roslansky',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=600&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
    },
    {
      id: 6,
      name: 'Ryan Gosling',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=600&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full  py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 relative">
     
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Stories Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex-shrink-0 cursor-pointer group"
            >
           
              <div className="hidden md:block relative w-[120px] h-[180px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                
                {/* Avatar or Add Button */}
                {story.isYourStory ? (
                  <div className="absolute top-4 left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-4 border-blue-500 overflow-hidden">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm truncate">
                    {story.name}
                  </p>
                </div>
              </div>

             
              <div className="md:hidden flex flex-col items-center gap-1">
                <div className="relative">
                 
                  <div className="w-16 h-16 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-blue-500 to-purple-500">
                    <div className="w-full h-full rounded-full p-[2px] bg-white">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <img
                          src={story.isYourStory ? story.image : story.avatar}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                 
                  {story.isYourStory && (
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Plus className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                  )}
                </div>
                
       
                <p className="text-xs text-gray-700 text-center truncate w-20">
                  {story.isYourStory ? 'Your Story' : story.name.split(' ')[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center mt-3 gap-1">
          {[...Array(Math.ceil(stories.length / 4))].map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-gray-300"
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default StoryBar;