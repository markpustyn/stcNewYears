import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  FaCoffee,
  FaPaintBrush,
  FaEnvelope,
  FaCouch,
  FaCamera,
  FaQuestionCircle,
} from "react-icons/fa"; // Importing icons from react-icons

export default function Home() {
  const data = [
    {
      id: 1,
      title: "Room 1 - Coffee",
      content:
        "Enjoy Hot and Iced Lattes, Cappuccinos, and Americanos in our cozy coffee room.",
      icon: <FaCoffee className="text-2xl text-gray-700" aria-hidden="true" />, // Coffee icon
    },
    {
      id: 2,
      title: "Room 7 - Crafts",
      content:
        "Build gingerbread houses or participate in a bridge-building competition in our crafts room.",
      icon: <FaPaintBrush className="text-2xl text-gray-700" aria-hidden="true" />, // Crafts icon
    },
    {
      id: 3,
      title: "Room 9 - Mail",
      content:
        "Send a letter to your friends and add a cake pop for just $2 each in our mail room.",
      icon: <FaEnvelope className="text-2xl text-gray-700" aria-hidden="true" />,
    },
    {
      id: 4,
      title: "Brothers Room - Lounge",
      content:
        "Relax in our lounge equipped with bean bag chairs, Jenga, Connect 4, and puzzles.",
      icon: <FaCouch className="text-2xl text-gray-700" aria-hidden="true" />, // Lounge icon
    },
    {
      id: 5,
      title: "Choir Room 1 - Photos",
      content:
        "Capture memories with our photographer and photo booth for you and your friends.",
      icon: <FaCamera className="text-2xl text-gray-700" aria-hidden="true" />, // Photography icon
    },
    {
      id: 6,
      title: "Choir Room 2 - Trivia",
      content:
        "Challenge yourself with trivia on topics like Bible, History, Math, and more.",
      icon: <FaQuestionCircle className="text-2xl text-gray-700" aria-hidden="true" />, // Trivia icon
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-8">
        <Image src="/logo.png" alt="STC logo" width={100} height={100} />
        <h1 className="text-3xl font-bold text-gray-800">2025 New Years Celebration</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
        {data.map((item) => (
          <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {item.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
