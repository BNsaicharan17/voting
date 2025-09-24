import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="CrowdVote Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">CrowdVote</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/vote" className="hover:underline">Vote</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/signin" className="hover:underline">Sign In</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="flex flex-col space-y-4 mt-4 md:hidden">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/vote" className="hover:underline" onClick={() => setIsOpen(false)}>Vote</Link>
          <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/signin" className="hover:underline" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link to="/signup" className="hover:underline" onClick={() => setIsOpen(false)}>Sign Up</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
