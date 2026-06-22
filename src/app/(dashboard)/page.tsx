export default function Home() {
  const boards = [
    { id: 1, title: "Family Vacation" },
    { id: 2, title: "Wild Iris Climbing Trip" },
    { id: 3, title: "Kyrgyzstan" },
    { id: 4, title: "Dinner Party" },
  ];

  return (
    <div className="flex flex-col flex-1 p-8 h-full bg-background text-text-primary">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">My Boards</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 min-h-0">
        {boards.map((board) => (
          <button
            key={board.id}
            className="flex items-center justify-center p-8 bg-foreground rounded-2xl border-2 border-transparent hover:border-accent hover:shadow-md transition-all duration-200 group"
          >
            <span className="text-2xl font-semibold group-hover:-translate-y-1 transition-transform duration-200">
              {board.title}
            </span>
          </button>
        ))}
      </main>
    </div>
  );
}