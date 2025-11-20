import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/auth';
import { auth } from './services/firebase';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      {user ? <Home user={user} setUser={setUser} /> : <Auth setUser={setUser} />}
    </>
      
  );
}

export default App;