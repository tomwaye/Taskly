import { useEffect, useState } from "react";
import Task from "./Task";
import { collection, updateDoc, deleteDoc, onSnapshot, doc, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

function TaskList({ user, title, queryField, queryValue }) {
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

    }, [user])



    const toggleComplete = async (id, completed) => {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, { completed: !completed });
    };

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };

    return (
        <div className=" w-auto p-6 bg-slate-300 shadow-xl rounded-xl mt-6">
            <div>
                <h1 className="text-2xl mb-4 font-semibold text-center">{title}</h1>
            </div>

            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <Task key={index}
                        task={task}
                        toggleComplete={() => toggleComplete(task.id, task.completed)}
                        deleteTask={() => deleteTask(task.id)}
                        priority={task.priority}
                    />
                ))}
            </div>
        </div>

    )
}

export default TaskList
