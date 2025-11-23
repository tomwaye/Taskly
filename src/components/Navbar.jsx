import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

import { useTheme } from "../contexts/ThemeContext";

function Navbar({ setUser, searchTerm, setSearchTerm }) {
  const { darkMode, toggleTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (e) {
      console.log("Error signing out: ", e);
    }
  };

  return (
    <nav className="w-full bg-blue-500 dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <h1 className="text-white font-extrabold text-2xl md:text-3xl">
          TASKLY
        </h1>

        <div className="flex-1 max-w-md mx-4">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-blue-300 outline-none text-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="text-white text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
