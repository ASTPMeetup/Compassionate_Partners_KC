import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Grid: {textAlign: "center"},
  Text: {fontSize: "2vw"},
  Text: {fontSize: "1vw"}
}

class CenterTextWrapper extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <h1 style={styles.Title}>{this.props.title}</h1>
                <p style={styles.Text}>{this.props.text}</p>
            </Grid>
        );
    }
}

export default CenterTextWrapper;
