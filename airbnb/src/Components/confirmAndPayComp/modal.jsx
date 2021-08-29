import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal} from '@material-ui/core';
import {Backdrop} from '@material-ui/core';
import {Fade} from '@material-ui/core';
import styles from './Css/modal.module.css'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius:"15px",
    boxShadow: "rgb(0 0 0 / 28%) 0px 8px 28px",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionModal({handleModal,open,children}) {
  const classes = useStyles();
 
  return (
    <div>
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={()=>handleModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
         <div className={!open ? styles.animeClose : ""}>
          <div className={styles.anime}>
          <div className={classes.paper}>
            {children}
          </div>
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}