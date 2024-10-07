interface NavLink {
  link: string;
  path: string;
}

interface Services {
  path: string;
  title: string;
  button: string;
  imageUrl: string;
}

export const navLinks: NavLink[] = [
  { link: "home", path: "" },
  { link: "about", path: "about" },
  { link: "service", path: "services" },
  { link: "blog", path: "blogs" },
  { link: "contact", path: "contact" },
];

export const services: Services[] = [
  {
    title: "Branding & Identity",
    button: "Branding projects",
    imageUrl: "/public/services/service-1.png",
    path: "branding-and-identity",
  },
  {
    title: "Website development",
    button: "Website projects",
    imageUrl: "/public/services/service-2.png",
    path: "website-development",
  },
  {
    title: "SEO Optimisation",
    button: "SEO projects",
    imageUrl: "/public/services/service-3.png",
    path: "seo-optimisation",
  },
  {
    title: "UX & UI Design",
    button: "UX & UI projects",
    imageUrl: "/public/services/service-4.png",
    path: "ux-and-ui-design",
  },
  {
    title: "Wordpress support",
    button: "Wordpress projects",
    imageUrl: "/public/services/service-5.png",
    path: "wordpress-support",
  },
];
