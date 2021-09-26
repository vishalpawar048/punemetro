import * as React from "react";
import Grid from "@mui/material/Grid";

import Main from "./Main";
import Sidebar from "./Sidebar";
import TimeTable from "./TimeTable";
import SquarePost from "./SquareCard";
import HomePageBlog from "./blogs/HomePageBlog";
import { sidebar } from "./Constants";
const featuredPosts = [
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

// const posts = [post1, post2, post3];

export default function Home() {
  return (
    <main>
      <Grid item xs={12}>
        <TimeTable></TimeTable>
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
