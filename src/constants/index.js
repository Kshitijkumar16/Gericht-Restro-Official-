import {
  award01,
  award02,
  award03,
  award05,
  facebook,
  instagram,
  twitter,
} from "../assets";

export const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

export const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

export const awards = [
  {
    imgUrl: award02,
    title: " Michelin Stars",
    subtitle:
      "We're proud to have been awarded Michelin Stars, a prestigious recognition acknowledging our culinary innovation.",
  },
  {
    imgUrl: award01,
    title: "TripAdvisor Certificate of Excellence",
    subtitle:
      "We've consistently earned this certification, reflecting our unwavering dedication to customer satisfaction.",
  },
  {
    imgUrl: award05,
    title: "Best Fine Dining Restaurant",
    subtitle:
      "We've been honored with the title of 'Best Fine Dining Restaurant' by [Local Food Critics' Association].",
  },
  {
    imgUrl: award03,
    title: "Wine Spectator Award of Excellence",
    subtitle:
      "Our carefully curated wine selection has earned us the Wine Spectator Award of Excellence.",
  },
];

export const nav_linkss = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
];

export const footerLinks = [
  {
    title: "Know More",
    links: [
      { key: "1", name: "Menu", link: "/" },
      { key: "2", name: "Chefs", link: "/" },
      { key: "4", name: "Gallery", link: "/" },
      { key: "3", name: "Reservations", link: "/" },
      { key: "5", name: "Private Events", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        key: "1",
        name: "customer@gericht.com",
        link: "mailto:customer@gericht.com",
      },
      { key: "2", name: "0712-123-234", link: "tel:0712212343" },
    ],
  },
  {
    title: "Help",
    links: [
      { key: "1", name: "About", link: "/" },
      { key: "2", name: "Map", link: "/" },
      { key: "3", name: "FAQs", link: "/" },
      { key: "4", name: "Terms & Policy", link: "/" },
      { key: "5", name: "Payment policy", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
