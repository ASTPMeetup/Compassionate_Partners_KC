import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 400
  }
};

function IMG(props) {
  const { $, classes } = props;

  const src = $('img').attr('src');
  const alt = $('img').attr('alt');

  return (
    <Card className={classes.card}>
      <CardMedia component="img" alt={alt} image={src} />
    </Card>
  );
}

export default withStyles(styles)(IMG);
