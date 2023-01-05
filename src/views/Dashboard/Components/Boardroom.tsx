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
                        <Box>
                            <Grid container justifyContent="space-between" alignItems="center" spacing={3} style={{ textAlign: 'left' }}>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='h5'>BOARDROOM  <Button style={{ backgroundColor: "#407d7d", fontSize: 10, color: '#fff', textAlign: 'left', height: "15px" }} disabled>Recommended</Button></Typography>
                                    <Typography style={{ fontSize: 12, color: '#fff', textAlign: 'left' }} variant='subtitle1'>Stake BSHARE and earnBOMB every epoch</Typography>
                                </Grid>
                                <Grid item className={classes.gridItem}>
                                    <Typography style={{ fontSize: 15, color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='subtitle2'>TVL: $1,008, 430</Typography>
                                    <Typography style={{ fontSize: 15, color: '#fff', textAlign: 'left', margin: "auto 0px" }} variant='subtitle2'>Total Stake: 7232</Typography>
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