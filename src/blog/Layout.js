import * as React from "react";
import Blog from "../blog/Blog";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../blog/Header";
import MainFeaturedPost from "../blog/MainFeaturedPost";
import FeaturedPost from "../blog/FeaturedPost";
import Main from "../blog/Main";
import Sidebar from "../blog/Sidebar";
import Footer from "../blog/Footer";

const Layout = (props) => {
  const sections = [
    { title: "Home", url: "/" },
    { title: "Shopping Places", url: "ShoppingPlaces" },
    { title: "Famous Restaurants", url: "#" },
    { title: "Famous Streets", url: "#" },
    { title: "Pubs", url: "#" },
    { title: "Historical Places", url: "#" },
    { title: "Gardans", url: "#" },
    { title: "Must Visit", url: "#" },
    { title: "Museum", url: "#" },
    { title: "Travel", url: "#" },
    { title: "Pune Local", url: "#" },
  ];

  const mainFeaturedPost = {
    title: "Explore Pune",
    description:
      "Pune is a city located in the state of Maharashtra. Previously known as Poona, it is a city situated at the junction of Mutha and Mula rivers. It is also given the name – “Queen of the Deccan”. It is considered as a capital of culture for the people of Maratha.",
    image:
      "https://image3.mouthshut.com/images/Restaurant/Photo/-79924_6927.jpg",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Pune Metro" sections={sections} />
        {props.children}
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default Layout;
