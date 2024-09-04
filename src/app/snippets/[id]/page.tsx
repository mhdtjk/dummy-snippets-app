import { db } from "@/db"
import Link from "next/link"
import { notFound } from "next/navigation"
import * as actions from "@/actions"

interface pageProps {
    params: {
        id: string
    }
}

export default async function page(props: pageProps) {
    const snippet = await db.snippet.findFirst({
        where: { id: +props.params.id }
    })

    if (!snippet) return notFound()

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)

    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <h3 className="text-xl font-bold">{snippet?.title}</h3>
                <div className="flex gap-2">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>

            <pre className="p-4 border rounded bg-gray-100">
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
} 
