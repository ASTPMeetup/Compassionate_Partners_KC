import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {padding: 25, marginTop: 20, marginBottom: 20},
  Video: {
      position: "relative",
      height: 0,
      paddingBottom: "56.25%"
  },
  iFrame: {
      position:"absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
  }
}

class VideoContainer extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <div>
                            <div style={styles.Video}>
                                <iframe src="https://www.youtube.com/embed/NlDi1enLzbw" style={styles.iFrame}  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default VideoContainer;