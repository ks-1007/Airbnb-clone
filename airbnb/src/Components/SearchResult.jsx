import React from "react"
import styles from "./SearchResult.module.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import IconButton from "@material-ui/core/IconButton"
import StarIcon from "@material-ui/icons/Star"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import axios from "axios"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },

  img: {
    height: 230,
    maxWidth: 320,
    overflow: "hidden",
    display: "block",
    width: "100%",
    borderRadius: "5%",
  },
}))

function SearchResult({
  el,
  id,
  images,
  name,
  review,
  address,
  description,
  starRating,
  price,
  handleLike,
  liked,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.splice[5]

  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  //////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div id={id} className={styles.searchResult}>
        <div className={styles.imgContainer}>
          <Link
            key={id}
            to={`/room/${id}`}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              className={classes.img}
              src={images[activeStep].url}
              alt={images[activeStep].label}
            />
          </Link>
          <MobileStepper
            variant="dots"
            steps={5}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button
                size="small"
                onClick={(e) => handleNext(e)}
                disabled={activeStep === 4}
              >
                {/* Next */}
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={(e) => handleBack(e)}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                {/* Back */}
              </Button>
            }
          />
        </div>

        <Link
          key={id}
          to={`/room/${id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className={styles.searchResult__info}>
            <div className={styles.searchResult__infoTop}>
              <div className={styles.searchResult__infoTopDescription}>
                <p>{address.city}</p>
                <h4>{name.replace("[SANDBOX]", "")}</h4>
                <hr className={styles.searchResult__info_line} />
                <p>{description}</p>
              </div>
              <p>
                <IconButton onClick={() => handleLike(el, liked)}>
                  <FavoriteIcon
                    data-testid="like-icon"
                    // style={liked ? { color: "red" } : undefined}
                  />
                </IconButton>
              </p>
            </div>{" "}
            <div className={styles.searchResult__infoBottom}>
              <div className={styles.searchResult__stars}>
                <StarIcon className={styles.searchResult__star} />
                <div>
                  <strong>{starRating}</strong>
                </div>
                <p> ({review} reviews)</p>
              </div>
              <div className={styles.searchResults__price}>
                <p>
                  <b>₹{price} / </b>night
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default SearchResult
