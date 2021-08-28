import { Box, Button, makeStyles, Paper } from "@material-ui/core"
import { useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
export function GuestInput() {
  const [modalDisplay, setModalDisplay] = useState(false)
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "350px",
      height: "50px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "auto",
      color: "gray",
    },
    modal: {
      width: "300px",
      padding: "10px 25px",
      zIndex: "3",
      display: modalDisplay ? "block" : "none",
      position: "absolute",
    },
    btn: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "1px solid black",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      cursor: "pointer",
    },
    option: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnCont: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100px",
    },
    iconStyle: {
      fontSize: "40px",
    },
  }))
  const classes = useStyles()
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  return (
    <>
      <Button
        className={classes.root}
        onClick={() => setModalDisplay(!modalDisplay)}
      >
        <h3>Guests</h3>
        {modalDisplay ? (
          <ExpandLessIcon className={classes.iconStyle} />
        ) : (
          <ExpandMoreIcon className={classes.iconStyle} />
        )}
      </Button>
      <Paper className={classes.modal}>
        <Box className={classes.option}>
          <Box>
            <h3>Adults</h3>
          </Box>
          <Box className={classes.btnCont}>
            <Box
              className={classes.btn}
              onClick={() => setAdults((prev) => prev - 1)}
            >
              <RemoveIcon />
            </Box>
            {adults}
            <Box
              className={classes.btn}
              onClick={() => setAdults((prev) => prev + 1)}
            >
              <AddIcon />
            </Box>
          </Box>
        </Box>
        <Box className={classes.option}>
          <Box>
            <h3>Children</h3>
          </Box>
          <Box className={classes.btnCont}>
            <Box
              className={classes.btn}
              onClick={() => setChildren((prev) => prev - 1)}
            >
              <RemoveIcon />
            </Box>
            {children}
            <Box
              className={classes.btn}
              onClick={() => setChildren((prev) => prev + 1)}
            >
              <AddIcon />
            </Box>
          </Box>
        </Box>
        <Box className={classes.option}>
          <Box>
            <h3>Infants</h3>
          </Box>
          <Box className={classes.btnCont}>
            <Box
              className={classes.btn}
              onClick={() => setInfants((prev) => prev - 1)}
            >
              <RemoveIcon />
            </Box>
            {infants}
            <Box
              className={classes.btn}
              onClick={() => setInfants((prev) => prev + 1)}
            >
              <AddIcon />
            </Box>
          </Box>
        </Box>
        <p>
          2 guests maximum. Infants don’t count toward the number of guests.
        </p>
        <Box style={{ textAlign: "right" }}>
          <h3
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setModalDisplay(false)}
          >
            Close
          </h3>
        </Box>
      </Paper>
    </>
  )
}
