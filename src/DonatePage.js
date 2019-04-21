import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ImageBannerContainer from './components/containers/ImageBannerContainer';
import PayPal from './components/PayPal';

import BrushBlue from './assets/img/brush_blue.png';
import Background from './assets/img/ballons.jpg';
import Parser from './helpers/Parser';
import WParse from './helpers/WParse';

const styles = {
  Paper: { padding: 25, marginTop: 20, marginBottom: 20, textAlign: 'center' },
  Brush: { backgroundImage: `url(${BrushBlue})` },
  Background: { backgroundImage: `url(${Background})` }
};

const DonatePage = () => (
  <div className="who-page-container">
    <ImageBannerContainer BackgroundImage={styles.Background} Header="Help Our Cause" />
    <div className="page-wrapper" id="home-page-wrapper">
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper style={styles.Paper}>
            <div className="brush brush-text" style={styles.Brush}>
              <Typography component="h2" variant="display2">
                You Can Help
              </Typography>
            </div>
            <br />
            <p>
              Compassionate Partners K.C. is a registered 501- C3 Non Profit Organization. We are
              completely transparent. 100% of your donations go directly to finance our
              Compassionate Projects. All donations are 100% tax deductible.
            </p>
            <p>We are a volunteer based organization; there are no paid staff, or salaries.</p>
            <p>
              Your donation in any amount will help us mend broken spirits and provides an
              opportunity for children to just be children for one day.
            </p>
            <br />
            <PayPal />

            <WParse
              rawText={`\n<p>This is a complicated page with a <a href=\"http://www.google.com\">link</a> in the middle.</p>\n\n\n\n<figure class=\"wp-block-image\"><img src=\"https://via.placeholder.com/300\" alt=\"\"/></figure>\n\n\n\n<p>And now a bunch of text after the picture.  And some more text.  Bit more.</p>\n\n\n\n<ul><li>What do you think?</li><li>About this list</li><li>That I just made</li></ul>\n\n\n\n<p>And now some more text.  That should do it.</p>\n`}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default DonatePage;
