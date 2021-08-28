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
  avatarImg: {
    width: "65px",
    height: "65px",
  },
}))
export function Reviews({ starRating }) {
  const classes = useStyle()
  const rating1 = (starRating + 0.1).toFixed(1)
  const rating5 = (starRating + 0.2).toFixed(1)
  const rating2 = (starRating + 0.5).toFixed(1)
  const rating3 = (starRating - 0.4).toFixed(1)
  const rating4 = (starRating + 0.3).toFixed(1)
  const rating6 = (starRating - 0.2).toFixed(1)
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
            <RatingBar rating={rating1} /> <p>{rating1}</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Accuracy</p>
          <Box className={classes.bar}>
            <RatingBar rating={rating2} />
            <p>{rating2}</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Communication</p>
          <Box className={classes.bar}>
            <RatingBar rating={rating3} />
            <p>{rating3}</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Location</p>
          <Box className={classes.bar}>
            <RatingBar rating={rating4} />
            <p>{rating4}</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Check-in</p>
          <Box className={classes.bar}>
            <RatingBar rating={rating5} />
            <p>{rating5}</p>
          </Box>
        </Box>
        <Box className={classes.rating}>
          <p style={{ fontSize: "20px" }}>Value</p>
          <Box className={classes.bar}>
            <RatingBar rating={rating6} />
            <p>{rating6}</p>
          </Box>
        </Box>
      </Box>
      <Box className={classes.reviewsCont}>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/pictures/user/cd0d5aa3-0526-4b8b-9038-4afc316b5061.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Anna</h3>
              <p className={classes.margin5}>July 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              The snow mount villa is located in a breathtaking back drop, with
              the best possible facility and view from the window. I think you
              will do justice to every penny staying here.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/pictures/user/99c63c74-9f1e-40fb-a19e-6f8472d4a2f6.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Arundhati</h3>
              <p className={classes.margin5}>August 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Akshay’s place was amazing with an outstanding view of the
              mountains. I had a really good time there. He was quick to respond
              and was there to help out on anything and everything.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/pictures/user/91d8c95d-699d-45f0-be9a-763bcd7b96d9.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Naveen</h3>
              <p className={classes.margin5}>March 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              It was wonderful to stay at the place especially , view of
              mountains is spectacular from upper floor bedrooms
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/users/10376391/profile_pic/1385971564/original.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Joshua</h3>
              <p className={classes.margin5}>July 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Everything about this place is so pleasing the location, the
              space, the view and the host is just amazing. Thank you Bhaveek
              for this wonderful experience.
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/pictures/user/263cb2c3-f0b2-4c2a-992e-9a5abf1f70c8.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Akshay</h3>
              <p className={classes.margin5}>July 2021</p>
            </Box>
          </Box>
          <Box>
            <p>
              Very nice place, great host, great place to stay. Amazing food
              (made by aunty).
            </p>
          </Box>
        </Box>
        <Box className={classes.reviewsCard}>
          <Box className={classes.topHeading}>
            <Avatar className={classes.avatarStyle}>
              <img
                src="https://a0.muscache.com/im/pictures/user/439f6551-4df5-4716-aad9-63dfee0a78cf.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <Box>
              <h3 className={classes.margin5}>Akanksha</h3>
              <p className={classes.margin5}>March 2021</p>
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
