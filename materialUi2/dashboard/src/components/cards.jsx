import { Card, CardContent, Typography } from "@material-ui/core";


function CardSummary({title,value,footer})
{


    return (
        <>
        <Card>
            <CardContent>
                <Typography variant="h6">{title} </Typography>
                <Typography variant="h6">{value} </Typography>
                <div>{footer}</div>
            </CardContent>
        </Card>
        </>
    )
}

export {CardSummary}