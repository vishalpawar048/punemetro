import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

const footers = [
  {
    title: "Social",
    description: ["Instagram", "Facebook"],
  },
  {
    title: "Travel",
    description: ["Pune Metro", "Railway"],
  },
  {
    title: "Places",
    description: [
      "Restaurants",
      "Shopping",
      "Museums",
      "Gardens",
      "Temple",
      "Pubs",
    ],
  },
  {
    title: "About Us",
    description: ["Contact Us"],
  },
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://punemetroofficial.com/">
        punemetroofficial.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const listStyle = {
  listStyle: "none",
  padding: 0,
};

function Footer(props) {
  const title = "Pune Metro";
  // const description = "Copyright © Your Website 2021."

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul style={listStyle}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}

      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>

        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
