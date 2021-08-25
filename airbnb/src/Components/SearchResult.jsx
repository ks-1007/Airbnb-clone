import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

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
}));

function SearchResult({
  key,
  images,
  name,
  reviews,
  address,
  description,
  starRating,
  price,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.splice[5];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div key={key} className="searchResult">
      <div  >
          <img
            className={classes.img}
            src={images[activeStep].url}
            alt={images[activeStep].label}
          />
      <MobileStepper
      variant="dots"
      steps={5}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
          {/* Next */}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          {/* Back */}
        </Button>
      }
    />
      </div>

      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <div className="searchResult__infoTopDescription">
            <p>{address.city}</p>
            <h4>{name.replace("[SANDBOX]", "")}</h4>
            <p>____</p>
            <p>{description}</p>
          </div>
          <p>
            <FavoriteBorderIcon className="searchResult__heart" />
          </p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <div>
              <strong>{starRating}</strong>
            </div>
            <p>{reviews}</p>
          </div>
          <div className="searchResults__price">
            <p>
              <b>{price}</b>/night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
