import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import NavBarTabs from '../helpers/NavBarTabs';

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
                <NavBarTabs/>
            </div>
        );
    }
}

export default NavBar;