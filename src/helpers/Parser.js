import React, { Component } from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import cheerio from 'cheerio';

export default class Parser extends Component {
  $ = cheerio.load(this.props.rawText);

  parse() {
    const body = this.$('body');
    console.log('-----  LOOK HERE  -----');

    const compArr = [];
    body.children().each((i, el) => {
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
      case 'ul':
      case 'ol':
        return this.list(el);
        break;
      case 'figure':
        return this.figure(el);
        break;
      default:
        return;
    }
  }

  p(el) {
    console.log(this.$(el));
    console.log(this.$(el).contents().length);

    const comps = [];

    this.$(el)
      .contents()
      .each((i, child) => {
        console.log(child.name);
        if (child.name) return comps.push(this.a(child));
        console.log(this.$(child).text());
        comps.push(this.$(child).text());
      });

    console.log(comps);
    return (
      <Typography component="p" paragraph>
        {comps.map(c => c)}
      </Typography>
    );
  }

  a(el) {
    const href = this.$(el).attr('href');
    const text = this.$(el).text();

    return <Link href={href}>{text}</Link>;
  }

  figure(el) {
    const styles = {
      card: {
        maxWidth: 400
      },
      media: {
        padding: '20px'
      }
    };

    const img = this.$(el).find('img');
    const src = this.$(img).attr('src');
    const alt = this.$(img).attr('alt');
    console.log(src, alt);

    return (
      <Card className={styles.card}>
        <CardMedia className={styles.media} image={src} title={alt} />
      </Card>
    );
  }

  render() {
    return this.parse();
  }
}
