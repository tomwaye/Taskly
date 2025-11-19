import {useContext, useEffect} from "react"
import { TaskContext } from "../contexts/TaskContext"
import Task from "../components/Task"
import AddTask from "../components/AddTask"

function Home(){

    const {tasks} = useContext(TaskContext)

    return(
    <div className="flex flex-col items-center min-h-screen py-3 bg-gray-100">
        <AddTask />
        <div className="w-96 p-6 bg-slate-300 shadow-xl rounded-xl mt-6">
            <h1 className="text-2xl mb-4 font-semibold text-center">Tasks</h1>
            <div className="space-y-3">
            {tasks.map((task, index) => (
                <Task key={index} task={task} index={index}/>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Home