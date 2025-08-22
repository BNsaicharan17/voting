import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
    {/* Logo on the left */}
    <div className="flex items-center space-x-2">
      <img src="/logo.jpg" alt="CrowdVote Logo" className="h-10 w-10" />
      <span className="text-xl font-bold">CrowdVote</span>
    </div>

    {/* Nav links on the right */}
    <nav className="flex space-x-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/vote" className="hover:underline">Vote</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
      <Link to="/signin" className="hover:underline">Sign In</Link>
      <Link to="/signup" className="hover:underline">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
