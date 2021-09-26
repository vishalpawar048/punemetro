import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Main from "../../blog/Main";
import Sidebar from "../../blog/Sidebar";
import Layout from "../../blog/Layout";
import RestaurantsBlog from "../../blog/blogs/RestaurantsBlog";
import { sidebar } from "../../blog/Constants"


export default function Restaurants() {
  const blogStyle = {
    marginTop:"50px"
  }
  return (
    <Layout>
      <Grid style={blogStyle}container spacing={5} item xs={12}>
        <Main title="Explore Pune">
          <RestaurantsBlog />
        </Main>
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </Layout>
  );
}
