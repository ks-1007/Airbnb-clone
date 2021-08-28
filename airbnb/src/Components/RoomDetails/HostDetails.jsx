import { Avatar, Box, Button, makeStyles } from "@material-ui/core"
import Star from "@material-ui/icons/Star"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"
import { RiSecurePaymentFill } from "react-icons/ri"
const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    padding: "30px",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "45% 30%",
    gap: "5%",
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
  },
  marginLow: {
    margin: "5px",
  },
  avatarStyle: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: "15px",
  },
  avatarStyleSmall: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: "15px",
  },
  button: {
    marginTop: "20px",
    border: "1px solid black",
    height: "50px",
    borderRadius: "10px",
    width: "200px",
  },
  icon: {
    fontSize: "80px",
    marginRight: "15px",
  },
  iconPink: {
    color: "rgb(239,78,89)",
  },
  iconYellow: {
    color: "rgb(255,180,0)",
  },
  avatarImg: {
    width: "65px",
    height: "65px",
  },
}))
export function HostDetails() {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.displayFlex}>
          <Avatar className={classes.avatarStyle}>
            <img
              src="https://a0.muscache.com/im/pictures/user/d836199b-f22e-4627-86cd-fe94b1a1ad07.jpg?im_w=240"
              alt=""
              className={classes.avatarImg}
            />
          </Avatar>
          <Box>
            <h2 className={classes.marginLow}>Hosted by Neha</h2>
            <p className={classes.marginLow}>Joined in May 2019</p>
          </Box>
        </Box>
        <Box className={classes.displayFlex}>
          <Star className={classes.iconPink} /> &nbsp; <p>187 Reviews</p>
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <VerifiedUserIcon className={classes.iconPink} />
          &nbsp; <p>Identity verified</p>
        </Box>
        <Box>
          <p>
            Super excited to be part of this community and it's great feeling to
            help people on there stay and to make them comfortable. I 'm
            freelance fashion designer basically I 'm very creative person . I
            love to travel and explore new place. My favorite travel
            destinations are Greece, Paris and the one I love most is Goa. I
            prefer motivational books. Movies and music are my weakness I can't
            live without them. I like to maintain Cleanliness and hygine. Wanted
            to explore world.
          </p>
        </Box>
        <Box style={{ marginTop: "40px" }}>
          <h3>Co-hosts</h3>
          <Box className={classes.displayFlex}>
            <Avatar className={classes.avatarStyleSmall}>
              <img
                src="https://a0.muscache.com/im/pictures/user/565db52a-d73f-483c-b0d6-49938f59a1e6.jpg?im_w=240"
                alt=""
                className={classes.avatarImg}
              />
            </Avatar>
            <p>Edson</p>
          </Box>
          <h3>During your stay</h3>
          <p>
            24*7 support on phone as well as my co host Edson will be there at
            the property.
          </p>
        </Box>
      </Box>
      <Box>
        <p>Languages: English, हिन्दी</p>
        <p>Response rate: 100%</p>
        <p>Response time: within an hour</p>
        <Button className={classes.button}>Contact host</Button>
        <Box className={classes.displayFlex}>
          <RiSecurePaymentFill
            className={`${classes.icon} ${classes.iconYellow}`}
          />
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
        </Box>
      </Box>
    </Box>
  )
}
