import { Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import Star from "@material-ui/icons/Star"
import "date-fns"
import React from "react"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { GuestInput } from "./GuestsInput"
import { useHistory } from "react-router-dom"
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
export function ReserveBox({ starRating, price }) {
  const classes = useStyle()
  const [selectedCheckInDate, setSelectedCheckInDate] = React.useState(
    new Date("2021-08-26T21:11:54")
  )
  const [selectedCheckOutDate, setSelectedCheckOutDate] = React.useState(
    new Date("2021-08-26T21:11:54")
  )

  const handleCheckInDateChange = (date) => {
    setSelectedCheckInDate(date)
  }
  const handleCheckOutDateChange = (date) => {
    setSelectedCheckOutDate(date)
  }
  const history = useHistory()
  const handleClick = () => {
    history.push("/payment")
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.mainCont}>
        <Box className={classes.flexDisplay1}>
          <Box>
            <h2>
              ₹{price} <span>/ night</span>
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
            <Star style={{ color: "rgb(239,78,89)" }} /> {starRating + "."}{" "}
            <span>137 reviews</span>
          </Box>
        </Box>
        <Box className={classes.inputCont}>
          <Box
            style={{
              display: "flex",
              height: "50px",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                // borderRight: "1px solid grey",

                width: "150px",
              }}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box
                  style={
                    {
                      // display: "grid",
                      // gridTemplateColumns: "25% 25%",
                      // gap: "2%",
                      // height: "100px",
                    }
                  }
                >
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Check-in date"
                    value={selectedCheckInDate}
                    onChange={handleCheckInDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </MuiPickersUtilsProvider>
            </Box>
            <Box
              style={{
                textAlign: "left",
                width: "150px",
              }}
            >
              {" "}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box
                  style={
                    {
                      // display: "grid",
                      // gridTemplateColumns: "25% 25%",
                      // gap: "2%",
                      // height: "100px",
                    }
                  }
                >
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Check-out date"
                    value={selectedCheckOutDate}
                    onChange={handleCheckOutDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </MuiPickersUtilsProvider>
            </Box>
          </Box>
          <Box /*style={{ borderTop: "1px solid grey" }}*/>
            <GuestInput />
          </Box>
        </Box>
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
  )
}
