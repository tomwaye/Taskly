import { useEffect, useState } from "react";
import Task from "./Task";
import { collection, updateDoc, deleteDoc, onSnapshot, doc, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

function TaskList({ user, title, queryField, queryValue, taskListId, searchTerm }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        if (!user?.uid) return

        const q = query(
            collection(db, "tasks"),
            where("userID", "==", user?.uid),
            where(queryField, "==", queryValue)
        )
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasksArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setTasks(tasksArray)
        })
        return () => unsubscribe()

    }, [user, queryField, queryValue])



    const toggleComplete = async (id, completed) => {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, { completed: !completed });
    };

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };

    const deleteTaskList = async () => {
        if (taskListId) {
            await deleteDoc(doc(db, "taskLists", taskListId));
        }
    }

    const editTask = async (id, newTitle, newTag) => {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, { title: newTitle, tag: newTag });
    };

    return (
        <div className=" w-auto p-6 bg-slate-300 shadow-xl rounded-xl mt-6 dark:bg-gray-800 transition-colors duration-200">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-center dark:text-white">{title}</h1>
                {taskListId && (
                    <button
                        onClick={deleteTaskList}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition duration-200"
                    >
                        Delete List
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase())).map((task, index) => (
                    <Task key={index}
                        task={task}
                        toggleComplete={() => toggleComplete(task.id, task.completed)}
                        deleteTask={() => deleteTask(task.id)}
                        editTask={editTask}
                        priority={task.priority}
                    />
                ))}
            </div>
        </div>

    )
}

export default TaskList
