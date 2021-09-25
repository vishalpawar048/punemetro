import { Grid } from "@mui/material";
import * as React from "react";
import Layout from "../blog/Layout";
import SquareCard from "../blog/SquareCard";

export default function ShoppingPlaces() {
  const ShoppingPlaceArr = [
    {
      title: "1. FC Road",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content1.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "2. Phinix Market City",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content2.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "3. Camp",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "Seasons Mall",
      date: "Nov 12",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "Amnora Mall",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      title: "Pavellion Mall",
      date: "Nov 11",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      image: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
  ];

  return (
    <Layout>
      <h2>Shopping Places</h2>
      <Grid container spacing={2} >
        {ShoppingPlaceArr.map((post) => (
          <SquareCard key={post.title} post={post} />
        ))}
      </Grid>
    </Layout>
  );
}
