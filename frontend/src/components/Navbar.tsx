import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b bg-slate-900 text-white">
      <div className="container mx-auto flex gap-6 px-4 py-3">
        <Link to="/" className="font-semibold hover:underline">
          Trading Dashboard
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>
        <Link to="/watchlist" className="hover:underline">
          Watchlist
        </Link>
      </div>
    </nav>
  );
}
