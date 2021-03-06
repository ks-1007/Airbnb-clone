import { Paper, makeStyles, Box, Button } from "@material-ui/core"
import Star from "@material-ui/icons/Star"
import { useHistory } from "react-router-dom"

export function ScrollNavbar({
  showScrollNav,
  showScrollNavRight,
  starRating,
  hotelId,
  price,
  review,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: showScrollNav,
      alignItems: "center",
      height: "100px",
      position: "fixed",
      top: "0",
      zIndex: "1",
      width: "1300px",
      padding: "0 120px",
      justifyContent: "space-between",
    },
    section: {
      color: "gray",
      fontWeight: "500",
      height: "100px",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      cursor: "pointer",
      justifyContent: "center",
      "&:hover": {
        borderBottom: "5px solid black",
      },
      fontSize: "17px",
    },
    left: {
      display: "flex",
    },
    right: {
      display: showScrollNavRight,
      alignItems: "center",
    },
    btn: {
      height: "50px",
      width: "200px",
      borderRadius: "10px",
    },
    flexDisplay1: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }))
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => {
    history.push(`/payment/${hotelId}`)
  }
  return (
    <Paper className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.section}>Photos</Box>
        <Box className={classes.section}>Amenities</Box>
        <Box className={classes.section}>Reviews</Box>
        <Box className={classes.section}>Location</Box>
      </Box>

      <Box className={classes.right}>
        <Box className={classes.flexDisplay1}>
          <Box style={{ margin: "0 20px" }}>
            <h2 style={{ margin: "0" }}>
              {price} <span>/ night</span>
            </h2>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              width: "150px",
              justifyContent: "space-around",
            }}
          >
            <Star style={{ color: "rgb(239,78,89)" }} /> {starRating}.{" "}
            <span>{review} reviews</span>
          </Box>
        </Box>

        <Box>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={handleClick}
          >
            Check availability
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
