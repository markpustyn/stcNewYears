"use client"
import React from "react"

const events = [
  { time: "12:15 AM to 12:45 AM", description: "Sitting down and ordering coffee" },
  { time: "12:45 AM to 1:00 AM", description: "Topic introduction and food prayer" },
  { time: "1:00 AM to 2:15 AM", description: "Fellowship and food" },
  { time: "2:15 AM to 3:30 AM", description: "Main hall pictures and videos" },
  { time: "3:30 AM to 5:30 AM", description: "Free time activities" },
  { time: "5:30 AM to 6:30 AM", description: "End of night cleanup" },
]

export default function EventSchedule() {
  return (
    <div className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-6 py-6">
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm sm:text-base font-semibold text-zinc-200">
              {event.time}
            </span>

            <span className="hidden sm:block text-zinc-600 mx-4">•</span>

            <p className="text-sm sm:text-base text-zinc-400 mt-1 sm:mt-0">
              {event.description}
            </p>

            {index !== events.length - 1 && (
              <div className="mt-4 h-px w-full bg-zinc-800 sm:hidden" />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
