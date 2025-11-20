import AddTask from "../components/AddTask"
import Navbar from "../components/Navbar"
import TaskList from "../components/TaskList"

function Home({user, setUser}){

    return(
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <Navbar setUser={setUser}/>
        <AddTask user={user} />
        <TaskList user={user} />
    </div>
    )
}

export default Home