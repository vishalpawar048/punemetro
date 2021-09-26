import * as React from "react";
import Blog from "../blog/Home";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../blog/MainFeaturedPost";

import Layout from "../blog/Layout";
import shaniwarwada from "../../public/images/Shanivarwada.jpeg";

const IndexPage = () => {
 
  const mainFeaturedPost = {
    title: "Explore Pune",
    description:
      "Pune is a city located in the state of Maharashtra. Previously known as Poona, it is a city situated at the junction of Mutha and Mula rivers. It is also given the name – “Queen of the Deccan”. It is considered as a capital of culture for the people of Maratha.",
    image: shaniwarwada,
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  const theme = createTheme();

  return (
    <Layout>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Blog></Blog>
    </Layout>
  );
};

export default IndexPage;
