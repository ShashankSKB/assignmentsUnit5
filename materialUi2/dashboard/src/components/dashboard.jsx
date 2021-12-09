import { Grid, Typography } from "@material-ui/core"
import { CardSummary } from "./cards"
import { CardBar } from "./carbar"
function Dashboard()
{


    return (
        <div>
           <Grid container spacing={2}>
               <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
                    <CardSummary title="PROBLEMS SOLVED" value="5" footer={<div>24%increase from yesterday</div>}></CardSummary>
               </Grid>

               <Grid item xl={3} lg={3} md={4} sm={6} xs={12} >
               <CardSummary title="PROBLEMS SOLVED" value="5" footer={<div>24%increase from yesterday</div>}></CardSummary>
     
               </Grid>

               <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
               <CardSummary title="PROBLEMS SOLVED" value="5" footer={<div>24%increase from yesterday</div>}></CardSummary>
     
               </Grid>
               
               <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
               <CardSummary title="PROBLEMS SOLVED" value="5" footer={<div>24%increase from yesterday</div>}></CardSummary>
     
               </Grid>

               <Grid item  xl={3} lg={9} md={4} sm={6} xs={12}>
               <CardBar></CardBar>
               </Grid>
           </Grid>
        </div>
    )
}

export {Dashboard}