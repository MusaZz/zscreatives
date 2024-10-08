import { Link } from "react-router-dom";

interface MobileNavbarProps {
  onClose: () => void; // Prop to close the mobile navbar
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ onClose }) => {
  return (
    <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="flex flex-col items-center py-4">
        <Link
          to="/"
          className="py-2 px-4 hover:bg-gray-200 transition duration-300"
          onClick={onClose} // Close navbar on click
        >
          Home
        </Link>
        <Link
          to="/about"
          className="py-2 px-4 hover:bg-gray-200 transition duration-300"
          onClick={onClose} // Close navbar on click
        >
          About
        </Link>
        <Link
          to="/services"
          className="py-2 px-4 hover:bg-gray-200 transition duration-300"
          onClick={onClose} // Close navbar on click
        >
          Services
        </Link>
        <Link
          to="/blogs"
          className="py-2 px-4 hover:bg-gray-200 transition duration-300"
          onClick={onClose} // Close navbar on click
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className="py-2 px-4 hover:bg-gray-200 transition duration-300"
          onClick={onClose} // Close navbar on click
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileNavbar;
