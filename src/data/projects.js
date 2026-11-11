import pizzaShopCover from "../assets/images/pizzaShope/pizzashope1.jpg";
import pizzaShop1 from "../assets/images/pizzaShope/pizzashope1.jpg";
import pizzaShop2 from "../assets/images/pizzaShope/pizzashope2.jpg";
import pizzaShop3 from "../assets/images/pizzaShope/pizzashope3.jpg";

import weather1 from "../assets/images/Weather/weather2.jpg";
import weather2 from "../assets/images/Weather/weather3.jpg";
import weather3 from "../assets/images/Weather/weather4.jpg";
import weatherCover from "../assets/images/Weather/weather6.png";


import lab1 from "../assets/images/Lab/lab1.png";
import lab2 from "../assets/images/Lab/lab2.png";
import lab3 from "../assets/images/Lab/lab3.png";
import video from "../assets/images/Lab/video.jpeg";

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

    live: "",
  },

  {
    id: 2,
    title: "Weather App",

    description:
      "Modern weather application with real-time forecasts, city search and responsive design.",

    image: weatherCover,

    gallery: [
      weather1,
      weather2,
      weather3,
    ],

    video: "/videos/weather-app.mp4",

    technologies: [
      "React",
      "OpenWeather API",
      "JavaScript",
      "CSS3",
      "Vite",
    ],

    features: [
      "Real-time Weather Data",
      "City Search",
      "5-Day Forecast",
      "Temperature Details",
      "Responsive Design",
    ],

    github: "https://github.com/Amirali-Rezaei92/WeatherApp",

    live: "",
  },

  {
    id: 3,
    title: "Prometheus Labs",

    description:
      "Modern web application developed with React and Express, featuring a clean user interface and responsive design.",

    image: lab1,

    gallery: [
      lab1,
      lab2,
      lab3,
    ],

    video: video,

    technologies: [
      "React",
      "JavaScript",
      "Express",
      "Node.js",
      "CSS3",
    ],

    features: [
      "Modern UI",
      "Responsive Design",
      "REST API Integration",
      "Scalable Architecture",
      "Cross-Platform Support",
    ],

    github: "https://github.com/Amirali-Rezaei92/prometheus-labs-react",

    live: "",
  },
];