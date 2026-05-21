import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  return(
    <div className={`${theme} min-h-screen dark:bg-background dark:text-primary`}>
      {/* Navbar */}
      <div className="flex items-center justify-between p-2">
        <div className="font-bold">Logo</div>
        {/* Desktop Nav */} 
        <div className="hidden sm:flex gap-4">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        <button className="text-xl cursor-pointer " onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
        </div>
        
        <button className="text-xl cursor-pointer sm:hidden" onClick={()=> setOpen(!open)}
        >=</button>
      </div>

      {/* Mobile Nav */}
        {open && (
          <div className="flex flex-col items-center gap-2 text-blue-900 p-4 sm:hidden dark:text-primary">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <button className="text-xl cursor-pointer sm:hidden" onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </div>
        )}

      <div className="grid sm:grid-cols-2 text-white p-6 gap-6 text-center font-semibold text-5xl sm:text-sm">
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700 hover:scale-102 transition-all dura">Feature One</div>
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700 hover:scale-102">Feature Two</div>
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700">Feature Three</div>
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700">Feature Four</div>
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700">Feature Five</div>
        <div className="bg-blue-500 p-4 rounded hover:bg-blue-700">Feature Six</div>
      </div>
    </div>
  );
}
// if want to apply padding 1 -> 0.25 rem if padding 5 -> 1.25 rem
export default App;
