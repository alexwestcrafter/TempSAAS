"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Riya",
    avatar: "R",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
  {
    name: "Ayush",
    avatar: "A",
    title: "CEO",
    description: "My experience with this AI is just amazing! Gives very quick responses.",
  },
  {
    name: "Suman",
    avatar: "S",
    title: "Musician",
    description: "It helps me create music as per my needs for my upcoming projects.",
  },
  {
    name: "Debashri",
    avatar: "D",
    title: "HR",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Achirshman",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos and videos!",
  },
  {
    name: "Praveen",
    avatar: "P",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  }
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#4F4F4F] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}