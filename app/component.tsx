import React from 'react';

export default function ActivityRooms() {
  // Example data: Each room has a name and list of activities
  const rooms = [
    {
      name: 'Class Room 2',
      activities: ['Board Games', 'TV & Chill', 'Reading Corner']
    },
    {
      name: 'Class Room 3',
      activities: ['Cooking Class', 'Snack Time']
    },
    {
      name: 'Class Room 4',
      activities: ['Video Games', 'Table Tennis', 'Foosball']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Activity Instructions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/3">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
            <ul className="list-disc ml-5">
              {room.activities.map((activity, idx) => (
                <li key={idx} className="mb-1">{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
