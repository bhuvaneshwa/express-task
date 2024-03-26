import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <Link to="/hooks" className="hover:text-gray-300">Hooks</Link>
        </li>
      </ul>
    </nav>
      <Outlet />
    </div>
  );
}
