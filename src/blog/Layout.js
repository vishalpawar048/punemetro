import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../blog/Header";
import Footer from "../blog/Footer";
import { routes } from "./Constants";

const Layout = (props) => {
  const sections = routes;


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
