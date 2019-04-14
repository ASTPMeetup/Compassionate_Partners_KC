import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MultiGridContainer from './components/containers/MultiGridContainer';
import TextCenterContainer from './components/containers/TextCenterContainer';
import ImageBannerContainer from './components/containers/ImageBannerContainer';
import VideoContainer from './components/containers/VideoContainer';
import FeatureCard from './helpers/FeatureCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Logo from './assets/img/logo.png';
import Vision from './assets/img/vision.png';
import Mission from './assets/img/mission.png';
import Values from './assets/img/values.png';
import Awards from './assets/img/awards.jpg';
import CelebrationBox from './assets/img/celebration_box.png';
import Divider from '@material-ui/core/Divider';
import 'typeface-roboto';
import './App.scss';
import Footer from './components/Footer';

import { getStats } from './helpers/api';

const styles = {
  Grid: { marginTop: 5, marginBottom: 20 },
  Paper: { padding: 25, marginTop: 20, marginBottom: 20 }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    };
  }
  componentDidMount() {
    const stats = getStats();
    console.log(stats);
    stats.then(data => {
      console.log(data);
      this.setState(() => ({
        project: data
      }));
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ImageBannerContainer />
        <div class="page-wrapper" id="home-page-wrapper">
          <TextCenterContainer text="We build resilience in children and youth experiencing adversity and trauma." />
          <VideoContainer />
          <div class="text-center">
            <Typography component="h2" variant="display4" gutterBottom>
              Since 2019..
            </Typography>
          </div>
          <Grid container spacing={40} style={styles.Grid}>
            <Grid item xs>
              <FeatureCard
                title="Celebration Boxes"
                image={CelebrationBox}
                content="We've donated over 500 Celebration Boxes to children and youth in domestic violence shelters and transitional housing programs."
              />
            </Grid>
            <Grid item xs>
              <FeatureCard
                title="Birthday Cupcakes"
                image={Mission}
                content="We've given over 740 cupcakes to needy children in the Kansas City community"
              />
            </Grid>
            <Grid item xs>
              <FeatureCard
                title="Comfort &amp; Joy Packs"
                image={Values}
                content="Last Christmas, we create Comfort &amp; Joy packs with 31 children at Joyce Williams Domestic Violence Shelter."
              />
            </Grid>
          </Grid>
          <Paper style={styles.Paper}>
            <Grid container>
              <Grid item xs>
                <div class="image-wrapper">
                  <img src={Awards} />
                </div>
              </Grid>
              <Grid item xs>
                <Typography component="h2" variant="display1" gutterBottom>
                  Recognition and Acknowledgement for Compassionate Partners KC's Community Services
                </Typography>
                <div class="hr-wrapper">
                  <Divider />
                </div>
                <Typography component="h2" variant="display1" gutterBottom>
                  2017
                </Typography>
                <p>Rosalyn Brown & Betty Taliaferro Service Award</p>
                <Typography component="h2" variant="display1" gutterBottom>
                  2018
                </Typography>
                <p>Mary Ann Flunder/Castina Cooper Distinguished Service Award</p>
                <Typography component="h2" variant="display1" gutterBottom>
                  2019
                </Typography>
                <p>Friends Of Yates 2019 Black Man of Distinction</p>
                <p>Friends Of Yates 2019 Black Woman of Distinction</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
