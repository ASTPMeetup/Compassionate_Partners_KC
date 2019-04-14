import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BrushBlue from '../../assets/img/brush_blue.png';

const styles = {
  Paper: {padding: 25, marginTop: 20, marginBottom: 20},
  Text: {fontSize: "1.25vw", textAlign: "left", paddingBottom: "0.75vw"},
  Brush: {backgroundImage:`url(${BrushBlue})`}
}

class TextListContainer extends Component {
    render() {
        return (
            <div className="stats-container">
                <div class="text-center">
                    <div class="brush brush-text" style={styles.Brush}>
                        <Typography component="h2" variant="display1">
                            {this.props.title}
                        </Typography>
                    </div>
                    <br/>
                    <br/>
                </div>
                <div className="stats-list" style={styles.Text}>
                    <ul>
                        {this.props.list.map((text, index) => {
                            return <li style={styles.Text} key={index}>{text}</li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TextListContainer;
