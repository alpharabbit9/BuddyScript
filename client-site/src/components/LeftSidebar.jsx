import React from 'react';
import { Compass, Lightbulb, UserPlus, Bookmark, Calendar } from 'lucide-react';

export default function LeftSidebar() {
  const suggestedPeople = [
    {
      name: 'Steve Jobs',
      followers: '1.2M Followers',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Ryon Rosenksy',
      followers: '1.5M Followers',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  const events = [
    {
      date: '10',
      month: 'JAN',
      title: 'No more letterium mo insan city',
      organizer: 'People Guidy',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
    },
    {
      date: '10',
      month: 'JAN',
      title: 'No more letterium mo insan city',
      organizer: 'People Guidy',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="w-full max-w-xs  rounded-2xl   space-y-6">
      {/* Explore Section */}
      <div className=' p-4 rounded-xl bg-white'>
        <h2 className="text-gray-800 font-semibold text-lg mb-4">Explore</h2>
        <div className="space-y-1">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Compass className="w-5 h-5" />
            <span className="text-sm font-medium">Feed</span>
            <span className="ml-auto bg-emerald-400 text-white text-xs font-semibold px-2 py-0.5 rounded">
              New
            </span>
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Lightbulb className="w-5 h-5" />
            <span className="text-sm font-medium">Insights</span>
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <UserPlus className="w-5 h-5" />
            <span className="text-sm font-medium">Find Friends</span>
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
            <Bookmark className="w-5 h-5" />
            <span className="text-sm font-medium">Bookmarks</span>
          </button>
        </div>
      </div>

      {/* Suggested People Section */}
      <div  className=' p-4 rounded-xl bg-white'>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800 font-semibold text-base">Suggested People</h2>
          <button className="text-blue-500 text-xs font-medium hover:underline">
            See All
          </button>
        </div>
        <div className="space-y-3">
          {suggestedPeople.map((person, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {person.name}
                </p>
                <p className="text-xs text-gray-500">{person.followers}</p>
              </div>
              <button className="px-4 py-1.5 text-xs font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div  className=' p-4 rounded-xl bg-white'>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-800 font-semibold text-base">Events</h2>
          <button className="text-blue-500 text-xs font-medium hover:underline">
            See All
          </button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="space-y-3">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 bg-emerald-400 text-white rounded-lg w-12 h-14 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">{event.date}</span>
                  <span className="text-xs font-medium">{event.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    {event.organizer}
                  </p>
                  <button className="px-4 py-1.5 text-xs font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}