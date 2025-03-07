import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup";
import cx from 'classnames';
import styles from './Cards.module.css'

const Cards = ({ data }) => {
  // ✅ Ensure data exists before destructuring
  if (!data || Object.keys(data).length === 0) {
    return <p>Loading...</p>;
  }

  const { active, recovered, deaths, lastUpdated } = data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={active} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdated}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdated}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={1.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{lastUpdated}</Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};


export default Cards;