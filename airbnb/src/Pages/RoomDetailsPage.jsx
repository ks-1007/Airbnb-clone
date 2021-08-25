import Star from "@material-ui/icons/Star"
import styled from "styled-components"
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp"
import { Container, Divider, makeStyles } from "@material-ui/core"
import { IoShareOutline } from "react-icons/io5"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { RoomImages } from "../Components/RoomDetails/RoomImages"
import { AmenityDetails } from "../Components/RoomDetails/AmenityDetails"
import { Calendar } from "../Components/RoomDetails/Calendar"
import { Reviews } from "../Components/RoomDetails/Reviews"
import { HostDetails } from "../Components/RoomDetails/HostDetails"
import { ThingsToKnow } from "../Components/RoomDetails/ThingsToKnow"
const useStyle = makeStyles({
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

export function RoomDetailsPage({
  name,
  starRating,
  address,
  description,
  roomTypes,
}) {
  const classes = useStyle()
  return (
    <>
      <Container>
        <NameCont>
          <div>
            <h2>{name}</h2>
            <div>
              <div>
                <div>
                  <Star className={classes.pink_icon} />
                  {starRating}{" "}
                  <span style={{ color: "grey", textDecoration: "underline" }}>
                    {" "}
                    &nbsp; (150 reviews){" "}
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
                    {address.line1}, {address.city}, {address.countryName}
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
                <IoShareOutline />{" "}
                <span style={{ textDecoration: "underline" }}>Share</span>{" "}
                <FavoriteBorderIcon />{" "}
                <span style={{ textDecoration: "underline" }}>Save</span>{" "}
              </div>
            </div>
          </div>
        </NameCont>

        <RoomImages />
        <AmenityDetails description={description} roomTypes={roomTypes} />
        {/* <Calendar /> */}
        <Reviews starRating={starRating} />
        <Divider />
        <HostDetails />
        <Divider />
        <ThingsToKnow />
      </Container>
    </>
  )
}
