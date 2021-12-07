import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/action';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
const axios = require('axios');
const { useEffect } = require('react');


function Dashboard()
{
     const dispatch = useDispatch()
    const userData= useSelector(store=>store)
    console.log("userData",userData)
    useEffect(()=>{

        fetchData();

    },[])

    const fetchData =async ()=>{
       await axios.get('http://localhost:3004/users')
  .then(function (response) {
    // handle success
    console.log(response.data);
    dispatch(getData(response.data))
  

    

  })
    }

    return (
        <Grid container spacing={2}>

        <Grid item xs={3}>  
         <Card sx={{ minWidth: 275 ,margin:2 ,display:"flex" ,justifyContent:"left"}}>
         <CardContent>
         <Typography sx={{ fontSize: 14,textAlign:"left",justifyContent:"left" }} color="text.secondary" gutterBottom>
          PROBLEMS COMPLETED TODAY
        </Typography>

        <Typography variant="h2" component="div"sx={{ textAlign:"left" }} >
          6
        </Typography>

        
        <Box
          sx={{
            color: '#e91e63',
            display: 'inline',
            fontWeight: 'medium',
            mx: 0.5,
            textAlign:"left",
          }}
        >
          24%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 16 }}>
          Increase from yesterday
        </Box>
         </CardContent>
         </Card>
         </Grid>  

         <Grid item xs={3}>  
         <Card sx={{ minWidth: 275 ,margin:2}}>
         <CardContent>
         <Typography sx={{ fontSize: 14 ,textAlign:"left"}} color="text.secondary" gutterBottom>
         TOTAL ASSIGNMENT COMPLETED
        </Typography>

        <Typography variant="h2" component="div" sx={{ textAlign:"left" }} >
        70%
        </Typography>

        
        <Typography sx={{ fontSize: 14 ,textAlign:"left"}}component="div">
          10% Decrease from last week
        </Typography>
         </CardContent>
         </Card>
         </Grid> 

         <Grid item xs={3}>  
         <Card sx={{ minWidth: 275 ,margin:2}}>
         <CardContent>
         <Typography sx={{ fontSize: 14 ,textAlign:"left"}} color="text.secondary" gutterBottom>
         ATTENDENCE
        </Typography>

        <Typography variant="h2" component="div" sx={{ textAlign:"left" }}>
          78%
        </Typography>

        
        <Typography sx={{ fontSize: 14, textAlign:"left"}}component="div">
        5% decrease from last week
        </Typography>
         </CardContent>
         </Card>
         </Grid> 


         <Grid item xs={3}>  
         <Card sx={{ minWidth: 275 ,margin:2}}>
         <CardContent>
         <Typography sx={{ fontSize: 14,textAlign:"left" }} color="text.secondary" gutterBottom>
         TOTAL POINTS
        </Typography>

        <Typography variant="h2" component="div" sx={{ textAlign:"left" }}>
          790
        </Typography>

        
        <Typography sx={{ fontSize: 14 ,textAlign:"left"}}component="div">
        20% increase from last week
        </Typography>
         </CardContent>
         </Card>

         </Grid>    
         </Grid>
    )
}

export {Dashboard}