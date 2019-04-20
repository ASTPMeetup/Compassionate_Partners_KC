import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ImageBannerContainer from './components/containers/ImageBannerContainer';
import TextCenterContainer from './components/containers/TextCenterContainer';
import SimpleValuesList from './helpers/SimpleValuesList';
import BackgroundImage from './assets/img/who_we_are.png';

import Volunteers from './assets/img/volunteers.JPG';
import BrushPink from './assets/img/brush_pink.png';

const styles = {
    Grid: {marginTop: 5, marginBottom: 20},
    Paper: {padding: 25, marginTop: 20, marginBottom: 20},
    Brush: {backgroundImage:`url(${BrushPink})`},
    Background: {backgroundImage: `url(${BackgroundImage})`}
}

class WhoWeArePage extends Component {
  render() {
    return (
      <div className="who-page-container">
        <ImageBannerContainer BackgroundImage={styles.Background} Header="Who We Are"/>
        <div class="page-wrapper" id="home-page-wrapper">
          <TextCenterContainer text="Compassionate Partners K.C., (CPKC) is a 501(c) 3 tax-exempted charitable non-profit organization based in Wyandotte County, Kansas. CPKC incorporated in August of 2016 and received tax-exempted status in March of 2018."/>
          <Paper style={styles.Paper}>
            <Grid container>
                <Grid item md xs={12}>
                    <div class="image-wrapper">
                        <img src={Volunteers} alt="volunteers"/>
                    </div>
                </Grid>
                <Grid item md xs={12}>
                    <div class="brush brush-text" style={styles.Brush}>
                        <Typography component="h2" variant="display3">
                            Who We Are
                        </Typography>
                    </div>
                    <br/>
                    <br/>
                    <Typography component="h2" variant="display1" gutterBottom>Our Mission</Typography>
                    <p>Creating partnerships with organizations to help build resilience in children and youth experiencing adversity and trauma.</p>
                    <Typography component="h2" variant="display1" gutterBottom>Our Vision</Typography>
                    <p>We envision communities where there is an abundance of sustainable organizations available to provide social and mental health services to children and youth affected by family trauma and personal crises. </p>
                    <Typography component="h2" variant="display1" gutterBottom>Our Values</Typography>
                    <p>Service, Excellence, Relevance, Vision, Integrity, Compassion &amp; Empower</p>
                </Grid>
            </Grid>
          </Paper>
          <div class="text-center">
            <br/>
            <div class="brush brush-text" style={styles.Brush}>
                <Typography component="h2" variant="display3">
                  Core Values
                </Typography>
            </div>
          </div>
          <Paper style={styles.Paper}>
            <Grid container>
              <SimpleValuesList/>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}
export default WhoWeArePage;
