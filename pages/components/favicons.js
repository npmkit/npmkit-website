import React from 'react';

export default () => (
  <React.Fragment>
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon-128x128.png" />
    {[256, 196, 128, 96, 32, 16].map(size => (
      <link
        rel="icon"
        type="image/png"
        href={`/static/favicon-${size}x${size}.png`}
        sizes={`${size}x${size}`}
      />
    ))}
  </React.Fragment>
);
