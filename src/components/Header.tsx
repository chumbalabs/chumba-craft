
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xl font-semibold">Chumba Blog</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLinks />
            </div>
            <Link
              to="/signup"
              className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 slide-in">
            <NavLinks mobile onClick={toggleMenu} />
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/signup"
                className="block w-full text-center px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const linkClass = mobile
    ? "block py-2 text-gray-600 hover:text-primary transition-colors"
    : "text-gray-600 hover:text-primary transition-colors";

  return (
    <div className={mobile ? "flex flex-col space-y-4" : "flex space-x-8"}>
      <Link to="/" className={linkClass} onClick={onClick}>
        Home
      </Link>
      <Link to="/crypto" className={linkClass} onClick={onClick}>
        Crypto
      </Link>
      <Link to="/forex" className={linkClass} onClick={onClick}>
        Forex
      </Link>
      <Link to="/stocks" className={linkClass} onClick={onClick}>
        Stocks
      </Link>
    </div>
  );
};

export default Header;
