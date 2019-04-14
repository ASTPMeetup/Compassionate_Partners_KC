import React, { Component } from 'react';

import Link from '@material-ui/core/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cheerio from 'cheerio';

export default class Parser extends Component {
  $ = cheerio.load(this.props.rawText);

  parse() {
    // const $ = cheerio.load(rawText);
    const body = this.$('body');
    console.log('-----  LOOK HERE  -----');

    const compArr = [];
    body.children().each((i, el) => {
      // liArr.push(
      //   <ListItem>
      //     <ListItemText primary={html(el).text()} />
      //   </ListItem>
      // );
      // console.log(html(el).text());

      compArr.push(this.route(el));
    });

    return compArr.map(c => c);
  }

  route(el) {
    console.log(el.name);

    switch (el.name) {
      case 'p':
        return this.p(el);
        break;
      default:
        return;
    }
  }

  p(el) {
    console.log(this.$(el));
    console.log(this.$(el).children('a').length);

    const comps = [];

    this.$(el)
      .children()
      .each((i, child) => {
        if (this.$(child).name === 'a') return comps.push(this.a(child));

        comps.push(this.$(child).text());
      });

    return comps;
  }

  a(el) {
    const href = this.$(el).attr('href');
    const text = this.$(el).text();

    return <Link href={href}>{text}</Link>;
  }

  render() {
    // const { rawText } = this.props;

    return this.parse();
  }
}
