import styles from "./home.module.css"
// import styled from 'styled-components'
import { IoSearchCircle } from "react-icons/io5"
import { Link, NavLink, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import SimpleModal from "../Login/LoginModal"
import { useState } from "react"

export function Search() {
  const history = useHistory()
  const isAuth = useSelector((state) => state.isAuth)
  const [show, setShow] = useState(false)
  const closeModal = () => {
    setShow(false)
  }
  const handleClick = () => {
    if (isAuth) {
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
            {/* <NavLink to="/hotels"> */}
            <span onClick={handleClick}>
              <IoSearchCircle />
            </span>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  )
}
