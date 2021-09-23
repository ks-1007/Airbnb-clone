import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import SimpleModal from "../Login/LoginModal"
import styles from "./home.module.css"

const stays = [
  {
    url: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
    category: "Outdoor getaways",
  },
  {
    url: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480",
    category: "Unique stays",
  },
  {
    url: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480",
    category: "Entire homes",
  },
  {
    url: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480",
    category: "Pets allowed",
  },
]

function Stay({ ele }) {
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
      // alert("Signed in successfully")
      // history.push("/hotels")
    }
  }
  return (
    <>
      <SimpleModal show={show} closeModal={closeModal} />
      <div className={styles.stay} onClick={handleClick}>
        <img src={ele.url} alt="" />
        <h4>{ele.category}</h4>
      </div>
    </>
  )
}

export function Live() {
  return (
    <div>
      <div className={styles.live}>
        <h1>Live anywhere</h1>
        <div>
          {stays.map((ele) => {
            return <Stay ele={ele} />
          })}
        </div>
      </div>
    </div>
  )
}
