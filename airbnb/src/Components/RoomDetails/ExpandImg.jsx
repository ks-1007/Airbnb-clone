import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
// import ImageListItemBar from "@material-ui/core/ImageListItemBar"
// import IconButton from "@material-ui/core/IconButton"
// import StarBorderIcon from "@material-ui/icons/StarBorder"
// import itemData from "./itemData"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    paddingTop: "70px",
  },
  imageList: {
    width: 800,
    height: 660,

    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}))

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export function ExpandImg({ images }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ImageList rowHeight={200} gap={1} className={classes.imageList}>
        {images.map((item, index) => (
          <ImageListItem
            key={item.url}
            cols={index % 3 === 0 ? 2 : 1}
            rows={index % 3 === 0 ? 2 : 1}
          >
            <img src={item.url} alt={""} />
            {/* <ImageListItemBar
              title={""}
              position="top"
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  className={classes.icon}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}
