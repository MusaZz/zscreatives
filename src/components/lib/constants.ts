interface NavLink {
  link: string;
  path: string;
}

interface Testimonial {
  id: number;
  comment: string;
  name: string;
  imageUrl: string;
}

interface Service {
  path: string;
  title: string;
  button: string;
  imageUrl: string;
  description: string;
  backgroundImageUrl: string;
  backgroundColorUrl: string;
}

interface Blog {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

interface FooterMenu {
  link: string;
  path: string;
}

interface SpecializeMenu {
  service: string;
  imageUrl: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { link: "home", path: "" },
  { link: "about", path: "about" },
  { link: "services", path: "services" },
  { link: "blogs", path: "blogs" },
  { link: "contact", path: "contact" },
];

export const services: Service[] = [
  {
    title: "Branding & Identity",
    button: "Branding projects",
    imageUrl: "/services/service-1.png",
    path: "branding-and-identity",
    backgroundImageUrl: "/service/branding.png",
    backgroundColorUrl: "/service/branding-bg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.",
  },
  {
    title: "Website development",
    button: "Website projects",
    imageUrl: "/services/service-2.png",
    path: "website-development",
    backgroundImageUrl: "/service/web.png",
    backgroundColorUrl: "/service/web-bg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.",
  },
  {
    title: "SEO Optimisation",
    button: "SEO projects",
    imageUrl: "/services/service-3.png",
    path: "seo-optimisation",
    backgroundImageUrl: "/service/seo.png",
    backgroundColorUrl: "/service/seo-bg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.",
  },
  {
    title: "UX & UI Design",
    button: "UX & UI projects",
    imageUrl: "/public/services/service-4.png",
    path: "ux-and-ui-design",
    backgroundImageUrl: "/service/design.png",
    backgroundColorUrl: "/service/design-bg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.",
  },
  {
    title: "Wordpress support",
    button: "Wordpress projects",
    imageUrl: "/services/service-5.png",
    path: "wordpress-support",
    backgroundImageUrl: "/service/wordpress.png",
    backgroundColorUrl: "/service/wordpress-bg.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r.",
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser WordPress dauerhaft und nachhaltig verbesser",
    imageUrl: "/blogs/blog-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 2,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPress",
    imageUrl: "/blogs/blog-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 3,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPressLadezeit von",
    imageUrl: "/blogs/blog-3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 4,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPressLadezeit von",
    imageUrl: "/blogs/blog-4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 5,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPress",
    imageUrl: "/blogs/blog-5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 6,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser WordPress dauerhaft und nachhaltig verbesser",
    imageUrl: "/blogs/blog-6.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 7,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser WordPress dauerhaft und nachhaltig verbesser",
    imageUrl: "/blogs/blog-7.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 8,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPress",
    imageUrl: "/blogs/blog-8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 9,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser WordPress dauerhaft und nachhaltig verbesser",
    imageUrl: "/blogs/blog-9.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 10,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPressLadezeit von",
    imageUrl: "/blogs/blog-10.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 11,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPress",
    imageUrl: "/blogs/blog-11.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
  {
    id: 12,
    title:
      "Ladezeit von WordPress dauerhaft und nachhaltig verbesser Ladezeit von WordPressLadezeit von",
    imageUrl: "/blogs/blog-12.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in r.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
  },
];

export const servicesMenu: FooterMenu[] = [
  {
    link: "Branding & Identity",
    path: "branding-and-identity",
  },
  {
    link: "Web Development",
    path: "web-development",
  },
  {
    link: "SEO Optimisation",
    path: "seo-optimisation",
  },
  {
    link: "UX & UI Designer",
    path: "ux-and-ui-designer",
  },
  {
    link: "Wordpress Support",
    path: "wordpress-support",
  },
];

export const generalMenu: FooterMenu[] = [
  {
    link: "Our locations",
    path: "our-locations",
  },
  {
    link: "Career",
    path: "career",
  },
  {
    link: "Our team",
    path: "our-team",
  },
  {
    link: "Frequently asked questions",
    path: "faq",
  },
  {
    link: "Privacy Policy",
    path: "privacy-policy",
  },
];

export const specializeMenu: SpecializeMenu[] = [
  {
    service: "Branding & Identity",
    imageUrl: "/service/branding.png",
    path: "branding-and-identity",
  },
  {
    service: "Website Development",
    imageUrl: "/service/web.png",
    path: "website-development",
  },
  {
    service: "SEO Optimisation",
    imageUrl: "/service/seo.png",
    path: "seo-optimisation",
  },
  {
    service: "UX & UI Designer",
    imageUrl: "/service/design.png",
    path: "ux-and-ui-designer",
  },
  {
    service: "Wordpress Support",
    imageUrl: "/service/wordpress.png",
    path: "wordpress-support",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim vequis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen",
    name: "Leslie Alexander",
    imageUrl: "/home/avatar-1.png",
  },
  {
    id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    name: "Dianne Russell",
    imageUrl: "/home/avatar-2.png",
  },
];
