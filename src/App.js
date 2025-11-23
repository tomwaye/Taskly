import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './components/auth';
import { auth } from './services/firebase';

import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  return (
    <ThemeProvider>
      {user ? <Home user={user} setUser={setUser} /> : <Auth setUser={setUser} />}
    </ThemeProvider>
  );
}

export default App;