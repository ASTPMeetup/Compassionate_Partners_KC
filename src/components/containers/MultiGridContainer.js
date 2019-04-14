import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Parser from '../../helpers/Parser';

const styles = {
  Paper: { padding: 50, marginTop: 20, marginBottom: 20 }
};

class MultiGridContainer extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item sm>
          <Paper style={styles.Paper}>{this.props.description}</Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.Paper}>
            <p>Right Panel</p>
            <Parser
              rawText={`<p>This is a complicated page with a <a href="http://www.google.com">link</a> in the middle.</p>`}
            />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default MultiGridContainer;
