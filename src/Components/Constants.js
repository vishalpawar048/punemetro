import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const routes = [
  { title: "Home", url: "/" },
  { title: "Shopping Places", url: "/pune/ShoppingPlaces" },
  { title: "Famous Restaurants", url: "/pune/Restaurants" },
  { title: "Must Visit", url: "/pune/MustVisit" },
  // { title: "Famous Streets", url: "/pune/Restaurants" },
  // { title: "Pubs", url: "/pune/Pubs" },
  { title: "Colleges", url: "/pune/Colleges" },
  { title: "Temples", url: "/pune/Temples" },
  { title: "Historical Places", url: "/pune/HistoricalPlaces" },
  { title: "Gardans", url: "/pune/Gardens" },
  { title: "Museums", url: "/pune/Museums" },
  { title: "Nearby Places", url: "/pune/NearbyPlaces" },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: routes,
  social: [
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/punemetroofficial/?hl=en",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/Punemetroofficial-104403448676365",
    },
  ],
};

export { routes, sidebar };
