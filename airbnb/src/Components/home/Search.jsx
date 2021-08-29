import styles from "./home.module.css"
// import styled from 'styled-components'
import { IoSearchCircle } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"

export function Search() {
  return (
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
          <NavLink to="/hotels">
            <span>
              <IoSearchCircle />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
