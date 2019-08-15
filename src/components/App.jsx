import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from 'styled-components';

import GUIDELINE from '../guideline';

import PAGES from '../content';

import logo from '../images/logo.svg';

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
  }

  #html {
    height: 100%;
  }

  body {
    margin: 0
    padding: 0;
    height: 100%;
    color: ${GUIDELINE.color_text};
    background-color: ${GUIDELINE.color_text};
    backface-visibility: hidden;
    font-family:  ${GUIDELINE.fontfamily_sans};
    font-size:  ${GUIDELINE.fontsize_small}px;
    line-height: ${GUIDELINE.lineheight_small}px;
    letter-spacing: ${GUIDELINE.letterspacing_normal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @supports (height: 100vh) {
    #root,
    html,
    body {
      height: 100vh;
    }
  }

  a {
    color: ${GUIDELINE.color_link};
    text-decoration: none;

    &:hover {
      color: ${GUIDELINE.color_link_hover};
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  button,
  input,
  textarea,
  select,
  a {
    outline: none !important;

    &:hover,
    &:active,
    &:focus {
      outline: none !important;
    }
  }

  // Placeholders
  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-moz-placeholder,
  :-ms-input-placeholder {
    color: ${GUIDELINE.color_placeholder};
  }

  img {
    border-style: none; // Remove the border on images inside links in IE 10.
  }

  button,
  input {
    overflow: visible; // Show the overflow in Edge
  }

  button,
  select {
    text-transform: none; // Remove the inheritance of text transform in Firefox.
  }

  textarea {
    overflow: auto; // Remove the default vertical scrollbar in IE 10+.
  }
`
const AppWrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AppPage = styled.div`
  flex-grow: 1;
  background-color: ${GUIDELINE.color_black};
  color: ${GUIDELINE.color_text};
`

const AppHeader = styled.div`
  height: ${GUIDELINE.header_height};
  background-color: ${GUIDELINE.color_dark};
  color: ${GUIDELINE.color_text};
  display: flex;
  align-items: flex-start;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: ${GUIDELINE.header_height};
  pointer-events: none;
  margin-right: ${GUIDELINE.gutter};
  display: inline-block;
  animation: ${rotate} infinite calc(${GUIDELINE.transition_duration} * 20) ${GUIDELINE.transition_timingfunction};

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    margin-right: calc(${GUIDELINE.gutter}px / 2);
    animation: none;
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-self: stretch;
`

const MenuItem = styled.li`
  align-self: center;

  &:not(:last-child) {
    margin-right: calc(${GUIDELINE.gutter}px * 4);
  }

  @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
    &:not(:last-child) {
      margin-right: calc(${GUIDELINE.gutter}px * 2);
    }
  }

  ${Link} {
    text-transform: uppercase;
    font-size: ${GUIDELINE.fontsize_large}px;

    @media (max-width: ${GUIDELINE.breackpoint_xs_max}) {
      font-size: ${GUIDELINE.fontsize_small}px;
    }
  }
`

const Page = props => (
  <AppPage>
    <h1>{props.title}</h1>
  </AppPage>
);

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppWrapper>
          <AppHeader>
            <Logo src={logo} alt="logo" />
            <Menu>
              {PAGES.map((page, index) => {
                return (
                  <MenuItem key={index} >
                    <Link
                      to={page.path}
                      aria-label={page.title}>{page.title}
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </AppHeader>
          <Switch>
            {PAGES.map((page, index) => {
              return <Route
                key={index}
                exact={index > 0 ? false : true}
                path={page.path}
                component={props => <Page {...props} title={page.title} />}
              />
            })}
          </Switch>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
