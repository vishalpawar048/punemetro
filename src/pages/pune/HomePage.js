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
    title: "Swami Narayan Temple",
    date: "Nov 12",
    description:
      "Swaminarayan temple is one the most beautiful temples in Pune. Surrounded by the hills of Ambegaon and spread across 32 acres.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/Temples",
  },

  {
    title: "Shopping in Pune",
    date: "Nov 12",
    description:
      "12 Best Street shopping places to buy affordable clothes, Bags, sunglasses, caps, gifts, wallets for Girls and Boys.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/ShoppingPlaces",
  },
  {
    title: "Food In Pune",
    date: "Nov 11",
    description:
      "If you are in Pune and don't visit one of these Restaurants then your trip to pune is not comleted yet. Explore some of the best Restaurants in Pune",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/Restaurants",
  },
  {
    title: "Citi's Must Visits",
    date: "Nov 11",
    description:
      "We have narrowed down some of the best places in Pune. If you have time constrains these are the Must Visits for you.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/MustVisit",
  },
  {
    title: "Top Colleges in Pune",
    date: "Nov 12",
    description:
      "Pune City is well known as 'Oxford of the East' because of some of the best Engineering colleges, MBA colleges and Pune University.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/Colleges",
  },
  {
    title: "Nearby Places",
    date: "Nov 12",
    description:
      "There are numerous excellent places to visit near Pune within 300 kms for a weekend trip. Mahableshwar is on of the recommended Hill Station.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
    url: "/pune/NearbyPlaces",
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
        <h2>Pune Metro Map</h2>
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
