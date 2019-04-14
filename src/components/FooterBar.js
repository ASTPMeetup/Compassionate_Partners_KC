import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
};

class FooterBar extends Component {
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" color="primary" style={styles.appBar}>
                    <Toolbar style={styles.toolbar}>
                        <MailChimp/>
                    </Toolbar>
                </AppBar>`
            </div>
        );
    }
}

export default FooterBar;