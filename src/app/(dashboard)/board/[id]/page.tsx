import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
export const runtime = "edge";
// mock fetcher
async function getBoardById(id: string) {
  const mockBoards = [
    { id: "1", title: "Family Vacation" },
    { id: "2", title: "Wild Iris Climbing Trip" },
    { id: "3", title: "Kyrgyzstan" },
    { id: "4", title: "Dinner Party" },
    { id: "5", title: "Kilby Block Party" },
    { id: "6", title: "Christmas 2025" },
    { id: "7", title: "Zion National Park" },
  ];

  return mockBoards.find((b) => b.id === id) || null;
}

export default async function BoardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const boardId = resolvedParams.id;

  const board = await getBoardById(boardId);

  if (!board) {
    notFound();
  }

  return (
    <>
      <Header
        title={board.title}
        rightActions={
          <Button className="btn-surface btn-std">Upload Photo</Button>
        }
      />
      <main className="flex flex-1 items-center justify-center">
        <h1>{board.title}</h1>
      </main>
    </>
  );
}
