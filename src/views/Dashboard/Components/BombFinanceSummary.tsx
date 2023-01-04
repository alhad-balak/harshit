import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    gridItem: {
        height: '100%',
        [theme.breakpoints.up('md')]: {
            height: '90px',
        },
    },
}));

const useStylesTable = makeStyles({
    table: {
        minWidth: 550
    },
});

function createData(name: string, CurrentSupply: string, TotalSupply: string, Price: string, icon: string) {
    return { name, CurrentSupply, TotalSupply, Price, icon };
}

const rows = [
    createData('$BOMB', "8.66M", "60.9K", "$0.24 105 BTCB", "Icon"),
    createData('$BSHARE', "11.34K", "8.49M", "$300 13000 BTCB", "Icon"),
    createData('$BBOND', "20.00K", "175K", "$0.28 1.15 BTCB", "Icon")
];

function SupplyTable() {
    const classes = useStylesTable();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Current Supply</TableCell>
                        <TableCell align="center">Total Supply</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.CurrentSupply}</TableCell>
                            <TableCell align="center">{row.TotalSupply}</TableCell>
                            <TableCell align="center">{row.Price}</TableCell>
                            <TableCell align="center">{row.icon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function BombFinanceSummary() {
    const classes = useStyles();

    return (
        <>
            <Box>
                <Card className={classes.gridItem} style={{ height: 'auto' }}>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography style={{ textTransform: 'uppercase', color: '#fff' }} variant='h5'>Bomb Finance Summary</Typography>
                        <hr />
                        <Grid container spacing={3} justifyContent="space-between" style={{ padding: "54px" }}>
                            <Grid item className={classes.gridItem}>
                                <SupplyTable />
                            </Grid>
                            <Grid item>

                                <Typography style={{ textTransform: 'uppercase', color: '#fff' }} variant='subtitle1'>Current Epoch</Typography>

                                <Typography style={{ textTransform: 'uppercase', color: '#fff', fontSize: '45' }} >258</Typography>

                                <hr />

                                <Typography style={{ textTransform: 'uppercase', color: '#fff', fontSize: '45' }} >03:38:36</Typography>
                                <Typography style={{ textTransform: 'uppercase', color: '#fff' }} variant='subtitle1'>Next Epoch in</Typography>

                                <hr />

                                <Typography style={{ textTransform: 'uppercase', color: '#fff' }} variant='subtitle1'>Live TWAP: 1.17</Typography>
                                <Typography style={{ textTransform: 'uppercase', color: '#fff', fontSize: '45' }} >RVL: $5,002,412</Typography>
                                <Typography style={{ textTransform: 'uppercase', color: '#fff' }} variant='subtitle1'>Last Epoch TWAP: 1.22</Typography>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Box>
        </>
    )
};