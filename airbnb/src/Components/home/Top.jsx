
import styles from "./home.module.css"
// import { Navbar } from "./Nav"
// import { Modal, Paper, Typography } from '@material-ui/core';

export function Top() {
    
    return (
        <div className={styles.top}>
            <div className={styles.strip}>
                <div>
                    <a href="a">Get the latest on our COVID-19 response</a>
                </div>
            </div>
            {/* <Modal open={true} aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        //className={classes.modal}
        //onClose={handleClose}
        closeAfterTransition
        //BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
                <Paper><Typography>heii</Typography></Paper>
            </Modal> */}
            <div className={styles.imgdiv}>
                <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" alt="" />
                {/* <Navbar/> */}
            </div>
        </div>
    )
}