import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class NavBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <Grid container spacing={24} justify="flex-end">
                            <Button color="inherit">Donate</Button>
                            <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default NavBar;