'use client'

import * as actions from "@/actions"
import { Editor } from "@monaco-editor/react"
import type { Snippet } from "@prisma/client"
import { useState } from "react"

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code)
 
    const handleEditorChange = (value: string = "") => {
        setCode(value);
    }

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return (
        <div className="flex flex-col gap-4">
            <Editor
                height='40vh'
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={snippet.code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="w-full p-2 border rounded bg-blue-200">Save</button>
            </form>
        </div>
    )
}
