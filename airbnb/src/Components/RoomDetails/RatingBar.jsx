import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import { Box } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: "200px",
    zIndex: "-1",
  },
  bar: {
    color: "black",
  },
})

export default function RatingBar({ rating }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <LinearProgress
        className={classes.bar}
        variant="determinate"
        value={rating * 2 * 10}
      />
    </Box>
  )
}
