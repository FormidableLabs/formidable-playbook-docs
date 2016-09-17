/* eslint-disable global-require */
import React from "react";
import Radium, { Style, StyleRoot } from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);
import { Header, Footer } from "formidable-landers";

import stylesheet from "../playbook-stylesheet";
import theme from "../playbook-theme";

class App extends React.Component {
  render() {
    const styleRootStyles = {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    };
    const styleHeading = {
      fontFamily: "sharp, 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: "3rem",
      fontWeight: "normal",
      lineHeight: 1.2,
      margin: "0",
      [`@media ${theme.breakpoints.medium}`]: {
        fontSize: "3.5em"
      }
    };
    const projectTextLogo = (
      <RadiumLink to="/" style={styleHeading}>
        Formidable Playbook
      </RadiumLink>);
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;

    return (
      <StyleRoot
        radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}
        style={styleRootStyles}
      >
        <Style rules={stylesheet} />
        <Header
          logoProject={projectTextLogo}
          theme="dark"
          style={{
            padding: "60px 0"
          }}
          styleBy={{
            textIndent: "2px"
          }}
          styleContainer={{
            margin: "0 auto",
            maxWidth: theme.container,
            padding: `0 ${theme.gutter}`
          }}
          styleLogos={{
            margin: "0 auto 50px",
            [`@media ${theme.breakpoints.medium}`]: {
              margin: "0 auto 0 0"
            }
          }}
        >
          <div className="default">
            <a href="https://github.com/FormidableLabs/formidable-playbook">GitHub</a>
          </div>
        </Header>
        {this.props.children}
        <Footer
          theme="dark"
          styleContainer={{
            margin: "0 auto",
            maxWidth: theme.container
          }}
        />
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  location: React.PropTypes.object.isRequired
};

export default Radium(App);
