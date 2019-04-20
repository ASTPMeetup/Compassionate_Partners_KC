import React from 'react';

const styles = {
  root: {
    width: '100%',
    paddingLeft: "5vw",
    paddingRight: "5vw", 
  },
};

const SimpleValuesList = () => (
  <div style={styles.root}>
      <p>&#10095; <strong>Stewardship</strong> - We are responsible and accountable with all resources we’ve been given to serve.</p>
      <p>&#10095; <strong>Excellence</strong> - We strive to exceed expectations, quality over quantity every time.</p>
      <p>&#10095; <strong>Relevance</strong> - We are providing services that meet the needs of those we serve.</p>
      <p>&#10095; <strong>Vision</strong> - We seek opportunities for organizational growth through community engagement.</p>
      <p>&#10095; <strong>Integrity</strong> - We treat everyone with dignity and respect.</p>
      <p>&#10095; <strong>Compassion</strong> - Everything we do is intended to inspire hope and heal broken spirits.</p>
      <p>&#10095; <strong>Empower</strong> - Restoring self-confidence and inspiring children and youth to rise above their circumstances.</p>
  </div>
);

export default SimpleValuesList;