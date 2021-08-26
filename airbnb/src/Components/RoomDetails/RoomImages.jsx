import { Box, Button, makeStyles, Modal } from "@material-ui/core"
import AppsIcon from "@material-ui/icons/Apps"
import { useState } from "react"
import { ExpandImg } from "./ExpandImg"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}
const useStyle = makeStyles((theme) => ({
  root: {
    // border: "2px solid black",
    borderRadius: "10px",
    height: "350px",
    display: "grid",
    gridTemplateColumns: "49.5% 49.5%",
    gridTemplateRows: "350px",
    // padding: "5px",
    gap: "0.5%",
    justifyContent: "space-around",
    position: "relative",
  },
  bigImg: {
    width: "100%",
    height: "100%",
    borderRadius: "10px 0 0 10px",
  },
  gridCont: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridTemplateRows: "175px 175px",
    overflow: "hidden",
    gap: "5px",
  },
  smallImg: {
    width: "100%",
    height: "175px",
  },
  smallImg2: {
    width: "100%",
    height: "175px",
    borderRadius: "0 20px 0 0",
  },
  smallImg3: {
    width: "100%",
    height: "175px",
    borderRadius: "0 0 25px 0",
  },
  imgExpandBtn: {
    position: "absolute",
    right: "20px",
    bottom: "20px",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "10px",
  },
  btnIcon: {
    marginRight: "10px",
  },

  modal: {
    width: "100vw",
    margin: "auto",
  },
  modalCloseBtn: {
    position: "fixed",
    backgroundColor: "white",
    left: "10px",
  },
}))
export function RoomImages({ images }) {
  // console.log("images:", images)
  const classes = useStyle()
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {
          <Box>
            <Button
              variant="contained"
              onClick={handleClose}
              className={classes.modalCloseBtn}
            >
              <ArrowBackIosIcon />
            </Button>
            <ExpandImg images={images} />
          </Box>
        }
      </Modal>

      <Box className={classes.root}>
        <Box>
          <img src={images[0].url} alt="" className={classes.bigImg} />
        </Box>
        <Box className={classes.gridCont}>
          <img className={classes.smallImg} src={images[1].url} alt="" />
          <img className={classes.smallImg2} src={images[2].url} alt="" />
          <img className={classes.smallImg} src={images[3].url} alt="" />
          <img className={classes.smallImg3} src={images[4].url} alt="" />
        </Box>
        <Button
          className={classes.imgExpandBtn}
          variant="contained"
          onClick={handleOpen}
        >
          <AppsIcon className={classes.btnIcon} /> Show all photos
        </Button>
      </Box>
    </>
  )
}
