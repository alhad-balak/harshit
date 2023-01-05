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

export default function BombFarms() {
    const classes = useStyles();
    return (
        <>
            <Box>
                <Card className={classes.gridItem} style={{ minHeight: '200px' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                            <Grid item className={classes.gridItem}>
                                <Typography style={{ textTransform: 'uppercase', color: '#fff', textAlign: 'left' }} variant='h5'>Bonmb Farms</Typography>
                                <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Stake your LP tokens in our farms to start earning $BSHARE</Typography>
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <Button style={{ border: "2px solid white" }}> Claim All</Button>
                            </Grid>
                        </Grid>
                        <br />

                        <Box>
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='h5'>BOMB-BTCB  <Button style={{ backgroundColor: "#407d7d", fontSize: 10, color: '#fff', textAlign: 'left', height: "15px" }} disabled>Recommended</Button></Typography>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ fontSize: 15, color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='subtitle2'>TVL: $1,008, 430</Typography>
                                </Grid>
                            </Grid>
                            <hr />
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                                <Grid item className={classes.gridItem}>
                                    <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Daily Returns:</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'left' }} variant='body1'>2%</Typography>
                                        </Grid>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Your Stake</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} variant='body1'>124.21 ~ $1171.62</Typography>
                                        </Grid>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Earned:</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} variant='body1'>6.4413 ~ $298.88</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Button style={{ border: "2px solid white", margin: "auto 8px" }}> Deosit</Button>
                                    <Button style={{ border: "2px solid white", margin: "auto 8px" }}> Withdraw</Button>
                                    <Button style={{ border: "2px solid white", margin: "auto 0px auto 8px" }}> Claim Rewards</Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='h5'>BOMB-BTCB  <Button style={{ backgroundColor: "#407d7d", fontSize: 10, color: '#fff', textAlign: 'left', height: "15px" }} disabled>Recommended</Button></Typography>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ fontSize: 15, color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='subtitle2'>TVL: $1,008, 430</Typography>
                                </Grid>
                            </Grid>
                            <hr />
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                                <Grid item className={classes.gridItem}>
                                    <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Daily Returns:</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'left' }} variant='body1'>2%</Typography>
                                        </Grid>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Your Stake</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} variant='body1'>124.21 ~ $1171.62</Typography>
                                        </Grid>

                                        <Grid item className={classes.gridItem}>
                                            <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Earned:</Typography>
                                            <Typography style={{ fontSize: 20, color: '#fff', textAlign: 'center' }} variant='body1'>6.4413 ~ $298.88</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Button style={{ border: "2px solid white", margin: "auto 8px" }}> Deosit</Button>
                                    <Button style={{ border: "2px solid white", margin: "auto 8px" }}> Withdraw</Button>
                                    <Button style={{ border: "2px solid white", margin: "auto 0px auto 8px" }}> Claim Rewards</Button>
                                </Grid>
                            </Grid>

                        </Box>


                    </CardContent>
                </Card>
            </Box>
        </>
    )
}