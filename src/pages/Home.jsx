import AddTask from "../components/AddTask"
import TaskList from "../components/TaskList"

function Home(){

    return(
    <div className="flex flex-col items-center min-h-screen py-3 bg-gray-100">
        <AddTask />
        <TaskList />
    </div>
    )
}

export default Home