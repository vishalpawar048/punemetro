import * as React from "react";
import Grid from "@mui/material/Grid";

import Main from "../../Components/Main";
import Sidebar from "../../Components/Sidebar";
import TimeTable from "../../Components/TimeTable";
import SquarePost from "../../Components/SquareCard";
import HomePageBlog from "../../blogs/HomePageBlog";
import { sidebar } from "../../Components/Constants";
import punemetromap from "../../images/punemetromap.jpeg";
import MetroTicket from "../../Components/metroTicket";

const featuredPosts = [
  {
    title: "Shopping in Pune",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const imgStyle = {
  width: "100%",
  height: "auto",
  marginBottom: "50px",
};

export default function HomePage() {
  return (
    <main>
      <Grid item xs={12}>
        <TimeTable></TimeTable>
      </Grid>

      <Grid container>
        <img style={imgStyle} src={punemetromap} alt="Map" />
      </Grid>

      <Grid item xs={12}>
        <MetroTicket></MetroTicket>
      </Grid>
      

      <Grid container spacing={2} item xs={12}>
        {featuredPosts.map((post) => (
          <SquarePost key={post.title} post={post} />
        ))}

        <Grid container spacing={5} item xs={12}>
          <Main title="Explore Pune">
            <HomePageBlog />
          </Main>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Grid>
    </main>
  );
}
