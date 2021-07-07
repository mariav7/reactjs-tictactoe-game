import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      fontSize: "2.5rem",
    },
  }));

export const Square = (props) => {
  const { onClick, value } = props;
  const classes = useStyles();
  return (
    <Button
      size='large'
      className={classes.button}
      variant="contained" 
      color="primary"
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default Square;