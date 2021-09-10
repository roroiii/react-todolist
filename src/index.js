import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./normalize.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    spacing: 8,
    primary: {
      light: "#e6ffff",
      main: "#1fa8e6",
      dark: "#82b3c9",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffeeff",
      main: "#f8bbd0",
      dark: "#e0687e",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById("root")
);
