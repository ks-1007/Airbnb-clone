import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch }from '@material-ui/core';
const IOSSwitch = withStyles((theme) => ({
  root: {
    width:50,
    height: 35,
    padding: 0,
    margin: 0,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: "rgb(34, 34, 34)",
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: theme.palette.common.white,
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 32,
    height: 32,
  },
  track: {
    borderRadius: 20,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "rgb(176, 176, 176)",
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});



export default function SlidingSwitch(props) {
         const {checked, onChange, name} = props

  return (
  
        <IOSSwitch checked={checked} onChange={onChange} name={name} />
      
  );
}
