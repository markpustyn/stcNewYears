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
      title: "Choir Room #1",
      content: "Beautiful memories with friends captured in timeless photos",
      description:
        "A photo studio with a spectacular backdrop, professional lighting, masterful photography, and on-the-spot printing where you can capture the first hours of 2025! Bring friends and company to share the excitement with them!",
      icon: <FaCamera className="text-2xl text-gray-700" aria-hidden="true" />, // Photography icon
    },
    {
      id: 2,
      title: "Classroom #9",
      content:
        "Send your purest wishes and celebratory letters to express yourself and bring the joy to people around you! Attach a homemade cake pop for just $2 to surprise your recipient.",
      description:
        "A room set up with writing stations, cards, and all necessary resources to write a heartfelt card to someone you are glad to know, respect, or want to express your gratitude to. You can make it anonymous or share your name, but be sure to fill it with kindness and love!",
      icon: <FaEnvelope className="text-2xl text-gray-700" aria-hidden="true" />, // Envelope icon
    },
    {
      id: 3,
      title: "Classroom #8",
      content: "Pick up your cards even faster!",
      description:
        "If you cannot wait for the staff to find you and hand you the cards addressed to you, feel free to stop by Room #8 and find the cards on the tables organized by the first letter of your last name.",
      icon: <FaClipboardList className="text-2xl text-gray-700" aria-hidden="true" />, // Clipboard icon
    },
    {
      id: 4,
      title: "Classroom #7 - Craft Competitions",
      content:
        "Compete with your friends and other youth for a prize by participating in craft competitions!",
      description:
        "A fun and relaxing way to spend your free time with friends and a place to try out your engineering, critical thinking, and designing skills for a chance to receive a prize!",
      icon: <FaPalette className="text-2xl text-gray-700" aria-hidden="true" />, // Palette icon
    },
    {
      id: 5,
      title: "Classroom #5",
      content:
        "Use your artistic talents to create a masterpiece and share it with youth for a prize and youth admiration!",
      description:
        "Several drawing and writing stations with an inspiring atmosphere and amazing staff to help you be creative and express your inner artist in painting a beautiful picture or composing an amazing poem!",
      icon: <FaPaintBrush className="text-2xl text-gray-700" aria-hidden="true" />, // Paint Brush icon
    },
    {
      id: 6,
      title: "Classroom #4",
      content:
        "Test your knowledge in various categories for a title of the smartest STC Youth member and a sizable cash prize!",
      description:
        "A room with a beautiful professional decor and a fair system to really test your knowledge. Are you ready for a challenge? Can you win the prize and walk away from this night’s celebration as the smartest contestor?",
      icon: <FaQuestionCircle className="text-2xl text-gray-700" aria-hidden="true" />, // Question Circle icon
    },
    {
      id: 7,
      title: "Classroom #1 - Coffee Bar",
      content:
        "Our great baristas ready to make you a cup of delicious coffee to accompany you for the celebration",
      description:
        "A business-style service of delectable coffee by the amazing STC Coffee crew and their welcoming atmosphere. Don’t miss out on their amazing menu items, open for ordering through the QR code during the food time and via the live line during the free time!",
      icon: <FaCoffee className="text-2xl text-gray-700" aria-hidden="true" />, // Coffee icon
    },
    {
      id: 8,
      title: "Middle Hall",
      content: "LOTS of the most delicious homemade sweets with a unique surprise!",
      description:
        "Various sweets and treats brought to you by the best bakers and cooks of Slavic Trinity Church. Enjoy a variety of fruits and sweets and definitely come by to find out the big surprise!",
      icon: <FaCookieBite className="text-2xl text-gray-700" aria-hidden="true" />, // Cookie Bite icon
    },
    {
      id: 9,
      title: "Brothers Room",
      content:
        "Grab your drinks, your sweets, and your friends to relax and spend time together in conversations and games with a warm cozy atmosphere!",
      description:
        "A lounge area to spend time in a quiet, pleasant environment and communicate with other people. Choose from a number of games such as Jenga or Connect 4, or try to finish a puzzle with a group of friends and strangers!",
      icon: <FaCouch className="text-2xl text-gray-700" aria-hidden="true" />, // Couch icon
    },
    {
      id: 10,
      title: "Small Hall",
      content: "Watch our this years slideshow highlighting this years youths moments",
      description:
        "You can always come back to your spot and watch the memories from the year shared by the youth. Feel free to bring your sweets and beverages back and watch the slideshow, listen to music, talk to people, and enjoy the night!",
      icon: <FaMusic className="text-2xl text-gray-700" aria-hidden="true" />, // Music icon
    },
  ];
  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 w-full max-w-4xl">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="STC logo" width={80} height={80} className="sm:w-20 sm:h-20" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            2025 New Years Celebration
          </h1>
        </div>
        <Link href="/uk">
          <Button className="w-full sm:w-auto">
            Український
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
                <div className="flex items-center">
                  <h2 className="text-md text-gray-400 text-center pt-2">Click Here to see more</h2>
                </div>
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
