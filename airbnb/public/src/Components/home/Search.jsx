import styles from "./home.module.css"
// import styled from 'styled-components'
import { IoSearchCircle } from 'react-icons/io5';

export function Search() {
    return (
        <div>
            <div className={styles.searchDiv}>
                <div>
                    <h5>Location</h5>
                    <p>Where are you going?</p>
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
                    <span><IoSearchCircle/></span>
                </div>
            </div>
        </div>
    )
}