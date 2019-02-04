import React, { Component } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import fetch from 'node-fetch';
import Link from './components/link';
import Note from './components/note';
import Section from './components/section';
import Heading from './components/heading';

const Flex = styled.div`
  ${({ children, ...props }) => props};
  display: flex;
`;

const Headline = styled(Heading)`
  font-size: 2.5rem;
  line-height: 3rem;
  white-space: nowrap;
  margin: 0 0 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  max-width: 25rem;
  margin: 1rem 0;
  color: #222;
`;

const MainSection = styled(Section)`
  min-height: 512px;
`;

const Feature = styled.li`
  &::before {
    transition: margin-left 200ms ease, font-size 200ms ease;
    content: '${props => props.Emoji}';
    position: absolute;
    font-size: 2rem;
    margin-left: -2.5rem;
    z-index: -1;
  }

  &:hover {
    &::before {
      font-size: 3rem;
      margin-left: -3rem;
    }
  }
`;

const List = styled(Paragraph).attrs({ as: 'ul' })`
  list-style: none;
  font-size: 1.25rem;
  padding: 0 0 0 1.5rem;

  ${Feature}:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const Em = styled.em`
  letter-spacing: -1px;
`;

class IndexPage extends Component {
  static async getInitialProps() {
    try {
      const token = process.env.GITHUB_TOKEN;
      const params = token
        ? { headers: { Authorization: `token ${token}` } }
        : {};
      const response = await fetch(
        'https://api.github.com/repos/npmkit/npmkit/releases/latest',
        params,
      );
      const data = await response.json();
      const macAsset = data.assets.find(asset => asset.name.match(/mac\.zip$/));
      return {
        release: {
          version: data.name,
          download: macAsset.browser_download_url,
        },
      };
    } catch (_) {
      return {
        release: {
          version: '',
          download: 'https://github.com/npmkit/npmkit/releases',
        },
      };
    }
  }

  render() {
    const { release } = this.props;
    return (
      <MainSection direction="row">
        <Flex
          backgroundImage="url('/static/preview.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="432px 512px"
          backgroundPosition="100% -25px"
          flexDirection="column"
          flex="1"
        >
          <Headline>Reach your local projects faster</Headline>
          <Paragraph>
            <Em>npmkit</Em> is a tray app for quick access to your local
            packages, both npm and yarn.
          </Paragraph>
          <List>
            <Feature Emoji="🔍">
              Find your projects with <Em>fuzzy search</Em>, by identicons or{' '}
              <Em>pin it</Em> on top
            </Feature>
            <Feature Emoji="🛠">
              <Em>Open it</Em> in your favorite editor, terminal or reveal in
              Finder
            </Feature>
            <Feature Emoji="⏯">
              Run <Em>background scripts</Em> with an indicator and status
              notifications
            </Feature>
            <Feature Emoji="📦">
              Extend it with <Em>plugins</Em>
            </Feature>
          </List>
          <Flex alignItems="center" margin="1rem 0">
            <Link href={release.download} primary>
              Download npmkit {release.version}
            </Link>
            <Note>for macOS 10.9+</Note>
          </Flex>
        </Flex>
      </MainSection>
    );
  }
}

export default IndexPage;
