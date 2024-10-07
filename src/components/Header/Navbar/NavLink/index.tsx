import { Link } from "react-router-dom";

const NavLink = ({ link, path }: { link: string; path: string }) => {
  return (
    <li className="font-medium text-base capitalize">
      <Link to={path}>{link}</Link>
    </li>
  );
};

export default NavLink;
