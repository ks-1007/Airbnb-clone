import { Box, makeStyles } from "@material-ui/core"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import PetsIcon from "@material-ui/icons/Pets"
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms"
import { FaSprayCan } from "react-icons/fa"
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded"
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined"
const useStyle = makeStyles({
  root: {
    textAlign: "left",
    padding: "50px",
  },
  gridCont: {
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    justifyContent: "space-between",
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: "25px",
    marginRight: "15px",
  },
  iconStyle2: {
    fontSize: "40px",
    marginRight: "15px",
  },
  showMore: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "underline",
    cursor: "pointer",
    width: "150px",
    color: "grey",
    marginTop: "20px",
  },
})
export function ThingsToKnow() {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <h2 style={{ marginTop: "0" }}>Things to know</h2>
      <Box className={classes.gridCont}>
        <Box>
          <h3>House rules</h3>
          <Box className={classes.displayFlex}>
            <WatchLaterIcon className={classes.iconStyle} />{" "}
            <p>Check-in: After 1:00 pm</p>
          </Box>
          <Box className={classes.displayFlex}>
            <WatchLaterIcon className={classes.iconStyle} />{" "}
            <p>Check out: 10:00 am</p>
          </Box>
          <Box className={classes.displayFlex}>
            <MeetingRoomIcon className={classes.iconStyle} />{" "}
            <p>Self check-in with building staff</p>
          </Box>
          <Box className={classes.displayFlex}>
            <PetsIcon className={classes.iconStyle} /> <p>Pets are allowed</p>
          </Box>
          <Box className={classes.displayFlex}>
            <SmokingRoomsIcon className={classes.iconStyle} />{" "}
            <p>Smoking is allowed</p>
          </Box>
          <Box className={classes.showMore}>
            Show more <ChevronRightOutlinedIcon />
          </Box>
        </Box>
        <Box>
          <h3>Health & safety</h3>

          <Box className={classes.displayFlex}>
            <FaSprayCan className={classes.iconStyle2} />{" "}
            <p>
              Airbnb's social distancing and other COVID-19-related guidelines
              apply
            </p>
          </Box>
          <Box className={classes.displayFlex}>
            <ErrorRoundedIcon className={classes.iconStyle} />{" "}
            <p>No carbon monoxide alarm</p>
          </Box>
          <Box className={classes.displayFlex}>
            <ErrorRoundedIcon className={classes.iconStyle} />{" "}
            <p>No smoke alarm</p>
          </Box>
          <Box className={classes.displayFlex}>
            <ErrorRoundedIcon className={classes.iconStyle} />{" "}
            <p>Pool/hot tub without a gate or lock</p>
          </Box>
          <Box className={classes.displayFlex}>
            <ErrorRoundedIcon className={classes.iconStyle} />{" "}
            <p>Climbing or play structure</p>
          </Box>
          <Box className={classes.showMore}>
            Show more <ChevronRightOutlinedIcon />
          </Box>
        </Box>
        <Box>
          <h3>Cancellation policy</h3>
          <p>
            Non-refundable: Cancel before check-in and get back only the
            cleaning fee, if you've paid one.
          </p>
          <Box className={classes.showMore}>
            Show more <ChevronRightOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
