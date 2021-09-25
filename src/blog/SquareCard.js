import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function SquarePost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
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
        <CardActions>
          {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
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
