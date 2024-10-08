import { generalMenu, servicesMenu } from "../../lib/constants";
import FooterNavLink from "./FooterNavLink";

const FooterNavbar = ({ title }: { title: string }) => {
  return (
    <nav className="flex flex-col md:gap-4 gap-3">
      <h6 className="md:text-2xl sm:text-xl text-lg font-bold capitalize">{title}</h6>
      <ul className="flex flex-col md:gap-3 gap-2">
        {title === "services"
          ? servicesMenu.map((s) => (
              <FooterNavLink key={s.link} link={s.link} path={s.path} />
            ))
          : generalMenu.map((g) => (
              <FooterNavLink key={g.link} link={g.link} path={g.path} />
            ))}
      </ul>
    </nav>
  );
};

export default FooterNavbar;
