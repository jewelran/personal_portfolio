import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./ProjectDetails.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "gray",
  },
  media: {
    marginTop: 10,
    height: 140,
  },
});
const ProjectDetails = ({ project }) => {
  const classes = useStyles();
  return (
    <Card
      style={{ margin: "15px" }}
      className={`${classes.root} cardContainer`}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={project.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button className="submitBtn pt-3 mt-0 bg-dark fs-5">PROJECT</button>
      </CardActions>
    </Card>
  );
};

export default ProjectDetails;
