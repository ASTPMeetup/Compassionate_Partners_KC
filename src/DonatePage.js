import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DonatePageBanner from './components/image_banners/DonatePageBanner';
import TextCenterContainer from './components/containers/TextCenterContainer';
import PayPal from './components/PayPal';

import Volunteers from './assets/img/volunteers.JPG';
import BrushBlue from './assets/img/brush_blue.png';

const styles = {
    Paper: {padding: 25, marginTop: 20, marginBottom: 20, textAlign: "center"},
    Brush: {backgroundImage:`url(${BrushBlue})`}
}

class DonatePage extends Component {
  render() {
    return (
      <div className="who-page-container">
        <DonatePageBanner/>
        <div class="page-wrapper" id="home-page-wrapper">
             <Grid container spacing={24}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <div class="brush brush-text" style={styles.Brush}>
                            <Typography component="h2" variant="display2">
                                You Can Help
                            </Typography>
                        </div>
                        <br/>
                        <p>Compassionate Partners K.C. is a registered 501- C3 Non Profit Organization. We are completely transparent. 100% of your donations go directly to finance our Compassionate Projects. All donations are 100% tax deductible.</p>
                        <p>We are a volunteer based organization; there are no paid staff, or salaries.</p>
                        <p>Your donation in any amount will help us mend broken spirits and provides an opportunity for children to just be children for one day.</p>
                        <br/>
                        <PayPal/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
      </div>
    );
  }
}
export default DonatePage;