"use client"
import React from "react"

const events = [
  { time: "12:15 AM to 12:45 AM", description: "Sitting down and Prayer for food" },
  { time: "12:45 AM to 2:15 AM", description: "Fellowship and food & Coffee" },
  { time: "2:30 AM to 4:00 AM", description: "Main Hall Program" },
  { time: "4:00 AM to 5:30 AM", description: "Free time activities" },
  { time: "5:30 AM to 6:15 AM", description: "Small Hall Prizes And Comeptition Descisions" },
  { time: "6:30 AM to 8:30 AM", description: "Clean Up Small Hall" },
]


const eventsUK = [
  { time: "12:15 AM to 12:45 AM", description: "Сідаємо та молитва за їжу" },
  { time: "12:45 AM to 2:15 AM", description: "Спілкування та їжа & кава" },
  { time: "2:30 AM to 4:00 AM", description: "Програма в головному залі" },
  { time: "4:00 AM to 5:30 AM", description: "Вільний час та активності" },
  { time: "5:30 AM to 6:15 AM", description: "Нагороди та підбиття підсумків у малому залі" },
  { time: "6:30 AM to 8:30 AM", description: "Прибирання малого залу" },
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
