import { Link } from "react-router-dom";

const FooterNavLink = ({ path, link }: { path: string; link: string }) => {
  return (
    <li>
      <Link to={`service/${path}`}>
        <span className="">{link}</span>
      </Link>
    </li>
  );
};

export default FooterNavLink;
