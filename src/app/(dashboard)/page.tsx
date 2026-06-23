import { ThemeToggle } from "@/features/theme/theme-toggle";
import { Card, CardTitle } from "@/components/ui/card";
import Header from "@/components/layout/header";

export default function Home() {
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
    <div className="flex flex-col h-screen bg-background text-text-primary overflow-hidden">
      <Header title={"My Boards"} rightActions={<ThemeToggle />}></Header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0 overflow-y-auto auto-rows-[calc(50%-0.75rem)] p-page">
        {boards.map((board) => (
          <Card
            key={board.id}
            role="button"
            tabIndex={0}
            className="flex items-center justify-center bg-foreground rounded-2xl border-2 border-transparent hover:border-accent hover:shadow-md transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <CardTitle className="text-3xl font-semibold text-center group-hover:-translate-y-1 transition-transform duration-200 border-none">
              {board.title}
            </CardTitle>
          </Card>
        ))}
      </main>
    </div>
  );
}