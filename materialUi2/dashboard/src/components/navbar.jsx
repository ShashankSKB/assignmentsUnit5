import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import { typography } from '@mui/system';
import { Divider } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material/styles';
const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


function Navbar()
{const theme = useTheme();
  const [open,setOpen]=useState(false)
  const handleBar=()=>{
    setOpen(!open)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      
      display:"flex"
     
      
    },
    menuButton:{
      marginRight:theme.spacing(3)
    },
    title:{
      flex:1,
      justifyContent:"left"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerHeader: {
      display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
    },
    contentHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  }));

      const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}>
        <Toolbar>
        <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            edge="start"
            onClick={() => setOpen(!open)}
          > 
          <MenuIcon />
           
          </IconButton>

          <Typography  variant="h6" className={classes.title} color="inherit" component="div" >
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

        <Drawer className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }} >

      <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
          
          <div className={classes.drawerHeader}>
          <Avatar >MS</Avatar>
           <typography variant="h1">Masai school</typography>
           <typography variant="subtitle1">Batch Name</typography>
         
          </div>

          <Divider/>
          <List>
            {[
              {
                text:"Dashboard",
                to:"/",
                 avatar:<DashboardIcon/> 
              },
              {
                text:"Orders",
                avatar:<StarBorderIcon/>
              }
            ].map((e)=>(
              <ListItem  button key={e.text}>
                 <ListItemIcon> {e.avatar} </ListItemIcon>
              <ListItemText primary={e.text} />
              </ListItem>
            ))}
          </List>
           
      
        </Drawer>
        

        </div>

      

    )
}

export {Navbar}