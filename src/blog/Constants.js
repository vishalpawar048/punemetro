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
  { title: "Historical Places", url: "/pune/Restaurants" },
  { title: "Gardans", url: "/pune/Gardens" },
  { title: "Museums", url: "/pune/Restaurants" },
  { title: "Nearby Places", url: "/pune/Restaurants" },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: routes,
  social: [
    { name: "Instagram", icon: InstagramIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export { routes, sidebar };
