import React from 'react';
import App, { Container } from 'next/app';
import styled, { createGlobalStyle } from 'styled-components';
import systemFont from 'system-font-css';
import Logo from './components/logo';
import Link from './components/link';

const GlobalStyles = createGlobalStyle`
  ${systemFont}

  :root {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: system-ui;
    cursor: default;
    padding: 0;
    margin: 0;
  }
`;

const Layout = styled.div`
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
`;

const Panel = styled.div`
  align-items: center;
  padding: 1.5rem 0;
  display: flex;
`;

const Header = Panel.withComponent('header');

const Footer = Panel.withComponent('footer');

const Left = styled.div``;

const Right = styled.div`
  text-align: right;
  flex: 1;
`;

const Divider = styled.span.attrs({
  children: <React.Fragment> 〰 </React.Fragment>,
})`
  vertical-align: middle;
  color: #333;
`;

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Header>
            <GlobalStyles />
            <Left>
              <Logo />
            </Left>
            <Right>
              <Link href="https://github.com/npmkit/npmkit">GitHub</Link>
              <Divider />
              <Link href="https://github.com/npmkit/npmkit/blob/master/changelog.md">
                View changelog
              </Link>
              <Divider />
              <Link href="https://github.com/npmkit/npmkit/issues/new">
                Report a bug
              </Link>
            </Right>
          </Header>
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer>
            <Left>
              Made by{' '}
              <Link href="https://github.com/sbekrin">Sergey Bekrin</Link> and{' '}
              <Link href="https://github.com/npmkit/npmkit/graphs/contributors">
                contributors
              </Link>
            </Left>
            <Right>
              <Link href="https://github.com/npmkit/npmkit-website">
                View source
              </Link>
            </Right>
          </Footer>
        </Layout>
      </Container>
    );
  }
}

export default CustomApp;
