import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Slider from "@material-ui/core/Slider"

const useStyles = makeStyles({
  root: {
    width: 200,
  },
})

export default function RatingBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Slider disabled defaultValue={80} aria-labelledby="disabled-slider" />
    </div>
  )
}
