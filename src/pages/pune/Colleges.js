import * as React from "react";
import Grid from "@mui/material/Grid";
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
