import React from "react";
import { Box } from '@material-ui/core';
import { Square } from '../../components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    board: {
        border: `4px solid ${theme.palette.secondary.dark}`,
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '10px',
        width: '300px',
        height: '300px',
        margin: '5rem auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    },
}));

export const Board = (props) => {
    const { squares, onClick } = props;
    const classes = useStyles();

  return (
    <Box className={classes.board}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </Box>
  );
};

export default Board;