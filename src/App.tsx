import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import FAQ from "./pages/FAQ";
import Sobre from "./pages/Sobre";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
