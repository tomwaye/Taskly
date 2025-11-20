import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

function Navbar({ setUser }) {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (e) {
      console.log("Error signing out: ", e);
    }
  };

  return (
    <nav className="w-full bg-blue-500 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo / Title */}
        <h1 className="text-white font-extrabold text-2xl md:text-3xl">
          TASKLY
        </h1>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
