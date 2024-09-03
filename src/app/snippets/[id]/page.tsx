import { db } from "@/db"
import { notFound } from "next/navigation"

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

    return (
        <div>{snippet?.title}</div>
    )
}
