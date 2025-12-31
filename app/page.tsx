"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  FaSun,
  FaMoon,
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

  const UKdata = [
    {
      id: 1,
      title: "Хорова кімната #1",
      content: "Прекрасні спогади з друзями, зафіксовані на світлинах",
      description:
        "Фотостудія з вражаючими декораціями, професійним освітленням, чудовою фотозйомкою та миттєвим друком, де ВИ можете відчути перші години 2025 року! Запрошуйте друзів і знайомих, щоб разом розділити захоплення!",
      icon: <FaCamera className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 2,
      title: "Кімната #9",
      content:
        "Найщиріші побажання та святкові листівки, щоб висловити себе та подарувати радість оточуючим! Додайте домашній Cake Pop за $2, щоб здивувати отримувача.",
      description:
        "Кімната з робочими столами, листівками та всіма необхідними ресурсами, аби написати щире послання людині, якій хочете висловити повагу або вдячність. Можна залишити анонімним або підписати власним іменем, але обов’язково наповніть листівку добром та любов’ю!",
      icon: <FaEnvelope className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 3,
      title: "Кімната #8",
      content: "Отримайте свої листівки ще швидше!",
      description:
        "Якщо вам не терпиться, поки організатори знайдуть вас і вручать листівки, адресовані саме вам, заходьте до Кімнати №8 і шукайте картки на столах, розсортовані за першою літерою вашого прізвища.",
      icon: <FaClipboardList className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 4,
      title: "Кімната #7 — Конкурси виробів",
      content: "Змагайтеся з друзями та молоддю за приз, беручи участь у конкурсі виробів!",
      description:
        "Це веселий і невимушений спосіб провести вільний час із друзями та місце, де можна проявити свої інженерні, креативні та дизайнерські вміння й отримати шанс виграти приз!",
      icon: <FaPalette className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 5,
      title: "Кімната #5",
      content:
        "Використайте свій художній талант, щоб створити шедевр і поділитися ним з молоддю за приз та визнання!",
      description:
        "Тут є декілька мистецьких та письмових зон з натхненною атмосферою і чудовою командою, яка допоможе вивільнити вашу креативність і дати волю внутрішньому митцю, створюючи мальовничий малюнок або неперевершений вірш!",
      icon: <FaPaintBrush className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 6,
      title: "Кімната #4",
      content:
        "Випробуйте свої знання в різних категоріях, щоб здобути звання найрозумнішого учасника молоді STC та вагомий грошовий приз!",
      description:
        "Кімната з чудовим професійним оздобленням і справедливою системою перевірки знань. Готові прийняти виклик? Чи зможете ви здобути приз і піти з цього святкування як найрозумніший учасник?",
      icon: <FaQuestionCircle className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 7,
      title: "Кімната #1 — Кава",
      content:
        "Наші чудові баристи готові приготувати для вас запашну каву, щоб зробити ваш вечір ще святковішим.",
      description:
        "Це обслуговування в бізнес-стилі з надзвичайно смачними кавовими напоями від команди STC Coffee та їхньою теплою атмосферою. Не пропустіть їхні особливі позиції в меню, які можна замовити через QR-код під час прийому їжі, а також безпосередньо у черзі в вільний час!",
      icon: <FaCoffee className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 8,
      title: "Середній зал",
      content: "БАГАТО найсмачніших домашніх солодощів із приємним сюрпризом!",
      description:
        "Різноманітні ласощі та смаколики від найкращих пекарів i кухарів Слов’янської Трінітарної Церкви. Скуштуйте широкий вибір фруктів і солодкого та обов’язково завітайте, аби дізнатися про великий сюрприз!",
      icon: <FaCookieBite className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 9,
      title: "Братська кімната",
      content:
        "Хапайте напої, солодощі та друзів, щоб розслабитись i провести час y невимушених розмовах та iграх у затишній атмосфері!",
      description:
        "Це лаундж-зона, де можна відпочити в спокійній, приємній обстановці та поспілкуватися з іншими. Обирайте з безлічі ігор на кшталт Дженга чи Connect 4 або спробуйте скласти пазл разом із друзями чи новими знайомими!",
      icon: <FaCouch className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 10,
      title: "Малий зал",
      content: "Перегляньте цьогорічний слайд-шоу, що висвітлює найяскравіші моменти молоді!",
      description:
        "Ви завжди можете повернутись до своєї зони i подивитися спогади за минулий рік, якими ділиться молодь. Вільно беріть із собою солодощі й напої, дивіться слайд-шоу, слухайте музику, спілкуйтеся з людьми й насолоджуйтесь вечором!",
      icon: <FaMusic className="text-2xl" aria-hidden="true" />,
    },
  ]

  const ENdata = [
    {
      id: 1,
      title: "Choir Room #1 - Photo Studio",
      content: "Beautiful memories with friends captured in timeless photos",
      description:
        "A photo studio with a spectacular backdrop, professional lighting, masterful photography, and on-the-spot printing where YOU can capture the first hours of 2026! Bring friends and company to share the excitement with them!",
      icon: <FaCamera className="text-2xl" aria-hidden="true" />,
    },
    {
      id: 2,
      title: "Room #8 - Gift Shop",
      content:
        "This New Years you can gift yourself or an anonymous friend a gift from the Gift Shop",
      description:
        " A thoughtful gift for yourself or an anonymous friend is available while supplies last. Visit room #8 to secure your gift. Any proceeds raised will be donated to our Widow Ministry! Be blessed and Happy New Years!",
      icon: <FaEnvelope className="text-2xl" />,
    },
    {
      id: 3,
      title: "Room #4 - Test Room",
      content: "Win $100 Gift for the test your knowledge in various categories for a title of the smartest STC Youth member!",
      description: "Take the test comrpsied of several categories.",
      icon: <FaQuestionCircle className="text-2xl" />,
    },
    {
      id: 4,
      title: "Room #7 - Craft Competitions",
      content: "Compete with your friends and other youth for a prize by participating in craft competitions!",
      description: "Creative competitions testing design and problem solving skills with prizes for winners.",
      icon: <FaPalette className="text-2xl" />,
    },
    {
      id: 7,
      title: "Choir Room Hallway - Photo Booth",
      content: "Complete photo booth experience with props and instant prints to take home!",
      description: "Take fun photos with friends using various props and instant printouts to take home.",
      icon: <FaCoffee className="text-2xl" />,
    },
    {
      id: 5,
      title: "Room #11 - Art & Paiting",
      content: "Use your artistic talents to create a masterpiece and share it with youth for a prize and youth admiration!",
      description: "Drawing and writing stations with staff to help you express your creativity.",
      icon: <FaPaintBrush className="text-2xl" />,
    },
    {
      id: 6,
      title: "Room #11 - Art & Paiting",
      content: "Use your artistic talents to create a masterpiece and share it with youth for a prize and youth admiration!",
      description: "Drawing and writing stations with staff to help you express your creativity.",
      icon: <FaPaintBrush className="text-2xl" />,
    },
    {
      id: 8,
      title: "Middle Hall",
      content: "LOTS of the most delicious homemade sweets with a unique surprise!",
      description: "A variety of sweets and fruits prepared by the church community.",
      icon: <FaCookieBite className="text-2xl" />,
    },
    {
      id: 9,
      title: "Brothers Room",
      content: "Relax and hang out",
      description: "A lounge space with games and a cozy atmosphere to talk and unwind.",
      icon: <FaCouch className="text-2xl" />,
    },
    {
      id: 10,
      title: "Small Hall",
      content: "Watch our this years slideshow highlighting this years youths moments",
      description: "Relive the years moments with music and memories on the big screen.",
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
