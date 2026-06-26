"use client";

import { Card, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const boards = [
    { id: 1, title: "Family Vacation" },
    { id: 2, title: "Wild Iris Climbing Trip" },
    { id: 3, title: "Kyrgyzstan" },
    { id: 4, title: "Dinner Party" },
    { id: 5, title: "Kilby Block Party" },
    { id: 6, title: "Christmas 2025" },
    { id: 7, title: "Zion National Park" },
  ];

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-text-primary">
      <Header
        title={"My Boards"}
        rightActions={
          <Button
            onClick={() => console.log("Create Board clicked!")}
            className="btn-surface h-auto rounded-2xl px-5 py-2 text-md"
          >
            Create Board
          </Button>
        }
      />
      <main className="grid min-h-0 flex-1 auto-rows-[calc(50%-0.75rem)] grid-cols-1 gap-6 overflow-y-auto p-page md:grid-cols-2">
        {boards.map((board) => (
          <Card
            key={board.id}
            role="button"
            tabIndex={0}
            className="group flex cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-foreground transition-all duration-200 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <CardTitle className="border-none text-center text-3xl font-semibold transition-transform duration-200 group-hover:-translate-y-1">
              {board.title}
            </CardTitle>
          </Card>
        ))}
      </main>
    </div>
  );
}
