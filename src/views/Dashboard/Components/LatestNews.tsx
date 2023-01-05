import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        height: '100%',
        // [theme.breakpoints.up('md')]: {
        //     height: '90px',
        // },
    },
}));

export default function LatestNews() {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Card className={classes.gridItem} style={{ minHeight: '378px' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography style={{ color: '#fff', textAlign: 'left', fontSize: 15 }} variant='h5'>Latest News</Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}