import React from 'react';

const events = [
  { time: "12:15 AM - 12:45 AM", description: "Sitting Down - Ordering Coffee" },
{ time: "12:45 AM - 1:00 AM", description: "Topic Introduction - Food Prayer" },
  { time: "1:00 AM - 2:15 AM", description: "Fellowship and Food" },
  { time: "2:15 AM - 3:30 AM", description: "Main Hall - Pictures and Videos" },
  { time: "3:10 AM - 5:10 AM", description: "Free Time Activities" },
  { time: "5:10 AM - 6:10 AM", description: "End of Night Program - Prayer" },
  { time: "6:10 AM - 7:30 AM", description: "Cleanup" },
];

const EventSchedule = () => {
  return (
    <div className="w-full pb-6 bg-gray-100 px-4 sm:px-6 lg:px-8 -mt-6">
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            {/* Time and Description Container */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              {/* Time */}
              <span className="text-lg font-semibold text-gray-700">{event.time}</span>
              {/* Separator */}
              <span className="hidden sm:inline-block mx-2 text-gray-500">—</span>
              {/* Description */}
              <p className="text-gray-600 text-base">{event.description}</p>
            </div>
            {/* Divider for small screens */}
            {index !== events.length - 1 && (
              <hr className="mt-2 sm:hidden border-gray-300" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSchedule;
