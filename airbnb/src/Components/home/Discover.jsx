import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import SimpleModal from "../Login/LoginModal"
import styles from "./home.module.css"

const exp = [
  {
    url: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480",
    category: "Experiences",
    caption: "Find unforgettable activities near you.",
  },
  {
    url: "https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480",
    category: "Online Experiences",
    caption: "Live, interactive activities led by Hosts.",
  },
  {
    url: "https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=480",
    category: "Olympians & Paralympians",
    caption: "Online activities hosted by athletes.",
  },
]

function Exp({ ele }) {
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
      <div className={styles.exp} onClick={handleClick}>
        <img src={ele.url} alt="" />
        <h4>{ele.category}</h4>
        <p>{ele.caption}</p>
      </div>
    </>
  )
}

export function Discover() {
  return (
    <div>
      <div className={styles.discover}>
        <h1>Discover things to do</h1>
        <div>
          {exp.map((ele) => {
            return <Exp ele={ele} />
          })}
        </div>
      </div>
    </div>
  )
}
