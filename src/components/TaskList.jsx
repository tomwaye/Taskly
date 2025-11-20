import { useEffect, useState } from "react";
import Task from "./Task";
import { collection, updateDoc, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from "../services/Firebase";

function TaskList(){
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        const q = collection(db, "tasks")
        const unsubscribe = onSnapshot(q, (snapshot) =>{
            const tasksArray = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
            setTasks(tasksArray)
        })
        return()=> unsubscribe()
    }, [])

    const toggleComplete = async (id, completed) => {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, { completed: !completed });
    };

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };

    return(        
    <div className=" w-auto p-6 bg-slate-300 shadow-xl rounded-xl mt-6">
        <h1 className="text-2xl mb-4 font-semibold text-center">Tasks</h1>
        <div className="space-y-3">
            {tasks.map((task, index) => (
                <Task key={index}
                 task={task} 
                 toggleComplete={() => toggleComplete(task.id, task.completed)}
                 deleteTask={()=>deleteTask(task.id)}
                 />
            ))}
        </div>
    </div>
        
    )
}

export default TaskList