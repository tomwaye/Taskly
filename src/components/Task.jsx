

function Task({task, toggleComplete, deleteTask}){

    return(
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
            <button onClick={toggleComplete} className="px-3 py-1 bg-green-600 hover:bg-green-800 text-white font-bold rounded">{!task.completed ? "Complete" : "Undo"}</button>
            <h2 className={`text-lg px-3 ${task.completed ? "line-through text-gray-400" : ""}`}>{task.title}</h2>
            <button onClick={deleteTask} className="px-3 py-1 bg-red-600 hover:bg-red-800 text-white font-bold rounded">Delete</button>
        </div>
    )
}

export default Task