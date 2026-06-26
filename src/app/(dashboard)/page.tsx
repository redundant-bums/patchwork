"use client";

import { Card, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

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
    <>
      <Header
        title={"My Boards"}
        rightActions={
          <Button
            onClick={() => console.log("Create Board clicked!")}
            className="btn-surface btn-std"
          >
            Create Board
          </Button>
        }
      />
      <main className="grid min-h-0 flex-1 auto-rows-[calc(50%-0.75rem)] grid-cols-1 gap-6 overflow-y-auto p-page md:grid-cols-2">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={{
              pathname: `/board/${board.id}`,
              query: { title: board.title },
            }}
            className="contents"
          >
            <Card
              role="button"
              tabIndex={0}
              className="group flex h-full cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-foreground transition-all duration-200 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <CardTitle className="border-none text-center text-3xl font-semibold transition-transform duration-200 group-hover:-translate-y-1">
                {board.title}
              </CardTitle>
            </Card>
          </Link>
        ))}
      </main>
    </>
  );
}
