import React from "react";
import Page from "../components/page";
import Documentation from "../components/documentation";
import Radium from "radium";

import theme from "../playbook-theme";

const Home = function () {

  const styles = {
    main: {
      width: "100%",
      maxWidth: `calc(${theme.container} + ${theme.gutter})`,
      margin: `${theme.gutter} auto`,
      padding: theme.gutter
    },
    tagline: {
      marginBottom: theme.gutter,
      paddingLeft: "0",

      color: theme.black,
      fontSize: "2.4em",
      fontWeight: "normal",
      lineHeight: 1.2,
      [`@media ${theme.breakpoints.medium}`]: {
        fontSize: "3rem"
      }
    }
  };

  return (
    <Page name="home">
      <main style={styles.main}>
        <h2 style={styles.tagline}>
          A practical guide to building modern applications
        </h2>
        <Documentation
          markdown={require("!!raw!../../node_modules/formidable-playbook/README.md")}
          currentPath="/"
        />
      </main>
    </Page>
  );
};

export default Radium(Home);
