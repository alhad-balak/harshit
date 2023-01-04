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

export default function Bonds() {
    const classes = useStyles();

    return (
        <>
            <Box>
                <Card className={classes.gridItem} style={{ height: 'auto' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography style={{ textTransform: 'uppercase', color: '#fff', textAlign: 'left' }} variant='h5'>Bonds</Typography>
                        <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</Typography>
                        <br />
                        <Box>
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>

                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Current Price: (Bomb)^2</Typography>
                                    <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'left' }} variant='body1'>BBond = 6.2872 BTCB</Typography>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Availble to redeem</Typography>
                                    <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} variant='body1'>456</Typography>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Grid container direction='column' justifyContent="space-between" spacing={2} style={{ textAlign: 'left', minWidth:"25vw" }}>
                                        <Grid item>
                                            <Grid container justifyContent="space-between" spacing={3} style={{ textAlign: 'left' }}>
                                                <Grid item>
                                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Purchase BBond</Typography>
                                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='body1'>Bomb is over peg</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button style={{ border: "2px solid white" }}>Purchased</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Grid container justifyContent="space-between" spacing={3} style={{ textAlign: 'left'}}>
                                                <Grid item>
                                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Purchase BBond</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button style={{ border: "2px solid white", borderRadius: "30%" }}>Redeem</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Box>

                    </CardContent>
                </Card>
            </Box>
        </>
    )
}