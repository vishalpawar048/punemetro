import * as React from "react";
import HomePage from "./pune/HomePage";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../Components/MainFeaturedPost";

import Layout from "../Components/Layout";
import shaniwarwada from "../images/Shanivarwada.jpeg";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const mainFeaturedPost = {
    title: "Explore Pune",
    description:
      "Pune is a city located in the state of Maharashtra. Previously known as Poona, it is a city situated at the junction of Mutha and Mula rivers. It is also given the name – “Queen of the Deccan”. It is considered as a capital of culture for the people of Maratha.",
    image: shaniwarwada,
    imageText: "main image description",
    // linkText: "Continue reading…",
  };

  const theme = createTheme();

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Pune Maha Metro Time table. Metro from Vanaz depot to Ramwadi and from PCMC to Swarget."
        />
        <title>Pune Metro Time Table</title>
      </Helmet>
      <MainFeaturedPost post={mainFeaturedPost} />
      <HomePage></HomePage>
    </Layout>
  );
};

export default IndexPage;
