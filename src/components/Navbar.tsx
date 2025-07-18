import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">Green Star</Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/produtos" className="hover:underline">Produtos</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/sobre" className="hover:underline">Sobre</Link>
        </nav>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Login</button>
      </div>
    </header>
  );
}
