import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function Home() {
  const Data = [
    {
      id: 1,
      title: "Room 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
    {
      id: 2,
      title: "Room 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
    {
      id: 3,
      title: "Room 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
    {
      id: 4,
      title: "Room 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
    {
      id: 5,
      title: "Room 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
    {
      id: 6,
      title: "Room 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita fugiat exercitationem eos impedit illum.",
    },
  ];

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
    <div className="flex items-center gap-4 mb-8">
      <Image src="/logo.png" alt="STC logo" width={100} height={100} />
      <h1 className="text-3xl font-bold text-gray-800">2025 New Years</h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-2/3">
        {Data.map((item) => (
          <DropdownMenu key={item.id}>
            <DropdownMenuTrigger>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.content}</p>
                </CardContent>
              </Card>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </div>
  );
}
