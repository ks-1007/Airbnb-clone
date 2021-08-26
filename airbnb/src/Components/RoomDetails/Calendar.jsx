import "date-fns"
import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { Box } from "@material-ui/core"

export function Calendars() {
  // The first commit of Material-UI
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

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <h2 style={{ textAlign: "left" }}>Select check-in and check-out date</h2>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25%",
          gap: "2%",
          height: "100px",
        }}
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
  )
}
