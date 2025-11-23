import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../services/firebase"

function AddTask({ user }) {
    const [text, setText] = useState("")
    const [priority, setPriority] = useState(false)
    const [tag, setTag] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text.trim() === "") return

        try {
            const docRef = await addDoc(collection(db, "tasks"), {
                title: text,
                completed: false,
                createdAt: serverTimestamp(),
                priority: priority,
                tag: tag,
                userID: user.uid
            })
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.log(e)
        }

        setText("")
        setTag("")
        setPriority(false)
    }

    return (
        <div className="pt-6">
            <form
                onSubmit={handleSubmit}
                className="
                    flex flex-col sm:flex-row gap-4
                    items-center w-full max-w-2xl mx-auto
                    bg-white p-5 rounded-xl shadow-lg
                    dark:bg-gray-800 transition-colors duration-200
                "
            >
                {/* Task Input */}
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Task name"
                    className="
                        flex-1 min-w-[150px]
                        p-3 rounded-lg border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-blue-400
                        placeholder-gray-400
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
                    "
                />

                {/* Tag Input */}
                <input
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="Tag (e.g. work)"
                    className="
                        flex-1 min-w-[150px]
                        p-3 rounded-lg border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-blue-400
                        placeholder-gray-400
                        dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400
                    "
                />

                {/* Priority Checkbox */}
                <label
                    className="
                        flex items-center gap-2
                        bg-gray-100 px-3 py-2 rounded-lg
                        border border-gray-300
                        cursor-pointer select-none
                        dark:bg-gray-700 dark:border-gray-600
                    "
                >
                    <input
                        type="checkbox"
                        checked={priority}
                        onChange={(e) => setPriority(e.target.checked)}
                        className="h-4 w-4"
                    />
                    <span className="text-gray-700 dark:text-white">Priority</span>
                </label>

                {/* Add button */}
                <button
                    type="submit"
                    className="
                        bg-blue-600 hover:bg-blue-700
                        text-white px-6 py-2.5
                        rounded-lg shadow
                        transition duration-200
                        whitespace-nowrap
                    "
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTask
