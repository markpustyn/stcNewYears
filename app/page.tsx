"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  FaCamera,
  FaEnvelope,
  FaClipboardList,
  FaPalette,
  FaCoffee,
  FaCookieBite,
  FaCouch,
  FaMusic,
  FaPaintBrush,
  FaQuestionCircle,
} from "react-icons/fa"
import Schedule from "./schedule"
import Header from "./header"

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null)
  const [hoverCard, setHoverCard] = useState<number | null>(null)

  const data = [
    {
      id: 1,
      title: "Choir Room #1",
      content: "Beautiful memories with friends captured in photos",
      description:
        "A photo studio with a spectacular backdrop, professional lighting, and on the spot printing where you can capture the first hours of 2025 with friends.",
      icon: <FaCamera className="text-2xl text-zinc-300" />,
    },
    {
      id: 2,
      title: "Room #9",
      content: "Write wishes and celebratory letters",
      description:
        "Writing stations with cards and supplies to express gratitude and kindness. Add a cake pop for a small surprise.",
      icon: <FaEnvelope className="text-2xl text-zinc-300" />,
    },
    {
      id: 3,
      title: "Room #8",
      content: "Pick up your cards faster",
      description:
        "Cards organized by last name for quick pickup anytime during the night.",
      icon: <FaClipboardList className="text-2xl text-zinc-300" />,
    },
    {
      id: 4,
      title: "Room #7 Craft Competitions",
      content: "Compete with friends for prizes",
      description:
        "Creative competitions testing design and problem solving skills with prizes for winners.",
      icon: <FaPalette className="text-2xl text-zinc-300" />,
    },
    {
      id: 5,
      title: "Room #5",
      content: "Create art and poetry",
      description:
        "Drawing and writing stations with staff to help you express your creativity.",
      icon: <FaPaintBrush className="text-2xl text-zinc-300" />,
    },
    {
      id: 6,
      title: "Room #4",
      content: "Test your knowledge",
      description:
        "A trivia competition with a fair system and cash prizes for top performers.",
      icon: <FaQuestionCircle className="text-2xl text-zinc-300" />,
    },
    {
      id: 7,
      title: "Room #1 Coffee Bar",
      content: "Fresh coffee by STC baristas",
      description:
        "Business style coffee service available through QR ordering and live line.",
      icon: <FaCoffee className="text-2xl text-zinc-300" />,
    },
    {
      id: 8,
      title: "Middle Hall",
      content: "Homemade sweets and surprises",
      description:
        "A variety of sweets and fruits prepared by the church community.",
      icon: <FaCookieBite className="text-2xl text-zinc-300" />,
    },
    {
      id: 9,
      title: "Brothers Room",
      content: "Relax and hang out",
      description:
        "A lounge space with games and a cozy atmosphere to talk and unwind.",
      icon: <FaCouch className="text-2xl text-zinc-300" />,
    },
    {
      id: 10,
      title: "Small Hall",
      content: "Watch the yearly slideshow",
      description:
        "Relive the years moments with music and memories on the big screen.",
      icon: <FaMusic className="text-2xl text-zinc-300" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center px-6">
      <Header />

      <div className="mt-6 w-full max-w-5xl">
        <Schedule />
      </div>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {data.map((item) => {
          const isOpen = openCard === item.id
          const isHovered = hoverCard === item.id

          return (
            <Card
              key={item.id}
              onClick={() => setOpenCard(isOpen ? null : item.id)}
              onMouseEnter={() => setHoverCard(item.id)}
              onMouseLeave={() => setHoverCard(null)}
              className={`cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800
                transition-all duration-300
                hover:border-zinc-600 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                ${
                  isOpen || isHovered
                    ? "border-zinc-500 shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                    : ""
                }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <CardTitle className="text-base font-semibold text-zinc-100">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-zinc-400">
                <p>{item.content}</p>
                {isOpen && (
                  <p className="mt-3 text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <footer className="mt-20 pb-6 text-xs text-zinc-500">
        © 2025 Slavic Trinity Church, Sacramento, CA. All Rights Reserved.
      </footer>
    </div>
  )
}
