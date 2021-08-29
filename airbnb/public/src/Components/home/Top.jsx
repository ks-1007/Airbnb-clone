
import styles from "./home.module.css"
import { Navbar } from "./Nav"
import { Search } from "./Search"
// import { Navsearch } from "./SearchDiv"
// import { Modal, Paper, Typography } from '@material-ui/core';

export function Top() {
    
    return (
        <div className={styles.top}>
            <div className={styles.strip}>
                <div>
                    <a href="a">Get the latest on our COVID-19 response</a>
                </div>
            </div>
            <div className={styles.imgdiv}>
                <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" alt="" />
                <Navbar />
                <Search />
                
                <div className={styles.flexible}>
                    <p>Not sure where to go? Perfect.</p>
                    <button><span className={styles.gradient}>I’m flexible</span></button>
                </div>
            </div>
        </div>
    )
}