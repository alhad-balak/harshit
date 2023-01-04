import React from 'react';
import { createGlobalStyle } from 'styled-components';
import HomeImage from '../../assets/img/background.jpg';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import { Grid } from '@material-ui/core';


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
                <Grid>
                    
                </Grid>

            </Page>
        </Switch>
    );
};