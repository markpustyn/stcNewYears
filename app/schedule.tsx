"use client"
import React from "react"

const events = [
  { time: "12:15 AM to 12:45 AM", description: "Sitting down and Prayer for food" },
  { time: "12:45 AM to 1:00 AM", description: "Fellowship and food" },
  { time: "1:00 AM to 2:15 AM", description: "Fellowship and food" },
  { time: "2:15 AM to 3:30 AM", description: "Main hall pictures and videos" },
  { time: "3:30 AM to 5:30 AM", description: "Free time activities" },
]


const eventsUK = [
  { time: "12:15 AM - 12:45 AM", description: "Сідаємо та заказуваті каву" },
  { time: "12:45 AM - 1:00 AM", description: "Вступна тема — молитва перед їжею" },
  { time: "1:00 AM - 2:15 AM", description: "Спілкування та їжа" },
  { time: "2:15 AM - 3:30 AM", description: "Головний Зал — фотографії i відео" },
  { time: "3:10 AM - 5:10 AM", description: "Вільний час" },
  { time: "5:10 AM - 6:10 AM", description: "Програма ночі - Молитва" },
   { time: "6:10 AM - 7:30 AM", description: "Прибирання Maлий Зал" },
];

type EventScheduleProps = {
  isDark?: boolean
  lang?: "en" | "uk"
}


export default function EventSchedule({ isDark = true, lang = "en" }: EventScheduleProps) {
  const list = lang === "uk" ? eventsUK : events
  return (
    <div
      className={
        isDark
          ? "w-full px-6 py-6"
          : "w-full px-6 py-6"
      }
    >
      <ul className="space-y-4">
        {list.map((event, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <span
              className={
                isDark
                  ? "text-sm sm:text-base font-semibold text-zinc-200"
                  : "text-sm sm:text-base font-semibold text-zinc-900"
              }
            >
              {event.time}
            </span>

            <span
              className={
                isDark
                  ? "hidden sm:block text-zinc-500 mx-4"
                  : "hidden sm:block text-zinc-400 mx-4"
              }
            >
              •
            </span>

            <p
              className={
                isDark
                  ? "text-sm sm:text-base text-zinc-400 mt-1 sm:mt-0"
                  : "text-sm sm:text-base text-zinc-600 mt-1 sm:mt-0"
              }
            >
              {event.description}
            </p>

            {index !== events.length - 1 && (
              <div
                className={
                  isDark
                    ? "mt-4 h-px w-full bg-zinc-800 sm:hidden"
                    : "mt-4 h-px w-full bg-zinc-300 sm:hidden"
                }
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
