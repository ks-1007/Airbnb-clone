import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Button from "@material-ui/core/Button"
import FacebookIcon from "@material-ui/icons/Facebook"
import AppleIcon from "@material-ui/icons/Apple"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import styles from "./Login.module.css"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import { Login } from "./Login."
import { Logout } from "./Logout"

const country = [
  {
    label: "India +91",
  },
  {
    label: "Argentina +54",
  },
  {
    label: "AmericanSamoa +1684",
  },
  {
    label: "Australia +61",
  },
  {
    label: "Bhutan +975",
  },
  {
    label: "Canada +1",
  },
  {
    label: "China +86",
  },
  {
    label: "France +33",
  },
]

function getModalStyle() {
  return {
    top: 100,
    left: 400,
  }
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    border: "none",
  },
}))

export default function SimpleModal({ show, closeModal }) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)
  // const [open, setOpen] = React.useState(show)
  const [cnt, setCnt] = React.useState("India +91")
  // const handleOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }
  const handleChange = (event) => {
    setCnt(event.target.value)
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Log in or sign up</h4>
      <hr />
      <div>
        <div>
          <h3>Welcome to Airbnb</h3>
          <div className={styles.inputArea}>
            <TextField
              style={{ width: "100%" }}
              id="standard-select-currency"
              onChange={handleChange}
              value={cnt}
              select
              label="Country/Region"
            >
              {country.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              style={{ width: "100%" }}
              id="standard-select-currency"
              label="Phone number"
              type="number"
              placeholder="+1 (xxx) xxx-xxxx"
            ></TextField>
          </div>
          <p style={{ fontSize: "12px" }}>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. <b>Privacy Policy</b>
          </p>
          <Button
            style={{ width: "100%", height: "40px", marginBottom: "10px" }}
            variant="contained"
            color="secondary"
          >
            Continue
          </Button>
        </div>
        <hr />
        <div>
          <Login closeModal={closeModal} />

          <div className={styles.loginIconBox}>
            <FacebookIcon
              style={{
                fontSize: 50,
                borderRadius: "10",
                color: "rgb(72,103,170)",
              }}
            />
            <p>Continue with Facebook</p>
          </div>
          <div className={styles.loginIconBox}>
            <AppleIcon
              style={{
                fontSize: 50,
                borderRadius: "10",
                color: "rgb(143,143,143)",
              }}
            />
            <p>Continue with Apple</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Login
      </button> */}
      <Modal open={show} onClose={closeModal}>
        {body}
      </Modal>
    </div>
  )
}
