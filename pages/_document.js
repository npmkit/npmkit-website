import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import TwitterCard from './components/twitter-card';
import OpenGraphCard from './components/open-graph-card';
import Favicons from './components/favicons';

const meta = {
  title: 'npmkit – Quick access to all your projects',
  description: 'An open-source tray app for quick access to all your projects',
  keyword: [
    'npmkit',
    'npm',
    'yarn',
    'tray',
    'app',
    'menubar',
    'nodejs',
    'node',
  ],
};

class StyledDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <title>{meta.title}</title>
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keyword.join(',')} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Favicons />
          <OpenGraphCard {...meta} />
          <TwitterCard {...meta} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default StyledDocument;
