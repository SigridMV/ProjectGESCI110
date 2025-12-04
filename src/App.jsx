import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Research from "./pages/Research";
import Resources from "./pages/Resources";
import Gospel from "./pages/Gospel";
import Testimony from "./pages/Testimony";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/gospel" element={<Gospel />} />
            <Route path="/testimony" element={<Testimony />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
