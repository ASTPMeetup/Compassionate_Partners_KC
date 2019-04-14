import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BackgroundImage from '../../assets/img/hero_test.jpg';
import Logo from '../../assets/img/logo.png';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    Paper: {
        padding: 0, 
        marginTop: 0, 
        marginBottom: 20 
    },
    Header: {
        textAlign: "center",
        padding: "125px"
    },
    image: {
        width: "100%",
        height: "575px",
        marginTop: "-24px",
        backgroundImage: `url(${BackgroundImage})`
    },
    buttonRoot: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    buttonLabel: {
        textTransform: 'capitalize',
    }
}
  
const ImageBannerContainer = (props) => {
      const { classes } = props;
        return (
            <Grid container spacing={0}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <section className="image-container overlay" style={styles.image}>
                        <Grid item xs style={styles.Header}>
                            <div class="logo-container">
                                <img src={Logo} class="logo"/>
                            </div>
                            <Button variant="contained" aria-label="Our Story"
                                classes={{
                                    root: classes.buttonRoot,
                                    label: classes.buttonLabel
                                }}
                            >
                                Our Story
                            </Button>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        </section>
                    </Paper>
                </Grid>
            </Grid>
        );
    
  }
  
  export default withStyles(styles)(ImageBannerContainer);