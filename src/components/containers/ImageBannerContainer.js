import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/img/logo.png';
import BackgroundImage from '../../assets/img/hero_test.jpg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
    Paper: {
        padding: 0, 
        marginTop: 0, 
        marginBottom: 20 
    },
    Header: {
        textAlign: "center",
        padding: "100px 100px 0px 100px",
        fontSize: "8vw"
    },
    image: {
        backgroundImage:`url(${BackgroundImage})`
    },
    buttonRoot: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontSize: "1.5vw"
    },
    buttonLabel: {
        textTransform: 'capitalize',
    }
}
  
const ImageBannerContainer = (props) => {
    const { classes} = props;
    return (
        <Grid container spacing={0}>
            <Grid item xs>
                <Paper style={styles.Paper}>
                    <section className="image-container overlay" style={styles.image}>
                    <Grid item xs style={styles.Header}>
                        <div className="marker-text">
                            <p>Compassionate Partners KC</p>
                        </div>
                        <Link to="why_we_do">
                            <Button variant="contained" aria-label="Our Story"
                                classes={{
                                    root: classes.buttonRoot,
                                    label: classes.buttonLabel
                                }}
                            >
                                Our Story
                            </Button>
                        </Link>
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