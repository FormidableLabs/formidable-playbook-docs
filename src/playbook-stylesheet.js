import Color from "color";
import theme from "./playbook-theme";

// begin stylesheet
export default {
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    backgroundColor: theme.charcoal,
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%"
  },
  body: {
    backgroundColor: theme.white,
    boxSizing: "border-box",
    color: theme.black,
    fontFamily: theme.serif,
    fontSize: "16px",
    lineHeight: 1.4,
    margin: 0
  },
  "html, body": {
    overflowX: "hidden",
    minHeight: "100vh"
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  "h1, h2, h3, h4, h5, h6, ul, ol, dd, p, figure, table, fieldset, hr, .highlight": {
    marginTop: "1.25rem",
    marginBottom: 0
  },
  "ul ul": {
    marginTop: "0"
  },
  "h1, h2, h3, h4, h5, h6, hgroup": {
    fontFamily: theme.sansSerif,
    fontWeight: "normal",
    letterSpacing: ".02em",
    lineHeight: 1.2
  },
  a: {
    color: theme.red,
    textDecoration: "none",
    transition: "color 150ms ease-in"
  },
  "a:hover": {
    color: Color(theme.red).lighten(.2).hexString(),
    transition: "color 150ms ease-out"
  },
  pre: {
    backgroundColor: theme.offWhite,
    marginTop: "1.25rem",
    marginLeft: "-10%",
    marginRight: "-10%",
    paddingTop: "2em",
    paddingRight: "10%",
    paddingBottom: "2em",
    paddingLeft: "10%",
    overflow: "auto"
  },
  "pre > code": {
    display: "block",
    border: "none",
    padding: 0
  },
  code: {
    fontSize: "82%",
    padding: "0.33em 0.333em 0.28em",
    border: `1px solid rgba(0,0,0,0.1)`,
    borderRadius: "1px",
    fontFamily: theme.code,
    wordWrap: "break-word",
    maxWidth: "100%",
    overflowX: "auto"
  },
  p: {
    fontSize: "95%",
    lineHeight: 1.8,
    color: theme.black
  },
  ol: {
    marginLeft: "1.25em",
    counterReset: "li"
  },
  "ol > li": {
    position: "relative",
    listStyle: "none",
    margin: "0.5em 0",
    fontSize: "0.95em"
  },
  "ol > li:before": {
    content: `counter(li) "."`,
    counterIncrement: "li",
    position: "absolute",
    left: "-1.2em",
    width: "1em",
    fontFamily: theme.sansSerif,
    fontWeight: "600",
    color: theme.gray
  },
  ul: {
    marginLeft: "0.8em",
    padding: 0
  },
  "ul > li": {
    margin: "0.5em 0",
    padding: 0,
    fontSize: "95%",
    lineHeight: 1.8
  },
  img: {
    maxWidth: "100%"
  },
  h1: {
    fontSize: "3.25rem"
  },
  h2: {
    fontSize: "2.75rem"
  },
  h3: {
    fontSize: "2.5rem"
  },
  h4: {
    fontSize: "2.25rem"
  },
  h5: {
    fontSize: "2rem"
  },
  h6: {
    fontSize: "2rem"
  },
  svg: {
    fill: "currentColor"
  },
  table: {
    padding: "0px"
  },
  "table tr": {
    borderTop: `1px solid ${theme.offWhite}`,
    backgroundColor: "white",
    margin: "0px",
    padding: "0px"
  },
  "table tr:nth-child(2n)": {
    backgroundColor: "#f8f8f8"
  },
  "table tr th": {
    fontWeight: "bold",
    border: `1px solid ${theme.offWhite}`,
    textAlign: "left",
    margin: "0px",
    padding: "6px 13px"
  },
  "table tr td": {
    border: `1px solid ${theme.offWhite}`,
    textAlign: "left",
    margin: "0px",
    padding: "6px 13px"
  },
  "table tr th:first-child, table tr td:first-child": {
    marginTop: "0px"
  },
  "table tr th:last-child, table tr td:last-child": {
    marginBottom: "0px"
  },
  // Markdown-processed styles
  ".page-home .md p:first-child": {
    fontSize: "inherit"
  },
  ".page-home .md ul": {
    margin: "1.25rem 0px"
  },
  ".page-home .md ul ul": {
    margin: "0 0 0 1.25em"
  },
  ".page-home .md ul li": {
    position: "relative",
    listStyle: "none"
  },
  ".page-home .md ul li a": {
    position: "relative",
    fontSize: "1rem"
  },
  ".page-home .md ul li a:before": {
    content: "''",
    display: "block",
    position: "absolute",
    left: "-15px",
    top: "50%",
    width: "5px",
    height: "5px",
    borderRadius: "25px",
    backgroundColor: theme.red,
    transform: "translateY(-50%)"
  },
  ".page-home .md h2": {
    marginTop: "1.5em"
  },
  ".page-home .md h4 ~ p": {
    marginTop: ".5em"
  },
  ".page": {
    flex: "1 1 auto"
  },
  mediaQueries: {
    [theme.breakpoints.medium]: {
      p: {
        fontSize: "1.1rem"
      },
      li: {
        fontSize: "1.1rem"
      },
      h1: {
        fontSize: "4rem"
      },
      h2: {
        fontSize: "3rem"
      },
      h3: {
        fontSize: "2.75rem"
      },
      "h4, h5, h6": {
        fontSize: "2.5rem"
      },
      ".page-home .md p:first-child": {
        fontSize: "1.3rem"
      },
      ".page-home .md ul li a": {
        position: "relative",
        fontSize: "1.2rem"
      }
    }
  }
};
