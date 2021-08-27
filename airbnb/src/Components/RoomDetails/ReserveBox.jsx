import { Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Star from "@material-ui/icons/Star"
import { GuestInput } from "./GuestsInput"
const useStyle = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "400px",
    position: "sticky",
    top: "160px",
    marginTop: "50px",
  },
  flexDisplay1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainCont: {
    border: "1px solid grey",
    borderRadius: "10px",
    height: "300px",
    width: "350px",
    textAlign: "center",
    padding: "30px",
  },
  inputCont: {
    border: "2px solid grey",
    borderRadius: "10px",
    height: "100px",
    width: "350px",
    margin: " 15px auto",
    textAlign: "left",
  },
  btn: {
    marginTop: "10px",
    width: "300px",
    height: "50px",
    borderRadius: "10px",
    zIndex: "0",
  },
}))
export function ReserveBox() {
  const classes = useStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.mainCont}>
        <Box className={classes.flexDisplay1}>
          <Box>
            <h2>
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
        <Box className={classes.inputCont}>
          <Box
            style={{
              display: "flex",
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                borderRight: "1px solid grey",
                textAlign: "left",
                width: "150px",
              }}
            >
              <p>check in</p>
            </Box>
            <Box
              style={{
                textAlign: "left",
                width: "150px",
              }}
            >
              {" "}
              <p> check out </p>
            </Box>
          </Box>
          <Box style={{ borderTop: "1px solid grey" }}>
            <GuestInput />
          </Box>
        </Box>
        <Button variant="contained" color="secondary" className={classes.btn}>
          Check availability
        </Button>
      </Box>
    </Box>
  )
}
