import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  Paper: {padding: 25, marginTop: 20, marginBottom: 20},
  Title: {fontSize: "2vw"},
  Text: {fontSize: "1vw"}
}

class TextListContainer extends Component {
    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper style={styles.Paper}>
                        <h1 style={styles.Title}>{this.props.title}</h1>
                        <ul>
                            {this.props.list.map((text, index) => {
                                return <li style={styles.Text} key={index}>{text}</li>
                            })}
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default TextListContainer;
