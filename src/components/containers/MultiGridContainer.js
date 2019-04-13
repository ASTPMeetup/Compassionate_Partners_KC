import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {padding: 50, marginTop: 20, marginBottom: 20 }
}

class MultiGridContainer extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                        {this.props.description}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={styles.Paper}>
                    Right Panel
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default MultiGridContainer;
