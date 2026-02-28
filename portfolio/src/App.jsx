import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ReviewForm from './pages/ReviewForm';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="p-6 bg-white shadow-md flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ZHIMOVE</Link>
          <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/review" className="hover:text-blue-500">Leave a Review</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/review" element={<ReviewForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>

      <Footer/>
    </Router>
  );
}

export default App;