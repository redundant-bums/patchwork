import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function BoardPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ title?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const boardId = resolvedParams.id;
  const boardTitle = resolvedSearchParams.title;

  if (!boardId || !boardTitle) {
    notFound();
  }

  return (
    <>
      <Header
        title={boardTitle}
        rightActions={
          <Button className="btn-surface btn-std">Upload Photo</Button>
        }
      />
      <main>
        <h1>Welcome to {boardTitle}</h1>
      </main>
    </>
  );
}
