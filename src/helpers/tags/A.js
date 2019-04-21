import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Typography, Link } from '@material-ui/core';

function A(props) {
  const { $, el } = props;

  const href = $(el).attr('href');
  const text = $(el).text();

  return <Link href={href}>{text}</Link>;
}

export default A;
