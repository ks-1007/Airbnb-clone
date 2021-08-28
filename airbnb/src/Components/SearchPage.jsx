import React, { useEffect, useState } from "react"
import styles from "./SearchPage.module.css"
import SearchResult from "./SearchResult"
import axios from "axios"
import Button from "@material-ui/core/Button"
import ImportExportIcon from "@material-ui/icons/ImportExport"
import { makeStyles } from "@material-ui/core/styles"
import Slider from "@material-ui/core/Slider"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actionGetHotelList } from "../Store/action"

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    width: "200px",
    top: 110,
    right: 0,
    left: 200,
    zIndex: 1,
  },
}))
function SearchPage() {
  const classes = useStyles()
  const [hotel, setHotel] = useState([])
  const [rating, setRating] = useState(false)
  const [review, setReview] = useState(false)
  const [filterHotel, SetFilterHotel] = useState([])
  const [value, setValue] = React.useState([100, 5000])
  console.log(value)
  const [open, setOpen] = React.useState(false)

  const getData = async () => {
    axios
      .get("http://localhost:3050/data")
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

  const handleLike = async (likedData) => {
    await axios.patch(`http://localhost:3050/data/${likedData.id}`, {
      ...likedData,
      liked: !likedData.liked,
    })
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <div className={styles.searchPage__info}>
        <p>300+ stays</p>
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
  )
}

export default SearchPage
