import React, { useReducer } from "react";
import { createTheme } from "@material-ui/core/styles";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import themeOverrides from "../theme";
import { paletteDark, paletteLight } from "../theme/palette";
import useTypography from "../theme/typography";
import reducer, { initialState, TOGGLE_STATE } from "./theme.reducer";

const ThemeContext = React.createContext(paletteDark);

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [{ activeTheme }, dispatch] = useReducer(reducer, initialState);

  const [palette, setPalette] = React.useState(paletteDark);

  React.useEffect(() => {
    setPalette((prev) => (activeTheme === "dark" ? paletteDark : paletteLight));
  }, [activeTheme]);

  const toggleTheme = () => {
    dispatch({
      type: TOGGLE_STATE,
      payload: activeTheme === "dark" ? "light" : "dark",
    });
  };

  const typography = useTypography();
  return (
    <ThemeContext.Provider value={{ palette, toggleTheme }}>
      <MuiThemeProvider
        theme={createTheme({
          ...themeOverrides,
          typography,
          palette: palette,
        })}
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
