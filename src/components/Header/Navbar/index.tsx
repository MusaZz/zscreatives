import { navLinks } from "../../lib/constants";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center gap-16">
        {navLinks.map((l, index) => (
          <NavLink
            key={index}
            link={l.link}
            path={l.path}
            isActive={location.pathname === `/${l.path}`}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
