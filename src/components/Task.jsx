import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

function Task({task, index}){

    const {tasks, setTasks} = useContext(TaskContext)

    const handleDelete = () => {
        const newTasks = tasks.filter((_,i) => i !== index)
        setTasks(newTasks)
    }

    const handleComplete = () => {
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }

    return(
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
            <button onClick={handleComplete} className="px-3 py-1 bg-green-600 hover:bg-green-800 text-white font-bold rounded">{!task.completed ? "Complete" : "Undo"}</button>
            <h2 className={`text-lg px-3 ${task.completed ? "line-through text-gray-400" : ""}`}>{task.title}</h2>
            <button onClick={handleDelete} className="px-3 py-1 bg-red-600 hover:bg-red-800 text-white font-bold rounded">Delete</button>
        </div>
    )
}

export default Task