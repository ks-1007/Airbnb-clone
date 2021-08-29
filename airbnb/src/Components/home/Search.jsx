import styles from "./home.module.css"
// import styled from 'styled-components'
import { IoSearchCircle } from "react-icons/io5"
import { Link, NavLink, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import SimpleModal from "../Login/LoginModal"
import { useState } from "react"

export function Search() {
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
        <div className={styles.searchDiv}>
          <div>
            <h5>Location</h5>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div>
            <h5>Check in</h5>
            <p>Add dates</p>
          </div>
          <div>
            <h5>Check out</h5>
            <p>Add dates</p>
          </div>
          <div>
            <h5>Guest</h5>
            <p>Add guests</p>

            <span onClick={handleClick}>
              <IoSearchCircle />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
