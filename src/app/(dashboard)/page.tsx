import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
  const boards = [
    { id: 1, title: "Family Vacation" },
    { id: 2, title: "Wild Iris Climbing Trip" },
    { id: 3, title: "Kyrgyzstan" },
    { id: 4, title: "Dinner Party" },
  ];

  return (
    <div className="flex flex-col flex-1 p-8 h-full bg-background text-text-primary">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-tight">My Boards</h1>
        <ThemeToggle />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
        {boards.map((board) => (
          <Card
            key={board.id}
            role="button"
            tabIndex={0}
            className="flex items-center justify-center p-8 bg-foreground rounded-2xl border-2 border-transparent hover:border-accent hover:shadow-md transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <CardTitle className="text-2xl font-semibold group-hover:-translate-y-1 transition-transform duration-200 border-none">
              {board.title}
            </CardTitle>
          </Card>
        ))}
      </main>
    </div>
  );
}