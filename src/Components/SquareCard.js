import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";

function SquarePost(props) {
  const { post } = props;

  return (
    // <Grid item xs={6} md={4}>
    <Grid item md={4}>

      <Link
        display="block"
        variant="body1"
        href={post.url}
        key={post.title}
      >
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image={post.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Link>
    </Grid>
  );
}

SquarePost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SquarePost;
