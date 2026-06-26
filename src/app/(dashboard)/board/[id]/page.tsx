import { notFound } from "next/navigation";

export default async function BoardPage({
  params,
}: {
  params: { id: string };
}) {
  const boardId = params.id;

  const board = {
    title: "test",
  };

  if (!board) {
    notFound();
  }

  return (
    <div>
      <h1>{board.title}</h1>
    </div>
  );
}
