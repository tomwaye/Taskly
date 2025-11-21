import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../services/firebase"

function AddTaskList({ user }) {

    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text.trim() === "") return
        try {
            const docRef = await addDoc(collection(db, "taskLists"), {
                title: text,
                createdAt: serverTimestamp(),
                queryField: "tag",
                queryValue: text,
                userID: user.uid
            })
            console.log("Document written with ID: ", docRef.id)
        } catch (e) {
            console.log(e)
        }
        setText("")
    }

    return (
        <div className="py-5">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-md">
                <input type="text" value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add taskbox"
                    className="
                    flex-1
                    p-3
                    rounded-lg
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                    focus:border-transparent
                    transition
                    placeholder-gray-400
                    "
                />
                <button
                    type="submit"
                    className="
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    shadow-md
                    transition
                    duration-200
                    ease-in-out
                    "
                >Add</button>
            </form>
        </div>
    )
}

export default AddTaskList