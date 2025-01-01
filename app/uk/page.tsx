'use client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
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
  FaQuestionCircle
} from 'react-icons/fa';
import Schedule from "./schedule";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {

  const [openCard, setOpenCard] = useState<number | null>(null);
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      title: "Хорова кімната #1",
      content: "Прекрасні спогади з друзями, зафіксовані на світлинах",
      description:
        "Фотостудія з вражаючими декораціями, професійним освітленням, чудовою фотозйомкою та миттєвим друком, де ВИ можете відчути перші години 2025 року! Запрошуйте друзів і знайомих, щоб разом розділити захоплення!",
      icon: <FaCamera className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 2,
      title: "Кімната #9",
      content:
        "Найщиріші побажання та святкові листівки, щоб висловити себе та подарувати радість оточуючим! Додайте домашній Cake Pop за $2, щоб здивувати отримувача.",
      description:
        "Кімната з робочими столами, листівками та всіма необхідними ресурсами, аби написати щире послання людині, якій хочете висловити повагу або вдячність. Можна залишити анонімним або підписати власним іменем, але обов’язково наповніть листівку добром та любов’ю!",
      icon: <FaEnvelope className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 3,
      title: "Кімната #8",
      content: "Отримайте свої листівки ще швидше!",
      description:
        "Якщо вам не терпиться, поки організатори знайдуть вас і вручать листівки, адресовані саме вам, заходьте до Кімнати №8 і шукайте картки на столах, розсортовані за першою літерою вашого прізвища.",
      icon: <FaClipboardList className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 4,
      title: "Кімната #7 — Конкурси виробів",
      content: "Змагайтеся з друзями та молоддю за приз, беручи участь у конкурсі виробів!",
      description:
        "Це веселий і невимушений спосіб провести вільний час із друзями та місце, де можна проявити свої інженерні, креативні та дизайнерські вміння й отримати шанс виграти приз!",
      icon: <FaPalette className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 5,
      title: "Кімната #5",
      content:
        "Використайте свій художній талант, щоб створити шедевр і поділитися ним з молоддю за приз та визнання!",
      description:
        "Тут є декілька мистецьких та письмових зон з натхненною атмосферою і чудовою командою, яка допоможе вивільнити вашу креативність і дати волю внутрішньому митцю, створюючи мальовничий малюнок або неперевершений вірш!",
      icon: <FaPaintBrush className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 6,
      title: "Кімната #4",
      content:
        "Випробуйте свої знання в різних категоріях, щоб здобути звання найрозумнішого учасника молоді STC та вагомий грошовий приз!",
      description:
        "Кімната з чудовим професійним оздобленням і справедливою системою перевірки знань. Готові прийняти виклик? Чи зможете ви здобути приз і піти з цього святкування як найрозумніший учасник?",
      icon: <FaQuestionCircle className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 7,
      title: "Кімната #1 — Кава",
      content:
        "Наші чудові баристи готові приготувати для вас запашну каву, щоб зробити ваш вечір ще святковішим.",
      description:
        "Це обслуговування в бізнес-стилі з надзвичайно смачними кавовими напоями від команди STC Coffee та їхньою теплою атмосферою. Не пропустіть їхні особливі позиції в меню, які можна замовити через QR-код під час прийому їжі, а також безпосередньо у черзі в вільний час!",
      icon: <FaCoffee className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 8,
      title: "Середній зал",
      content: "БАГАТО найсмачніших домашніх солодощів із приємним сюрпризом!",
      description:
        "Різноманітні ласощі та смаколики від найкращих пекарів i кухарів Слов’янської Трінітарної Церкви. Скуштуйте широкий вибір фруктів і солодкого та обов’язково завітайте, аби дізнатися про великий сюрприз!",
      icon: <FaCookieBite className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 9,
      title: "Братська кімната",
      content:
        "Хапайте напої, солодощі та друзів, щоб розслабитись i провести час y невимушених розмовах та iграх у затишній атмосфері!",
      description:
        "Це лаундж-зона, де можна відпочити в спокійній, приємній обстановці та поспілкуватися з іншими. Обирайте з безлічі ігор на кшталт Дженга чи Connect 4 або спробуйте скласти пазл разом із друзями чи новими знайомими!",
      icon: <FaCouch className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 10,
      title: "Малий зал",
      content:
        "Перегляньте цьогорічний слайд-шоу, що висвітлює найяскравіші моменти молоді!",
      description:
        "Ви завжди можете повернутись до своєї зони i подивитися спогади за минулий рік, якими ділиться молодь. Вільно беріть із собою солодощі й напої, дивіться слайд-шоу, слухайте музику, спілкуйтеся з людьми й насолоджуйтесь вечором!",
      icon: <FaMusic className="text-2xl text-gray-700" aria-hidden="true" />,
    },
  ];
  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.png" alt="STC logo" width={100} height={100} />
        <h1 className="text-3xl font-bold text-gray-800">2025 New Years Celebration</h1>
      <Link href={"/"}>
        <Button>
        English
        </Button>
        </Link>
      </div>
      <div>
        <Schedule />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
        {data.map((item) => {
          const isOpen = openCard === item.id;
          const isHovered = hoverCard === item.id;

          return (
            <Card
              key={item.id}
              // Toggle open on click
              onClick={() => setOpenCard(isOpen ? null : item.id)}
              // Track hover
              onMouseEnter={() => setHoverCard(item.id)}
              onMouseLeave={() => setHoverCard(null)}
              // Add conditional border
              className={`transition-shadow duration-300 cursor-pointer
                shadow-lg hover:shadow-xl
                ${isOpen || isHovered ? "border-2 shadow-xl" : ""}
              `}
            >
              <CardHeader className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.content}</p>
                {isOpen && (
                  <p className="text-gray-600 mt-2">{item.description}</p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <footer className="sticky top-[100vh] text-nowrap text-[12px] md:text-[16px] pt-12">
        © 2025 Slavic Trinity Church, Sacramento, CA. All Rights Reserved.
      </footer>
    </div>
  );
}