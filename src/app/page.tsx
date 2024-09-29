import { db } from "@/db";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const snippets = await db.snippet.findMany()

  const listOfSnippets = snippets.map(snippet => {
    return <Link  
    href={`/snippets/${snippet.id}`}
    key={snippet.id}
    className="flex justify-between items-center p-2 border rounded"
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  })

  return (
    <>
    <div className="flex justify-between items-center py-4">
      <h3 className="text-xl font-bold">Snippets</h3>
      <Link
      href={'/snippets/new'}
      className="border rounded p-2"
      >new</Link>
    </div>
    <div className="flex flex-col gap-2">
      {listOfSnippets}
    </div>
    </>
  );
}
