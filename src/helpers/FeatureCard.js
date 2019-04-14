import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import GreenBrush from '../assets/img/brush.png';

const styles = {
  card: {
    minWidth: 300
  },
  media: {
    height: 200
  },
  Brush: {backgroundImage:`url(${GreenBrush})`}
};

function FeatureCard(props) {
  const { classes} = props;
  return (
    <Card className={classes.card} raised={true}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
            <div class="text-center">
                <div class="brush brush-text" style={styles.Brush}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </div>
                <br/>
                <br/>
            </div>
            <Typography component="p">{props.content}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(FeatureCard);