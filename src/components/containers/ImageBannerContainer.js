import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
        textAlign: "center"
    },
    HeaderText: {
        padding: "100px 100px 25px 100px",
        fontSize: "7.5vw",
        textShadow: "2px 2px black"
    },
    LargeHeaderText: {
        padding: "150px 100px 25px 100px",
        fontSize: "10vw",
        textShadow: "2px 2px black"
    },
    buttonRoot: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontSize: "16px"
    },
    buttonLabel: {
        textTransform: 'capitalize',
    }
}
  
const ImageBannerContainer = ({BackgroundImage, Header, displayOurStoryButton, classes}) => {
    return (
        <div className="banner-container">
            <Grid container spacing={0}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <section className="image-container overlay" style={BackgroundImage}>
                        <Grid item xs style={styles.Header}>
                            {Header ? 
                                <div className="marker-text" style={displayOurStoryButton ? styles.HeaderText : styles.LargeHeaderText}>
                                {Header}
                                </div>
                                : ''
                            }
                            { displayOurStoryButton ?
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
                                : ''
                            }
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        </section>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
  
export default withStyles(styles)(ImageBannerContainer);