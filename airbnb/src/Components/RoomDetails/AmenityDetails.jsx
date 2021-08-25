import { Avatar, Box, Divider, makeStyles } from "@material-ui/core"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import { BiSprayCan } from "react-icons/bi"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    width: "70%",
  },
  amenityTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  amenity: {
    display: "flex",
    alignItems: "center",
  },
  iconSize: {
    fontSize: "50px",
    marginRight: "10px",
  },
  marginZero: {
    margin: "0",
  },
  amenityList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "left",
    height: "400px",
  },
  description: {
    fontSize: "20px",
    padding: "15px 0",
  },
}))

export function AmenityDetails({ short }) {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.amenityTop}>
        <Box>
          <h1>Entire serviced apartment hosted by Neha </h1>
          <p>4 guests · 1 bedroom · 1 bed · 1.5 bathrooms</p>
        </Box>
        <Box>
          <Avatar className={classes.large}>h</Avatar>
        </Box>
      </Box>
      <Divider />
      <Box className={classes.amenityList}>
        <Box className={classes.amenity}>
          <HomeOutlinedIcon className={classes.iconSize} />
          <Box>
            <h3 className={classes.marginZero}>Entire home</h3>
            <p className={classes.marginZero}>
              You’ll have the serviced apartment to yourself.
            </p>
          </Box>
        </Box>
        <Box className={classes.amenity}>
          <MeetingRoomIcon className={classes.iconSize} />
          <Box>
            <h3 className={classes.marginZero}>Self check-in</h3>
            <p className={classes.marginZero}>
              You can check in with the doorperson.
            </p>
          </Box>
        </Box>
        <Box className={classes.amenity}>
          <BiSprayCan className={classes.iconSize} />
          <Box>
            <h3 className={classes.marginZero}>Clean and tidy</h3>
            <p className={classes.marginZero}>
              7 recent guests said this place was sparkling clean.
            </p>
          </Box>
        </Box>
        <Box className={classes.amenity}>
          <LocationOnOutlinedIcon className={classes.iconSize} />
          <Box>
            <h3 className={classes.marginZero}>Great location</h3>
            <p className={classes.marginZero}>
              95% of recent guests gave the location a 5-star rating.
            </p>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className={classes.description}>{short}</Box>
      <Divider />
    </Box>
  )
}
