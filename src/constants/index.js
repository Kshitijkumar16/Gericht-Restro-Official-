import {
  award01,
  award02,
  award03,
  award05,
  facebook,
  instagram,
  twitter,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
  gallery11,
  gallery12,
} from "../assets";

export const AsianCuisine = [
  {
    title: "Asian Cuisine",
    dishes: [
      {
        key: "2",
        dishName: "Tonkotsu Ramen",
        price: "400",
        description:
          "Unique ramen consisting of rich pork broth, fresh noodles, soft-yolk eggs that melts in the mouth",
      },
      {
        key: "3",
        dishName: "Shrimp Shumai",
        price: "600",
        description:
          "Tasty staple dim sum made with ginger and garlic shrimp, water chestnuts, served as dumplings",
      },
      {
        key: "4",
        dishName: "Miso Ramen",
        price: "350",
        description:
          "miso along with chicken stock, vegetables, and ground pork in a thick and rich soup",
      },
      {
        key: "5",
        dishName: "House Special Soup",
        price: "500",
        description:
          "Includes crab meat, shrimp, chicken, with sliced roast pork, vegetables, and wontons",
      },
      {
        key: "1",
        dishName: "Chicken Noodle Soup",
        price: "550",
        description:
          "Egg noodles and bits of chicken cooked in a rich stock, this classic never goes out of style",
      },
    ],
  },
];

export const IndianCuisine = [
  {
    title: "Indian Cuisine",

    dishes: [
      {
        key: "2",
        dishName: "Chicken Biryani",
        price: "450",
        description:
          "Juicy marinated chicken & basmati rice slow cooked together in layers served alongside raita",
      },
      {
        key: "3",
        dishName: "Paneer Butter Masala",
        price: "300",
        description:
          "Rich & creamy wiht House special spice mix, filled with bite sized tomatos, cashews with butter",
      },
      {
        key: "4",
        dishName: "Veg Kolhapuri",
        price: "250",
        description:
          "A delicious spicy mixed vegetables dish with freshly sorted vegetables prepared on tawa",
      },
      {
        key: "5",
        dishName: "Dal Tadka",
        price: "250",
        description:
          "Smooth and creamy dal tempered with extra special tadka with a smoky charcoal flavour",
      },
      {
        key: "1",
        dishName: "House Special Thali",
        price: "400",
        description:
          "Mix Veg with garlic naan, alongside biryani and raita. Served with papad, pickels & chutney",
      },
    ],
  },
];

export const ContinentalCuisine = [
  {
    title: "Continental",

    dishes: [
      {
        key: "2",
        dishName: "Mexican Pizza (8 inch)",
        price: "400",
        description:
          "Tortillas sandwiched with beans and jalapenos topped with tomato sauce and cheddar cheese",
      },
      {
        key: "3",
        dishName: "Mushroom Bruschetta",
        price: "350",
        description:
          "Toasted baguette slice topped with cherry tomato, mozzarella, balasmic pearls and parsley foam",
      },
      {
        key: "4",
        dishName: "Chicken & Potato Casserole",
        price: "200",
        description:
          " Juicy chicken, tasty potatoes, and veggies mixed together to make a simple yet filling dinner",
      },
      {
        key: "5",
        dishName: "Roasted meat Salad",
        price: "400",
        description:
          "Crispy shreds of lamb paired with creamy feta, crunchy red onion and tangy roasted tomatoes",
      },
      {
        key: "1",
        dishName: "Paneer Steaks",
        price: "250",
        description:
          "Pan fried cottage cheese patties baked with cheese and tomatoes, with house special spice mix",
      },
    ],
  },
];

export const cuisineData = {
  asian: AsianCuisine,
  indian: IndianCuisine,
  continental: ContinentalCuisine,
};

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

export const infoCards = [
  {
    key: "1",
    h1: "Choose your ingridients ",
    p: "Control what goes into food. Your server will ask your preferences while taking the order.",
  },
  {
    key: "2",
    h1: "Custom toppings & dips ",
    p: "Let the server know your favorite add ons and we will take care of them.",
  },
  {
    key: "3",
    h1: "Choose cooking method",
    p: "You can let us know how you want your food to be cooked, we have a variety of cooking styles.",
  },
];

export const galleryImages = [
  { key: "i1", imgUrl: gallery01 },
  { key: "i2", imgUrl: gallery02 },
  { key: "i3", imgUrl: gallery03 },
  { key: "i4", imgUrl: gallery04 },
  { key: "i5", imgUrl: gallery05 },
  { key: "i6", imgUrl: gallery06 },
  { key: "i7", imgUrl: gallery07 },
  { key: "i8", imgUrl: gallery08 },
  { key: "i9", imgUrl: gallery09 },
  { key: "i10", imgUrl: gallery10 },
  { key: "i11", imgUrl: gallery11 },
  { key: "i12", imgUrl: gallery12 },
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
