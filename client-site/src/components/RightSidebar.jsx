import React from 'react';
import { Search, MessageCircle } from 'lucide-react';

export default function RightSidebar() {
  const suggestions = [
    {
      name: 'Radovan SkillArena',
      title: 'Founder & CEO at Trophy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ];

  const friends = [
    {
      name: 'Steve Jobs',
      title: 'CEO of Apple',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      time: '5 min ago',
      online: true
    }
  ];

  return (
    <div className="w-full max-w-lg space-y-5">
      {/* You Might Like Section */}
      <div className="bg-white rounded-2xl shadow-sm p-3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900 font-semibold ">You Might Like</h2>
          <button className="text-blue-500 text-sm font-medium hover:underline">
            See All
          </button>
        </div>

        {suggestions.map((person, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start gap-4">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-500">{person.title}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                Ignore
              </button>
              <button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Your Friends Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-gray-900 font-semibold ">Your Friends</h2>
          <button className="text-blue-500 text-sm font-medium hover:underline">
            See All
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="input search text"
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Friends List */}
        <div className="space-y-4">
          {friends.map((friend, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                {friend.online && (
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                  {friend.name}
                </h3>
                <p className="text-xs text-gray-500">{friend.title}</p>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">
                {friend.time}
              </span>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}