import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import MailChimp from './MailChimp';

const styles = {
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        marginBottom: "-14px"
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Grid: {
        padding: "0 2vw",
        textAlign: "center"
    }
};

class FooterBar extends Component {
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" color="primary" style={styles.appBar}>
                    <Toolbar style={styles.toolbar}>
                        <Grid container spacing={40} style={styles.Grid}>
                            <Grid item xs={4}>
                                <p>P.O. Box 171763 &#10070; Kansas City, KS 66117</p>
                            </Grid>
                            <Grid item xs={8}>
                                <MailChimp/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default FooterBar;