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
        <Header
          padding={`1.5rem ${theme.gutter}`}
          theme="light"
          style={{
            background: `#FFFFFF linear-gradient(to bottom, rgba(255,255,255,0) 85%, rgba(10,9,9,0.75) 100%)`
          }}
        >
          <a href="https://github.com/FormidableLabs/formidable-playbook" style={{marginTop: "16px"}}>View Source on GitHub</a>
        </Header>
        {this.props.children}
        <Footer
          padding={`5rem ${theme.gutter} 6rem`}
          theme="dark"
          style={{
            maxWidth: "500px"
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
