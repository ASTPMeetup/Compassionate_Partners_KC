import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {
      padding: 25,
      marginTop: 20,
      marginBottom: 20
  },
  Text: {
      padding: "3vw",
      fontFamily: "Permanent Marker, cursive",
      fontSize: "32px"
  },
  Video: {
      position: "relative",
      height: 0,
      paddingBottom: "60.25%"
  },
  iFrame: {
      position:"absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      frameBorder: 0
  }
}

class VideoContainer extends Component {
    render() {
        return (
            <Paper style={styles.Paper}>
                <Grid container spacing={24}>
                    <Grid item md={5} xs={12}>
                        <div className="video-text" style={styles.Text}>
                            <p>{this.props.text}</p>
                        </div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div>
                            <div style={styles.Video}>
                                <iframe src={this.props.link} style={styles.iFrame} title={this.props.text} frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default VideoContainer;