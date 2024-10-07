import { navLinks } from "../../lib/constants";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-16">
        {navLinks.map((l, index) => (
          <NavLink key={index} link={l.link} path={l.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
