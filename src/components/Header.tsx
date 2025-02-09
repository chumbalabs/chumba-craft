
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Chumba Blog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
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
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const linkClass = mobile
    ? "block py-2 hover:text-primary transition-colors"
    : "hover:text-primary transition-colors";

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
