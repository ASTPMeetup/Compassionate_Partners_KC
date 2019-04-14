import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PeopleIcon from '@material-ui/icons/People';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: "5vw",
    paddingRight: "5vw", 
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleValuesList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <p>&#10095; <strong>Stewardship</strong> - We are responsible and accountable with all resources we’ve been given to serve.</p>
        <p>&#10095; <strong>Excellence</strong> - We strive to exceed expectations, quality over quantity every time.</p>
        <p>&#10095; <strong>Relevance</strong> - We are providing services that meet the needs of those we serve.</p>
        <p>&#10095; <strong>Vision</strong> - We seek opportunities for organizational growth through community engagement.</p>
        <p>&#10095; <strong>Integrity</strong> - We treat everyone with dignity and respect.</p>
        <p>&#10095; <strong>Compassion</strong> - Everything we do is intended to inspire hope and heal broken spirits.</p>
        <p>&#10095; <strong>Empower</strong> - Restoring self-confidence and inspiring children and youth to rise above their circumstances.</p>
    </div>
  );
}

SimpleValuesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleValuesList);