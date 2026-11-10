import pizzaShopCover from "../assets/images/pizzaShope/pizzashope1.jpg";
import pizzaShop1 from "../assets/images/pizzaShope/pizzashope1.jpg";
import pizzaShop2 from "../assets/images/pizzaShope/pizzashope2.jpg";
import pizzaShop3 from "../assets/images/pizzaShope/pizzashope3.jpg";

export const projects = [
  {
    id: 1,
    title: "Pizza Shop",

    description:
      "Modern pizza ordering platform with authentication, online orders and admin dashboard.",

    image: pizzaShopCover,

    gallery: [
      pizzaShop1,
      pizzaShop2,
      pizzaShop3,
    ],

    video: "/videos/pizza-shop.mp4",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    features: [
      "User Authentication",
      "Online Ordering",
      "Admin Dashboard",
      "Order Tracking",
      "Responsive Design",
    ],

    github: "https://github.com/Amirali-Rezaei92/PizzaShopeApp",

    live: "https://pizza-shop-demo.com",
  },
];