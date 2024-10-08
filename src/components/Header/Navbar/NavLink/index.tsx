import { Link } from "react-router-dom";

interface NavLinkProps {
  link: string;
  path: string;
  isActive: boolean; // Passed prop to check if the link is active
}

const NavLink = ({ link, path, isActive }: NavLinkProps) => {
  console.log(path);
  console.log(isActive);
  return (
    <li className="relative">
      <Link to={path} className="font-medium text-base capitalize">
        {link}
      </Link>
      {isActive && (
        <span
          className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-[#363636] transition-transform duration-300 transform `}
        />
      )}
    </li>
  );
};

export default NavLink;
