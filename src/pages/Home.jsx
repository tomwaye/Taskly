import AddTask from "../components/AddTask"
import AddTaskList from "../components/AddTaskList"
import Navbar from "../components/Navbar"
import TaskList from "../components/TaskList"

import { collection, updateDoc, deleteDoc, onSnapshot, doc, query, where } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react"

function Home({user, setUser}){
    const [taskLists, setTasksLists] = useState([])

    useEffect(() => {
        if (!user?.uid) return

        const q = query(
            collection(db, "taskLists"),
            where("userID", "==", user?.uid)
        )
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const taskListArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setTasksLists(taskListArray)
        })
        return () => unsubscribe()

    }, [user])

    return(
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <Navbar setUser={setUser}/>
        <AddTask user={user} />
        <AddTaskList user={user} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <TaskList user={user} title="All Tasks" queryField="priority" queryValue={false}/>
            {taskLists.map((taskList, index) => (
                <TaskList key={index} user={user} title={taskList.title} queryField={taskList.queryField} queryValue={taskList.queryValue}/>
            ))}
        </div>
    </div>
    )
}

export default Home