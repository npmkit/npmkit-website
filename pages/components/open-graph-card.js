import React from 'react';

export default ({ title, description, image }) => (
  <React.Fragment>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://npmkit.app/" />
    <meta
      property="og:image"
      content="https://npmkit.app/static/card-600x600.png"
    />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="npmkit" />
    <meta property="og:locale" content="en_US" />
  </React.Fragment>
);
