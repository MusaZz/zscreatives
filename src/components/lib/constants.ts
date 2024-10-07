interface NavLink {
  link: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { link: "home", path: "" },
  { link: "about", path: "about" },
  { link: "service", path: "services" },
  { link: "blog", path: "blogs" },
  { link: "contact", path: "contact" },
];
