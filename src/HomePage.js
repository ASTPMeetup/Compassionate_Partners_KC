import React, { Component } from 'react';
import TextCenterContainer from './components/containers/TextCenterContainer';
import ImageBannerContainer from './components/containers/ImageBannerContainer';
import VideoContainer from './components/containers/VideoContainer';
import FeatureCard  from './helpers/FeatureCard';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Cupcake from './assets/img/single_cupcake.jpg';
import SummerReading from './assets/img/summer_reading.png';
import Awards from './assets/img/awards.jpg';
import CelebrationBox from './assets/img/celebration_box.png';
import BrushBlue from './assets/img/brush_blue.png';
import BackgroundImage from './assets/img/hero.jpg';
import YatesLogo from './assets/img/Friends_of_Yates_Logo.png';

import { getStats } from './helpers/api';

import './App.scss';

const styles = {
  Grid: {marginTop: 5, marginBottom: 20},
  Paper: {padding: 25, marginTop: 20, marginBottom: 20},
  Brush: {backgroundImage:`url(${BrushBlue})`},
  Background: {backgroundImage: `url(${BackgroundImage})`},
  YatesLogo: {maxHeight: "30px"},
  YatesText: {position: "relative", top: "-20px", left: "10px"}
}

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    const stats = getStats();
    stats.then(data => {
      this.setState(() => ({
        project: data
      }));
    });
  }

  render() {
    return (
      <div className="home-page-container">
        <ImageBannerContainer BackgroundImage={styles.Background} Header="Compassionate Partners KC" displayOurStoryButton={true}/>
        <div className="page-wrapper" id="home-page-wrapper">
          <TextCenterContainer text="We strive to inspire hope into the hearts of our most valuable resource, our children."/>
          <VideoContainer link="https://www.youtube.com/embed/NlDi1enLzbw" text="&quot;..Every message in here that you are loved and you're valued. It doesn't cost [much]&quot;"/>
          <div className="text-center">
            <br/>
            <div className="brush brush-text" style={styles.Brush}>
                <Typography component="h2" variant="display3">
                How We Serve
                </Typography>
            </div>
          </div>
          <Grid container spacing={40} style={styles.Grid}>
            <Grid item xs>
              <FeatureCard title="Celebration Boxes" image={CelebrationBox} content="We've shared the Celebration Box with over 500 children in domestic violence shelters and transitional housing programs to celebrate birthdays, holidays and special occasions."/>
            </Grid>
            <Grid item xs>
              <FeatureCard title="Summer Reading Program" image={SummerReading} content="We've given over 250 books to children in hopes of preventing summer learning loss, improving reading proficiency and entertainment through the magic that only reading provides."/>
            </Grid>
            <Grid item xs>
              <FeatureCard title="Celebration Cupcakes" image={Cupcake} content="We've provided over 740 cupcakes and cookies for celebrations that allow youth to rise above their difficult circumstances to enjoy being a kid for a day."/>
            </Grid>
          </Grid>
          <Paper style={styles.Paper}>
            <Grid container>
              <Grid item md xs={12}>
                <div className="image-wrapper">
                  <img src={Awards} alt="compassionate partners kc awards"/>
                </div>
              </Grid>
              <Grid item md xs={12}>
                <div className="brush brush-text" style={styles.Brush}>
                <Typography gutterBottom variant="h5" component="h2">Recognition &amp; Acknowledgement for Compassionate Partners KC's Community Services</Typography>
                </div>
                <br/>
                <br/>
                <Typography component="h1" variant="display1" gutterBottom>2017</Typography>
                <p>Rosalyn Brown &amp; Betty Taliaferro Service Award</p>
                <p>Letter Of Appreciation From Hillcrest Transitional Housing</p>
                <Typography component="h1" variant="display1" gutterBottom>2018</Typography>
                <p>Mary Ann Flunder/Castina Cooper Distinguished Service Award</p>
                <Typography component="h1" variant="display1" gutterBottom>2019</Typography>
                <p>
                  <span><img src={YatesLogo} style={styles.YatesLogo} className="yates-logo" alt="friends of yates logo"/></span>
                  <span style={styles.YatesText}>Friends of Yates 2019 Black Man of Distinction</span>
                </p>
                <p>
                  <span><img src={YatesLogo} style={styles.YatesLogo} className="yates-logo" alt="friends of yates logo"/></span>
                  <span style={styles.YatesText}>Friends of Yates 2019 Black Woman of Distinction</span>
                </p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default HomePage;
