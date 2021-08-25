import { Avatar, Box, Button, Divider, makeStyles } from "@material-ui/core"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import { BiSprayCan } from "react-icons/bi"
import { FaSwimmingPool } from "react-icons/fa"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import PoolOutlinedIcon from "@material-ui/icons/PoolOutlined"
import LocalDiningOutlinedIcon from "@material-ui/icons/LocalDiningOutlined"
import WifiOutlinedIcon from "@material-ui/icons/WifiOutlined"
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined"
import PetsOutlinedIcon from "@material-ui/icons/PetsOutlined"
import TvOutlinedIcon from "@material-ui/icons/TvOutlined"
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined"
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
    margin: "5px",
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
  bedroomImage: {
    height: "250px",
    width: "370px",
    borderRadius: "10px",
    marginRight: "20px",
  },
  bedroomCont: {
    padding: "40px 0",
  },
  amenityGrid: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    justifyContent: "space-around",
  },
  iconSize2: {
    fontSize: "35px",
    marginRight: "10px",
  },
  button: {
    marginTop: "20px",
    marginBottom: "50px",
    border: "1px solid black",
    height: "55px",
    borderRadius: "10px",
    width: "230px",
  },
}))

export function AmenityDetails({ description, roomTypes }) {
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
      <Box className={classes.description}>{description.short}</Box>
      <Divider />
      <Box className={classes.bedroomCont}>
        <h1 style={{ marginBottom: "20px", marginTop: "0" }}>
          Where you'll sleep
        </h1>
        <Box className={classes.amenity}>
          <Box>
            <img
              className={classes.bedroomImage}
              src={roomTypes[0].images[7].url}
              alt=""
            />
            <h3 className={classes.marginZero}>Bedroom</h3>
            <p className={classes.marginZero}>
              1 queen bed, 1 floor mattress, 1 cot
            </p>
          </Box>
          <Box>
            <img
              className={classes.bedroomImage}
              src={roomTypes[1].images[7].url}
              alt=""
            />
            <h3 className={classes.marginZero}>Living room</h3>
            <p className={classes.marginZero}>1 floor mattress, 1 cot</p>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box>
        <h1>What is place offers</h1>
        <Box className={classes.amenityGrid}>
          <Box className={classes.amenity}>
            <PoolOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Beach access</p>
          </Box>
          <Box className={classes.amenity}>
            <LocalDiningOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Kitchen</p>
          </Box>
          <Box className={classes.amenity}>
            <WifiOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Wifi</p>
          </Box>
          <Box className={classes.amenity}>
            <DirectionsCarOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Free parking on premises</p>
          </Box>
          <Box className={classes.amenity}>
            <FaSwimmingPool className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Shared Pool</p>
          </Box>
          <Box className={classes.amenity}>
            <PetsOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Pets allowed</p>
          </Box>
          <Box className={classes.amenity}>
            <TvOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>TV</p>
          </Box>
          <Box className={classes.amenity}>
            <AcUnitOutlinedIcon className={classes.iconSize2} />
            <p style={{ fontSize: "20px" }}>Air conditioning </p>
          </Box>
        </Box>
        <Button className={classes.button}>Show all 36 amenities</Button>
      </Box>
      <Divider />
    </Box>
  )
}
