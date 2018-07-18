import React from 'react';

export default ({ description, image }) => (
  <React.Fragment>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@sergeybekrin" />
    <meta name="twitter:title" content="npmkit" />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content="https://npmkit.app/static/card-600x300.png"
    />
  </React.Fragment>
);
