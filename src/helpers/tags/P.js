import React from 'react';

import A from './A';

function P(props) {
  const { $, el } = props;
  const comps = [];

  $(el)
    .contents()
    .each((i, child) => {
      if (child.name) return comps.push(<A $={$} el={child} />);

      comps.push($(child).text());
    });

  return <p>{comps.map(c => c)}</p>;
}

export default P;
