import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';
import { makeStyles } from '@mui/styles';
function Navbar()
{

    const useStyles = makeStyles({
        root: {
          marginRight:"20px"
        },
      });  

      const classes = useStyles();

    return (
        <>
        <AppBar>
        <Toolbar>
        <IconButton className={classes.root}edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
           
          </IconButton>

          <Typography variant="h6" color="inherit" component="div" >
            Masai school 
          </Typography>
          

          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <GitHubIcon />
            <Typography variant="h6" color="inherit" component="div">
            GitHub
          </Typography>
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MessageIcon />
            <Typography variant="h6" color="inherit" component="div">
            Slack
          </Typography>
          </IconButton>

        </Toolbar>
        </AppBar>

        </>
    )
}

export {Navbar}