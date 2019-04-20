import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {padding: 30, marginTop: 20, marginBottom: 20},
  Text: {fontSize: "20px", textAlign: "center"}
}

class TextCenterContainer extends Component {
    render() {
        return (
            <div className="banner-text-container">
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper style={styles.Paper}>
                            <p style={styles.Text}>{this.props.text}</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default TextCenterContainer;
