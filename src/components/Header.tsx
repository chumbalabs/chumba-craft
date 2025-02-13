
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Chumba Blog
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center space-x-8">
              <NavLinks />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 border-t border-gray-100 bg-white">
            <NavLinks mobile onClick={toggleMenu} />
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-2">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const linkClass = mobile
    ? "block py-2 text-gray-600 hover:text-gray-900 transition-colors"
    : "text-gray-600 hover:text-gray-900 transition-colors";

  return (
    <div className={mobile ? "flex flex-col space-y-4" : "flex space-x-8"}>
      <Link to="/" className={linkClass} onClick={onClick}>
        Home
      </Link>
      <Link to="/concept" className={linkClass} onClick={onClick}>
        Concept
      </Link>
      <Link to="/story" className={linkClass} onClick={onClick}>
        Our story
      </Link>
      <Link to="/blog" className={linkClass} onClick={onClick}>
        Blog
      </Link>
      <Link to="/contact" className={linkClass} onClick={onClick}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
