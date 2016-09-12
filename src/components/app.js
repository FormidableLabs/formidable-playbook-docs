/* eslint-disable global-require */
import React from "react";
import Radium, { Style, StyleRoot } from "radium";
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
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot
        radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}
        style={styleRootStyles}
      >
        <Style rules={stylesheet} />
        <Style
          scopeSelector=".formidableHeader-container div"
          rules={{
            marginLeft: "auto",
            mediaQueries: {
              [`${theme.breakpoints.medium}`]: {
                marginLeft: 0
              }
            }
          }}
        />
        <Header
          theme="light"
          containerStyle={{
            width: "100%",
            maxWidth: `calc(${theme.container} + ${theme.gutter})`,
            margin: `${theme.gutter} auto`,
            padding: `${theme.gutter} 0`
          }}
        >
          <a href="https://github.com/FormidableLabs/formidable-playbook" style={{marginTop: "16px"}}>View Source on GitHub</a>
        </Header>
        {this.props.children}
        <Footer
          padding={`5rem ${theme.gutter} 6rem`}
          theme="dark"
          containerStyle={{
            width: "100%",
            maxWidth: `calc(${theme.container} + ${theme.gutter})`,
            margin: `${theme.gutter} auto`
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
