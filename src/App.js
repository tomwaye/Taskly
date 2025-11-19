import Home from './pages/Home';
import { TaskContext } from './contexts/TaskContext';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
        <Home/>
    </TaskContext.Provider>

  );
}

export default App;