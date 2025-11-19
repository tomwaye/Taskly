import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Task from "./Task";

function TaskList(){
    const {tasks} = useContext(TaskContext)

    return(        
    <div className=" w-auto p-6 bg-slate-300 shadow-xl rounded-xl mt-6">
        <h1 className="text-2xl mb-4 font-semibold text-center">Tasks</h1>
        <div className="space-y-3">
            {tasks.map((task, index) => (
                <Task key={index} task={task} index={index}/>
            ))}
        </div>
    </div>
        
    )
}

export default TaskList