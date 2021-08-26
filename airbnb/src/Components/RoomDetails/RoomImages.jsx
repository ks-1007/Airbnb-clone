import { Box, makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
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
})
export function RoomImages({ images }) {
  console.log("images:", images)
  const classes = useStyle()

  return (
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
    </Box>
  )
}
