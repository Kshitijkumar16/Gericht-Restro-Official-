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
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@stryde.com", link: "mailto:customer@stryde.com" },
      { name: "0712-123-234", link: "tel:0712212343" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
