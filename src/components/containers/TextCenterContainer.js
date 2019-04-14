import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {padding: 35, marginTop: 20, marginBottom: 20},
  Text: {fontSize: "2vw", textAlign: "center"}
}

class TextCenterContainer extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <p style={styles.Text}>{this.props.text}</p>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default TextCenterContainer;
