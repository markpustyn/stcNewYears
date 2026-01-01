"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FaCamera,
  FaEnvelope,
  FaPalette,
  FaCoffee,
  FaCookieBite,
  FaCouch,
  FaMusic,
  FaPaintBrush,
  FaQuestionCircle,
  FaSun,
  FaMoon,
  FaComment
} from "react-icons/fa"
import Header from "./header"
import EventSchedule from "./schedule"
import { Button } from "@/components/ui/button"

type Lang = "en" | "uk"

export default function Home() {
  const [openCard, setOpenCard] = useState<number | null>(null)
  const [hoverCard, setHoverCard] = useState<number | null>(null)
  const year = new Date().getFullYear()

  // theme toggle (saved)
  const [theme, setTheme] = useState<"dark" | "light">("light")
  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("theme") as "dark" | "light" | null)) ||
      null
    if (saved === "light" || saved === "dark") setTheme(saved)
  }, [])
  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem("theme", theme)
  }, [theme])

  const isDark = theme === "dark"


  const [lang, setLang] = useState<Lang>("en")
  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("lang") as Lang | null)) ||
      null
    if (saved === "en" || saved === "uk") setLang(saved)
  }, [])
  useEffect(() => {
    if (typeof window === "undefined") return
    localStorage.setItem("lang", lang)
  }, [lang])

  const ukData = [
  {
    id: 1,
    title: "Choir Room 1 Photo Studio",
    content: "Зробіть новорічні фото з друзями у святковій атмосфері",
    description:
      "Професійна фотостудія з освітленням, фонами та миттєвим друком. Заберіть із собою памʼять про перші години 2026 року.",
    icon: <FaCamera className="text-2xl" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Room 8 Gift Shop",
    content: "Подарунок для себе або анонімного друга",
    description:
      "Оберіть продуманий подарунок поки є в наявності. Усі зібрані кошти будуть передані на служіння вдовам.",
    icon: <FaEnvelope className="text-2xl" />,
  },
  {
    id: 3,
    title: "Room 4 Knowledge Challenge",
    content: "Перевір свої знання та змагайся за приз",
    description:
      "Тест із кількох категорій де учасники змагаються за звання найрозумнішого учасника STC Youth.",
    icon: <FaQuestionCircle className="text-2xl" />,
  },
  {
    id: 4,
    title: "Room 7 Craft Competitions",
    content: "Творчі завдання та змагання з призами",
    description:
      "Конкурси що перевіряють креативність логіку та роботу в команді.",
    icon: <FaPalette className="text-2xl" />,
  },
  {
    id: 5,
    title: "Room 1 Coffee Shop",
    content: "Свіжа кава та гарячі напої всю ніч",
    description:
      "Насолоджуйтеся кавою приготовленою нашими баристами у затишній атмосфері.",
    icon: <FaCoffee className="text-2xl" />,
  },
  {
    id: 6,
    title: "Choir Room Hallway Photo Booth",
    content: "Веселі фото з реквізитом та миттєвим друком",
    description:
      "Легка фотозона для швидких знімків з друзями та фото на памʼять.",
    icon: <FaCamera className="text-2xl" />,
  },
  {
    id: 7,
    title: "Room 11 Art and Painting",
    content: "Створи власний витвір мистецтва",
    description:
      "Зони для малювання та живопису з підтримкою наставників і можливістю виграти приз.",
    icon: <FaPaintBrush className="text-2xl" />,
  },
  {
    id: 8,
    title: "Middle Hall Sweets Table",
    content: "Домашні солодощі та приємний сюрприз",
    description:
      "Різноманіття десертів і фруктів приготовлених церковною спільнотою.",
    icon: <FaCookieBite className="text-2xl" />,
  },
  {
    id: 9,
    title: "Brothers Room Lounge",
    content: "Спокійний простір для відпочинку",
    description:
      "Місце щоб посидіти поспілкуватися та просто розслабитися.",
    icon: <FaCouch className="text-2xl" />,
  },
  {
    id: 10,
    title: "Rooms 2 and 3 Game Room",
    content: "Ігри та дружні змагання",
    description:
      "Простір для настільних ігор та веселого часу з друзями.",
    icon: <FaCouch className="text-2xl" />,
  },
  {
    id: 11,
    title: "Choir Room 2 Debate Room",
    content: "Дискусії та обмін думками",
    description:
      "Модеровані обговорення що заохочують мислення повагу та активну участь.",
    icon: <FaComment className="text-2xl" />,
  },
  {
    id: 12,
    title: "Small Hall Slideshow",
    content: "Спогади молодіжного року на великому екрані",
    description:
      "Слайдшоу з музикою фотографіями та найкращими моментами року.",
    icon: <FaMusic className="text-2xl" />,
  },
]


  
  const ENdata = [
  {
    id: 1,
    title: "Choir Room 1 Photo Studio",
    content: "Capture New Years moments with friends in high quality photos",
    description:
      "A full photo studio with professional lighting, custom backdrops, and instant prints. Stop by with friends and take home a memory from the first hours of 2026.",
    icon: <FaCamera className="text-2xl" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Room 8 Gift Shop",
    content: "Give a gift to yourself or bless someone anonymously",
    description:
      "Choose a thoughtful gift for yourself or an anonymous friend while supplies last. All proceeds support the Widow Ministry. Celebrate New Years with purpose.",
    icon: <FaEnvelope className="text-2xl" />,
  },
  {
    id: 3,
    title: "Room 4 Knowledge Challenge",
    content: "Test your knowledge and compete for a 100 dollar prize",
    description:
      "A multi category challenge where participants compete for the title of smartest STC Youth member.",
    icon: <FaQuestionCircle className="text-2xl" />,
  },
  {
    id: 4,
    title: "Room 7 Craft Competitions",
    content: "Create, build, and compete for prizes",
    description:
      "Hands on creative challenges that test design, teamwork, and problem solving skills.",
    icon: <FaPalette className="text-2xl" />,
  },
  {
    id: 5,
    title: "Room 1 Coffee Shop",
    content: "Warm drinks made fresh by our baristas",
    description:
      "Enjoy freshly made coffee and drinks while relaxing and socializing throughout the night.",
    icon: <FaCoffee className="text-2xl" />,
  },
  {
    id: 6,
    title: "Choir Room Hallway Photo Booth",
    content: "Fun photos with props and instant prints",
    description:
      "A casual photo booth experience with props and instant photos to take home.",
    icon: <FaCamera className="text-2xl" />,
  },
  {
    id: 7,
    title: "Room 11 Art and Painting",
    content: "Create art and share your talent",
    description:
      "Painting and drawing stations with guidance available. Share your work and compete for prizes.",
    icon: <FaPaintBrush className="text-2xl" />,
  },
  {
    id: 8,
    title: "Middle Hall Sweets Table",
    content: "Homemade desserts and a special surprise",
    description:
      "A wide selection of sweets and fruits prepared by our church community.",
    icon: <FaCookieBite className="text-2xl" />,
  },
  {
    id: 9,
    title: "Brothers Room Lounge",
    content: "Relax, talk, and unwind",
    description:
      "A calm space to sit back, hang out, and enjoy conversation.",
    icon: <FaCouch className="text-2xl" />,
  },
  {
    id: 10,
    title: "Rooms 2 and 3 Game Room",
    content: "Games, competition, and fun with friends",
    description:
      "A dedicated space for group games and friendly competition.",
    icon: <FaCouch className="text-2xl" />,
  },
  {
    id: 11,
    title: "Choir Room 2 Debate Room",
    content: "Discuss, challenge ideas, and think deeply",
    description:
      "Guided discussions and debate topics designed to encourage thoughtful conversation and respectful dialogue.",
    icon: <FaComment className="text-2xl" />,
  },
  {
    id: 12,
    title: "Small Hall Slideshow",
    content: "Relive this years youth memories",
    description:
      "A highlight slideshow of the year with music, photos, and special moments on the big screen.",
    icon: <FaMusic className="text-2xl" />,
  },
]


  const list = lang === "uk" ? UKdata : ENdata

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-black text-zinc-100 flex flex-col items-center px-2 sm:px-6"
          : "min-h-screen bg-white text-zinc-900 flex flex-col items-center px-2 sm:px-6"
      }
    >
      <div className="w-full max-w-6xl pt-4">
        <Header isDark={isDark} />

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
          <Button
            variant={isDark ? "secondary" : "default"}
            onClick={() => setLang((prev) => (prev === "en" ? "uk" : "en"))}
            className="h-10 w-full sm:w-auto px-4 whitespace-nowrap"
          >
            {lang === "en" ? "Український" : "English"}
          </Button>

          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={
              isDark
                ? "h-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-100 hover:border-zinc-600"
                : "h-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-900 hover:border-zinc-400"
            }
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>

      <div className="mt-6 w-full max-w-5xl">
        <EventSchedule isDark={isDark} lang={lang} />
      </div>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {list.map((item) => {
          const isOpen = openCard === item.id
          const isHovered = hoverCard === item.id

          return (
            <Card
              key={item.id}
              onClick={() => setOpenCard(isOpen ? null : item.id)}
              onMouseEnter={() => setHoverCard(item.id)}
              onMouseLeave={() => setHoverCard(null)}
              className={
                isDark
                  ? `cursor-pointer rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300
                     hover:border-zinc-600 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                     ${isOpen || isHovered ? "border-zinc-500 shadow-[0_0_30px_rgba(255,255,255,0.12)]" : ""}`
                  : `cursor-pointer rounded-2xl bg-white border border-zinc-200 transition-all duration-300
                     hover:border-zinc-400 hover:shadow-[0_0_25px_rgba(0,0,0,0.08)]
                     ${isOpen || isHovered ? "border-zinc-500 shadow-[0_0_30px_rgba(0,0,0,0.10)]" : ""}`
              }
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{item.icon}</span>
                  <CardTitle className={isDark ? "text-base font-semibold text-zinc-100" : "text-base font-semibold text-zinc-900"}>
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className={isDark ? "text-zinc-400" : "text-zinc-600"}>{item.content}</p>
                {isOpen && (
                  <p className={isDark ? "mt-3 text-zinc-300 leading-relaxed" : "mt-3 text-zinc-700 leading-relaxed"}>
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <footer className="mt-20 pb-6 text-xs text-zinc-500">
        © {year} Slavic Trinity Church, Sacramento, CA. All Rights Reserved.
      </footer>
    </div>
  )
}
