import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import SimpleModal from "../Login/LoginModal"
import styles from "./home.module.css"

const places = [
  {
    url: "https://a0.muscache.com/im/pictures/8340bd19-ee32-4669-8b10-a8ac7e7735d4.jpg?im_q=medq&im_w=240",
    city: "Hyderabad",
    drive: "15-minute drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240",
    city: "Nagpur (Urban)",
    drive: "6-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/ac2086c9-df0d-4085-94c0-94fe3fb94862.jpg?im_q=medq&im_w=240",
    city: "Tirupati (Rural)",
    drive: "7.5-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240",
    city: "Nandi Hills",
    drive: "7-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240",
    city: "Kolhapur",
    drive: "7-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/7c424b7e-0f02-4282-93cf-c5fc5e5e157d.jpg?im_q=medq&im_w=240",
    city: "Aurangabad",
    drive: "7-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240",
    city: "Vijayawada (Urban)",
    drive: "3.5-hour drive",
  },
  {
    url: "https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&im_w=240",
    city: "Hampi",
    drive: "5.5-hour drive",
  },
]

function Place({ ele }) {
  const history = useHistory()
  const token = useSelector((state) => state.token)
  const [show, setShow] = useState(false)
  const closeModal = () => {
    setShow(false)
  }
  const handleClick = () => {
    if (token) {
      history.push("/hotels")
    } else {
      setShow(true)
    }
  }
  return (
    <>
      <SimpleModal show={show} closeModal={closeModal} />
      <div>
        <div className={styles.place} onClick={handleClick}>
          <img src={ele.url} alt="" />
          <div>
            <h4>{ele.city}</h4>
            <p>{ele.drive}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export function Nearby() {
  return (
    <div>
      <div className={styles.placesDiv}>
        <h1>Explore nearby</h1>
        <div>
          {places.map((ele) => {
            return <Place ele={ele} />
          })}
        </div>
      </div>
    </div>
  )
}
