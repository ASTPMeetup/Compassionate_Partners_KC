import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ImageBannerContainer from './components/containers/ImageBannerContainer';
import TextCenterContainer from './components/containers/TextCenterContainer';
import TextListContainer from './components/containers/TextListContainer';
import VideoContainer from './components/containers/VideoContainer';

import Background from './assets/img/single_cupcake.jpg';
import BrushBlue from './assets/img/brush_blue.png';
import TeddyBear from './assets/img/teddy.jpg';

const stats = [
  '5 million children witness domestic violence each year in the US',
  '40 million adult Americans grew up living with domestic violence',
  'Children from homes with violence are much more likely to experience significant psychological problems short- and long-term',
  'Children who’ve experienced domestic violence often meet the diagnostic criteria for Post Traumatic Stress Disorder (PTSD) and the effects on their brain are similarly to those experienced by combat veterans',
  'Domestic violence in childhood is directly correlated with difficulties learning, lower IQ scores, deficiencies in visual-motor skills and problems with attention and memory.',
  'Living with domestic violence significantly alters a child’s DNA, aging them prematurely 7-10 years',
  'Children in homes with violence are physically abused or seriously neglected at a rate 1500% higher than the national average',
  'Those who grow up with domestic violence are 6 times more likely to commit suicide and 50% more likely to abuse drugs and alcohol',
  'If you grow up with domestic violence, you’re 74% more likely to commit a violent crime against someone else',
  'Children of domestic violence are 3 times more likely to repeat the cycle in adulthood, as growing up with domestic violence is the most significant predictor of whether or not someone will be engaged in domestic violence later in life.'
];

const styles = {
  Grid: { marginTop: 5, marginBottom: 20 },
  Paper: { padding: 25, marginTop: 20, marginBottom: 20, textAlign: 'center' },
  Brush: { backgroundImage: `url(${BrushBlue})` },
  Reference: { fontSize: '12px', padding: '1vw' },
  Background: { backgroundImage: `url(${Background})` }
};

class WhyWeDoPage extends Component {
  render() {
    return (
      <div className="who-page-container">
        <ImageBannerContainer BackgroundImage={styles.Background} Header="Our Mission" />
        <div className="page-wrapper" id="home-page-wrapper">
          <TextCenterContainer text="The focus of CPKC’s attention is directed towards the silent victims of domestic violence and homelessness, the children." />
          <Paper style={styles.Paper}>
            <Grid container>
              <Grid item xs>
                <div className="brush brush-text" style={styles.Brush}>
                  <Typography component="h2" variant="display3">
                    Our Story
                  </Typography>
                </div>
                <br />
                <br />
                <p>
                  The focus of CPKC’s attention is directed towards the silent victims of domestic
                  violence and homelessness, the children.
                </p>
                <p>
                  Children experiencing childhood trauma(the words childhood trauma) need to provide
                  a link to link below) is high in Wyandotte County. According to the 2016 Community
                  Health Needs Assessment conducted by Children’s Mercy Hospital, when compared to
                  Clay County, Jackson County and Johnson County, Wyandotte County had the highest
                  number of children who experienced at least one Adverse Childhood Experience.
                  48.5% of children surveyed.
                </p>
              </Grid>
            </Grid>
          </Paper>
          <VideoContainer
            text='"Childhood trauma isn’t something you just get over as you grow up"'
            link="https://embed.ted.com/talks/nadine_burke_harris_how_childhood_trauma_affects_health_across_a_lifetime"
          />
          <Paper style={styles.Paper}>
            <Grid container>
              <Grid item md xs={12}>
                <div className="image-wrapper">
                  <img src={TeddyBear} alt="domestic violence" />
                </div>
              </Grid>
              <Grid item md xs={12}>
                <TextListContainer title="Domestic Violence Statistics" list={stats} />
                <p style={styles.Reference}>
                  <i>
                    {' '}
                    Reference: Capstone Presentation for the Grambling State University Symposium.
                    Presented by Vonthisha Wiley, Thomika Andrews, Yolanda Adams, Caterra Brooms,
                    and Tiffany Tolliver.
                  </i>
                </p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}
export default WhyWeDoPage;
