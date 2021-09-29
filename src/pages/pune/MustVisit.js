import * as React from "react";
import Grid from "@mui/material/Grid";
import Main from "../../Components/Main";
import Sidebar from "../../Components/Sidebar";
import Layout from "../../Components/Layout";
import MustVisitBlog from "../../blogs/MustVisitBlog";
import { sidebar } from "../../Components/Constants";

export default function MustVisit() {
  const blogStyle = {
    marginTop: "50px",
  };
  return (
    <Layout>
      <Grid style={blogStyle} container spacing={5} item xs={12}>
        <Main title="Explore Pune">
          <MustVisitBlog />
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
