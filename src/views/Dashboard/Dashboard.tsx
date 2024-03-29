import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import { Grid } from '@material-ui/core';
import BombFinanceSummary from './Components/BombFinanceSummary';
import Bonds from './Components/Bonds';
import LatestNews from './Components/LatestNews';
import Boardroom from './Components/Boardroom';
import BombFarms from './Components/BombFarms';


const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
    color: #fff;
  }
`;

export default function Dashboard() {
  return (
    <Switch>
      <Page>
        <BackgroundImage />
        <Grid container spacing={3} alignItems="center" style={{ width: "100%" }}>
          <Grid item spacing={3} style={{ width: "100%" }}>
            <BombFinanceSummary />
          </Grid>
          <Grid item spacing={3} style={{ width: "100%" }}>
            <Grid container spacing={3} alignItems="center" style={{ width: "100%" }}>
              <Grid item spacing={3} style={{ width: "65%" }}>
                <Boardroom />
              </Grid>
              <Grid item spacing={3} style={{ width: "35%" }}>
                <LatestNews />
              </Grid>
            </Grid>
          </Grid>
          <Grid item spacing={3} style={{ width: "100%" }}>
            <BombFarms />
          </Grid>
          <Grid item spacing={3} style={{ width: "100%" }}>
            <Bonds />
          </Grid>
        </Grid>
      </Page>
    </Switch>
  );
};