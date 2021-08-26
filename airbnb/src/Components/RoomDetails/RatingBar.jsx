import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"

const useStyles = makeStyles({
  root: {
    width: "200px",
  },
  bar: {
    color: "black",
  },
})

export default function RatingBar({ rating }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LinearProgress
        className={classes.bar}
        variant="determinate"
        value={rating * 2 * 10}
      />
    </div>
  )
}
