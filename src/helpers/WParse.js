import React from 'react';
import cheerio from 'cheerio';
import axios from 'axios';

import A from './A';
import P from './P';
import LS from './LS';
import IMG from './IMG';

function WParse(props) {
  const { rawText } = props;
  const $ = cheerio.load(rawText);

  const body = $('body');
  const compArr = [];
  body.children().each((i, child) => {
    switch (child.name) {
      case 'p':
        compArr.push(<P $={$} el={child} />);
        break;
      case 'ul':
      case 'ol':
        compArr.push(<LS $={$} el={child} />);
        break;
      case 'figure':
        compArr.push(<IMG $={$} />);
    }
  });

  return compArr.map(c => c);
}

export default WParse;
