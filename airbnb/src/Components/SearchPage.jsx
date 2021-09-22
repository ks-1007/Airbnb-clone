import React, { useEffect, useState } from "react"
import styles from "./SearchPage.module.css"
import SearchResult from "./SearchResult"
import axios from "axios"
import Button from "@material-ui/core/Button"
import ImportExportIcon from "@material-ui/icons/ImportExport"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import { Link } from "react-router-dom"
import { Footer } from "./home/Footer"
import { ConfirmAndPayNavbar } from "./confirmAndPayComp/confirmAndPayNavbar"
import Loading from "./RoomDetails/Loading"
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    width: "200px",
    padding: "50px 30px",
    top: 300,
    right: 0,
    left: 450,
    zIndex: 1,
    border: "1px solid",
    backgroundColor: theme.palette.background.paper,
  },
}))
function SearchPage() {
  const classes = useStyles()
  const [hotel, setHotel] = useState(false)
  const [rating, setRating] = useState(false)
  const [review, setReview] = useState(false)
  const [filterHotel, SetFilterHotel] = useState([])
  const [value, setValue] = React.useState([100, 5000])
  const [open, setOpen] = React.useState(false)

  const getData = async () => {
    axios
      .get("https://airbnb1007-clone-server.herokuapp.com/data")
      .then(({ data }) => {
        setHotel([...data])
        SetFilterHotel([...data])
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }

  const handleRating = () => {
    setRating(!rating)
    if (rating) {
      hotel.sort((a, b) => b.starRating - a.starRating)
      setHotel([...hotel])
    } else {
      hotel.sort((a, b) => a.starRating - b.starRating)
      setHotel([...hotel])
    }
  }

  const handleReview = () => {
    setReview(!review)
    if (review) {
      hotel.sort((a, b) => b.review - a.review)
      setHotel([...hotel])
    } else {
      hotel.sort((a, b) => a.review - b.review)
      setHotel([...hotel])
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
    const st = filterHotel.filter(
      (o) => o.price >= value[0] && o.price <= value[1]
    )
    setHotel(st)
  }

  const handleLike = async (likedData, e) => {
    await axios.patch(
      `https://airbnb1007-clone-server.herokuapp.com/data/${likedData.id}`,
      {
        ...likedData,
        liked: !likedData.liked,
      }
    )
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return !hotel ? (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  ) : (
    <>
      <ConfirmAndPayNavbar />
      <div>
        <div className={styles.searchPage__info}>
          <h3>300+ stays</h3>
          <h1>Outdoor getaways</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button onClick={handleClick} variant="outlined">
            Price
          </Button>
          {open ? (
            <div className={classes.dropdown}>
              <Slider
                value={value}
                min={100}
                max={5000}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-valuemax={value}
              />
              <div className={styles.fl_pr_sec}>
                <div>
                  <b>min price</b> <br />
                  {value[0]}
                </div>
                <h2>-</h2>
                <div>
                  <b>max price</b> <br />
                  {value[1]}
                </div>
              </div>
            </div>
          ) : null}

          <Button onClick={handleRating} variant="outlined">
            Rating
            <ImportExportIcon />
          </Button>
          <Button onClick={handleReview} variant="outlined">
            Review
            <ImportExportIcon />
          </Button>
          <Button variant="outlined">More filters</Button>
          <hr className={styles.searchPage__info_breakLine} />
        </div>
        {hotel.map((el) => (
          <SearchResult
            handleLike={handleLike}
            el={el}
            liked={el.liked}
            id={el.id}
            images={el.images}
            address={el.address}
            description={el.details}
            name={el.name}
            starRating={el.starRating}
            price={el.price}
            review={el.review}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default SearchPage
