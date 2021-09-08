import Star from "@material-ui/icons/Star"
import styled from "styled-components"
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp"
import { Container, Divider, makeStyles } from "@material-ui/core"
import { IoShareOutline } from "react-icons/io5"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { RoomImages } from "../Components/RoomDetails/RoomImages"
import { AmenityDetails } from "../Components/RoomDetails/AmenityDetails"
import { Reviews } from "../Components/RoomDetails/Reviews"
import { HostDetails } from "../Components/RoomDetails/HostDetails"
import { ThingsToKnow } from "../Components/RoomDetails/ThingsToKnow"

import { ScrollNavbar } from "../Components/RoomDetails/ScrollNavbar"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Footer } from "../Components/home/Footer"
import { ConfirmAndPayNavbar } from "../Components/confirmAndPayComp/confirmAndPayNavbar"
import Loading from "../Components/RoomDetails/Loading"
const useStyle = makeStyles({
  root: {
    postion: "relative",
  },
  pink_icon: {
    color: "rgb(239,78,89)",
  },
})

const NameCont = styled.div`
  & > div:nth-of-type(1) {
    text-align: left;
    & > div {
      display: flex;
      justify-content: space-between;
      & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      & > div:nth-of-type(1) > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export function RoomDetailsPage() {
  const { hotelId } = useParams()

  const [showScrollNav, setShowScrollNav] = useState("none")
  const [showScrollNavRight, setShowScrollNavRight] = useState("none")
  const classes = useStyle()
  const [room, setRoom] = useState(false)

  useEffect(() => {
    axios
      .get(`https://airbnb1007-clone-server.herokuapp.com/data/${hotelId}`)

      .then(({ data }) => {
        setRoom(data)
        console.log(room)
      })
      .catch((err) => {
        console.log("err:", err)
      })
  }, [])

  const handleScroll = (e) => {
    if (window.pageYOffset >= 470) {
      setShowScrollNav("flex")
    } else {
      setShowScrollNav("none")
    }
    if (window.pageYOffset >= 1895) {
      setShowScrollNavRight("flex")
    } else {
      setShowScrollNavRight("none")
    }
  }
  window.addEventListener("scroll", handleScroll)

  return !room ? (
    <Loading />
  ) : (
    <>
      <ScrollNavbar
        showScrollNav={showScrollNav}
        showScrollNavRight={showScrollNavRight}
        starRating={room.starRating}
        hotelId={hotelId}
      />
      <ConfirmAndPayNavbar />
      <Container className={classes.root}>
        <NameCont>
          <div>
            <h2>{room.name.replace("[SANDBOX]", "")}</h2>
            <div>
              <div>
                <div>
                  <Star className={classes.pink_icon} />
                  {room.starRating}{" "}
                  <span style={{ color: "grey", textDecoration: "underline" }}>
                    {" "}
                    &nbsp; {room.review} reviews{" "}
                  </span>
                </div>{" "}
                &nbsp; . &nbsp;
                <div>
                  <FiberManualRecordSharpIcon className={classes.pink_icon} />{" "}
                  <span style={{ color: "grey" }}> Superhost </span>
                </div>{" "}
                &nbsp; . &nbsp;
                <div style={{ color: "grey", textDecoration: "underline" }}>
                  {" "}
                  <p>
                    {" "}
                    {room.address.line1}, {room.address.city},{" "}
                    {room.address.countryName}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "145px",
                }}
              >
                <IoShareOutline style={{ fontSize: "20px" }} />{" "}
                <span style={{ textDecoration: "underline" }}>Share</span>{" "}
                <FavoriteBorderIcon />{" "}
                <span style={{ textDecoration: "underline" }}>Save</span>{" "}
              </div>
            </div>
          </div>
        </NameCont>

        <RoomImages {...room.roomTypes[0]} />
        <AmenityDetails
          description={room.description}
          roomTypes={room.roomTypes}
          starRating={room.starRating}
          price={room.price}
          hotelId={hotelId}
        />

        <Divider />
        <Reviews starRating={room.starRating} />
        <Divider />
        <HostDetails />
        <Divider />
        <ThingsToKnow />
      </Container>
      <Footer />
    </>
  )
}
