import { Link , NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
   <header className="flex justify-between items-center px-4 py-3 border-b shadow-sm">
      <Link to="/" className="text-xl font-bold">
        WeatherApp
      </Link>
      <nav className="flex items-center gap-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/favorites" className="hover:underline">
          Favorites
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}
