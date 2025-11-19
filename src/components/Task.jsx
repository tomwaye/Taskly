import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

function Task({task, index}){

    const {tasks, setTasks} = useContext(TaskContext)

    const handleComplete = () => {
        const newTasks = tasks.filter((_,i) => i !== index)
        setTasks(newTasks)
    }

    return(
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
        <h2 className="text-lg">{task.title}</h2>
        <button onClick={handleComplete} className="px-3 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded">Complete</button>
        </div>
    )
}

export default Task