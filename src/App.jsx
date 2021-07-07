import { Game } from './components';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    game: {
      backgroundColor: "#282c34",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.game} >
        <Game />
    </Box>
  );
}

export default App;