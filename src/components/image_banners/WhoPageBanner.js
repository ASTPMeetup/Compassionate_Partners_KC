import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import BackgroundImage from '../../assets/img/awards.jpg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Paper: {
        padding: 0, 
        marginTop: 0, 
        marginBottom: 20 
    },
    image: {
        width: "100%",
        height: "575px",
        marginTop: "-24px",
        backgroundImage: `url(${BackgroundImage})`
    }
}
  
const WhoPageBanner = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={0}>
            <Grid item xs>
                <Paper style={styles.Paper}>
                    <section className="image-container overlay" style={styles.image}>
                    </section>
                </Paper>
            </Grid>
        </Grid>
    );
  }
  
  export default withStyles(styles)(WhoPageBanner);