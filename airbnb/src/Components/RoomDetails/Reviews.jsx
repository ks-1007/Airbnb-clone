import { Avatar, Box, Button, Divider, makeStyles } from "@material-ui/core"
import Star from "@material-ui/icons/Star"
import RatingBar from "./RatingBar"

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    padding: "40px 0",
  },
  margin5: {
    margin: "5px",
  },
  ratingBarsCont: {
    display: "grid",
    gridTemplateColumns: "45% 45%",
    justifyContent: "space-around",
    gap: "5%",
  },
  topHeading: {
    display: "flex",
    alignItems: "center",
  },
  bar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "250px",
  },
  starIcon: {
    color: "rgb(239,78,89)",
    marginRight: "10px",
  },
  rating: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewsCont: {
    display: "grid",
    gridTemplateColumns: "45% 45%",
    justifyContent: "space-around",
    gap: "5%",
    marginTop: "50px",
  },
  reviewCard: {},
  avatarStyle: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: "15px",
  },
  button: {
    marginTop: "60px",
    border: "1px solid black",
    height: "50px",
    borderRadius: "10px",
    width: "200px",
  },
}))
export function Reviews({ starRating }) {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <h2 className={classes.topHeading}>
        <Star className={classes.starIcon} />{" "}
        {String(Number(starRating).toFixed(1))} -35 reviews{" "}
      </h2>
      <Box className={classes.ratingBarsCont}>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Cleanliness</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.6} /> <p>4.6</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Accuracy</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.9} />
            <p>4.9</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Communication</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.8} />
            <p>4.8</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Location</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.7} />
            <p>4.7</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Check-in</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.2} />
            <p>4.2</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Value</p>
          <Box className={classes.bar}>
            <RatingBar rating={4.5} />
            <p>4.5</p>
          </Box>
        </Box>
      </Box>
      <Box className={classes.reviewsCont}>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>An</Avatar>
            <Box>
              <h3 className={classes.margin5}>Ankit</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Good Place to stay, spick and span !! Close to Baga and Calangute
              beach and very comfortable stay and not far from the commercial
              place.
            </p>
          </Box>
        </Box>
      </Box>
      <Button className={classes.button}>Show all 35 reviews</Button>
    </Box>
  )
}
