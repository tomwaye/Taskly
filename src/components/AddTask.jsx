import { useContext, useState} from "react"
import { TaskContext } from "../contexts/TaskContext"

function AddTask(){

    const {tasks, setTasks} = useContext(TaskContext)
    const [text, setText]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim() === "") return
        setTasks([...tasks, {title: text, completed: false}])
        setText("")
    }

    return(
        <div className="py-5">
            <form  onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-md">
                <input type="text" value={text} 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add task"
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

export default AddTask