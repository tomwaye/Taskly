import AddTask from "../components/AddTask"
import Navbar from "../components/Navbar"
import TaskList from "../components/TaskList"

function Home(){

    return(
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <Navbar />
        <AddTask />
        <TaskList />
    </div>
    )
}

export default Home