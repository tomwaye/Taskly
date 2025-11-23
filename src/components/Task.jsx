

import { useState } from "react";
function Task({ task, toggleComplete, deleteTask, editTask, priority }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const [newTag, setNewTag] = useState(task.tag);

    const handleSave = () => {
        editTask(task.id, newTitle, newTag);
        setIsEditing(false);
    };

    return (
        <div className={`flex flex-wrap items-start justify-between ${priority ? "bg-red-300 dark:bg-red-900" : "bg-gray-100 dark:bg-gray-700"} p-3 rounded-lg mb-3 gap-2 transition-colors duration-200`}>
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                <button onClick={toggleComplete} className="px-3 py-1 bg-green-600 hover:bg-green-800 text-white font-bold rounded text-sm h-fit">{!task.completed ? "Complete" : "Undo"}</button>

                {isEditing ? (
                    <div className="flex flex-col gap-1 flex-1">
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-1 rounded border border-gray-400 text-sm w-full"
                        />
                        <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Tag"
                            className="p-1 rounded border border-gray-400 text-xs w-24"
                        />
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <h2 className={`text-lg ${priority ? "font-bold" : ""} px-3 ${task.completed && !priority ? "line-through text-gray-400" : ""} ${task.completed && priority ? "line-through text-red-800 dark:text-red-300" : ""} dark:text-white`}>{task.title}</h2>
                        {task.tag && <span className="text-xs text-gray-500 px-3 dark:text-gray-300">{task.tag}</span>}
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 self-start mt-1">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="px-3 py-1 bg-blue-600 hover:bg-blue-800 text-white font-bold rounded text-sm">Save</button>
                        <button onClick={() => setIsEditing(false)} className="px-3 py-1 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded text-sm">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded text-sm">Edit</button>
                        <button onClick={deleteTask} className="px-3 py-1 bg-red-600 hover:bg-red-800 text-white font-bold rounded text-sm">Delete</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Task