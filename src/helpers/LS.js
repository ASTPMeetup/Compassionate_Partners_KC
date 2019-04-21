import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function LS(props) {
  const { $, el } = props;
  const liComps = [];
  $(el)
    .children()
    .each((i, child) => {
      console.log($(child).text());

      liComps.push(
        <ListItem>
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <ListItemText primary={$(child).text()} />
        </ListItem>
      );
    });

  return <List>{liComps.map(c => c)}</List>;
}

export default LS;
