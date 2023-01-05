import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        height: '100%',
        // [theme.breakpoints.up('md')]: {
        //     height: '90px',
        // },
    },
}));

export default function Boardroom() {
    const classes = useStyles();
    return (
        <>
            <Box style={{ margin: "15px 3px", textAlign: "right" }}>
                <Link href="./read" underline="always" style={{ color: '#fff', textAlign: 'right', fontSize: 15 }}>Read Investment Strategy</Link>
            </Box>
            <Box style={{ textAlign: 'center', margin: "10px 0px" }}>
                <Button style={{ textAlign: 'center', fontSize: 20, backgroundColor: "#407d7d", width: "100%" }}>Invest Now</Button>
            </Box>
            <Box style={{ margin: "5px 0px", textAlign: "center", width: "100%", color: "black" }}>
                <Grid container spacing={2} style={{ width: "100%", margin: "0px" }}>
                    <Grid item style={{ width: "50%", padding: "auto 0px" }}>
                        <Button style={{ textAlign: 'center', fontSize: 20, backgroundColor: "#d5e0e073", color: "black", width: "100%", padding: "auto 0px" }}>Chat on Discord</Button>
                    </Grid>
                    <Grid item style={{ width: "50%", padding: "auto 0px" }}>
                        <Button style={{ textAlign: 'center', fontSize: 20, backgroundColor: "#d5e0e073", color: "black", width: "100%", padding: "auto 0px" }}>Read Docs</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Card className={classes.gridItem} style={{ minHeight: '200px' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}