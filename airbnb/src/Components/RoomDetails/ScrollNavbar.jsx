import { Paper, makeStyles, Box, Button } from "@material-ui/core"
import Star from "@material-ui/icons/Star"

export function ScrollNavbar({ showScrollNav, showScrollNavRight }) {
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
      // width: "100px",
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
              ₹1,799 <span>/ night</span>
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
            <Star style={{ color: "rgb(239,78,89)" }} /> 4.94.{" "}
            <span>137 reviews</span>
          </Box>
        </Box>

        <Box>
          <Button variant="contained" color="secondary" className={classes.btn}>
            Check availability
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
