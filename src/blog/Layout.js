import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../blog/Header";
import Footer from "../blog/Footer";
import { routes } from "./Constants";

const Layout = (props) => {
  const sections = routes;

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
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
