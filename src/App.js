import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B4F6C",
    },
    secondary: {
      main: "#2A9D8F",
    },
    success: {
      main: "#55FFCC",
    },
    error: {
      main: "#FE5F55",
    },
    text: {
      primary: "#1C1018",
      secondary: "#0B4F6C",
    },
    divider: "#55FFCC",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={routes} />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
