import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import Parser from '../helpers/Parser';

const footerStyle = {
  backgroundColor: 'secondary'
};

export default function Footer() {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="stretch"
      className={footerStyle}
    >
      <Card>
        <CardHeader title="Resources" />
        <CardContent>
          This is a <Link href={'#'}>list</Link> of resources
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Social Media" />
        <CardContent>
          <Parser
            rawText={`<p>This is a complicated page with a <a href="http://www.google.com">link</a> in the middle.</p><figure class="wp-block-image"><img src="https://via.placeholder.com/300" alt="alt text"/></figure>`}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Contact Us" />
        <CardContent>This will be our contact info.</CardContent>
      </Card>
    </Grid>
  );
}
