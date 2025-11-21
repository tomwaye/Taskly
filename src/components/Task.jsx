

function Task({task, toggleComplete, deleteTask, priority}){

    return(
        <div className={`flex items-center justify-between ${priority ? "bg-red-300" : "bg-gray-100"} p-3 rounded-lg mb-3`}>
            <button onClick={toggleComplete} className="px-3 py-1 bg-green-600 hover:bg-green-800 text-white font-bold rounded">{!task.completed ? "Complete" : "Undo"}</button>
            <h2 className={`text-lg ${priority ? "font-bold" : ""} px-3 ${task.completed && !priority ? "line-through text-gray-400" : ""} ${task.completed && priority ? "line-through text-red-800" : ""}`}>{task.title}</h2>
            <button onClick={deleteTask} className="px-3 py-1 bg-red-600 hover:bg-red-800 text-white font-bold rounded">Delete</button>
        </div>
    )
}

export default Task