import React, { useState } from "react";
import { 
    Box, 
    List, 
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { Board } from '../../components';
import { calculateWinner } from '../../helpers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gameInfo: {
        height: '450px',
        margin: '5px auto',
    },
    listItem: {
        fontSize: 18,
        padding: '12px 48px 12px 1.5rem',
        '&:before, &:after': {
            content: '" "',
            top: '1.3em',
            height: 8,
            position: 'absolute',
            transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
        },
        '&:before': {
            left: '0.5rem',
            width: 8,
            borderRadius: '100%',
        },
        '&:hover, &:focus': {
            background: 'rgba(241,222,250,0.275)',
            '&:before': {
            background: '#fff',
            transform: 'scale(1)',
            },
        },
    },
}));

export const Game = () => {
    const classes = useStyles();
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current]
        //if user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () => (
        history.map((step, move) => {
            const destination = move ? `Go to move #${move}` : `Go to start`;
            return (
                <List>
                    <ListItem className={classes.listItem} key={move} button onClick={() => jumpTo(move)}>
                        <ListItemText primary={destination}/>
                    </ListItem>
                </List>
            )
        })
    );
    
    return (
        <>
            <Board
                squares={history[stepNumber]}
                onClick={(i) => handleClick(i)}
            />
            <Box className={classes.gameInfo}>
                <h3>{winner ? '🎉 Winner: ' + winner + ' 🏆' : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</h3>
                {renderMoves()}
            </Box>
        </>
    );
};

export default Game;