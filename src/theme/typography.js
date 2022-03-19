import { useContext } from "react";
import ThemeContext from "../theme.provider";

const useTypography = () => {
  const palette = useContext(ThemeContext);
  console.log(palette, "palet");
  return {
    fontFamily: ['"Ubuntu"', "sans-serif"].join(","),
    fontStyle: "normal",
    fontWeight: "normal",
    color: palette?.text.primary,

    h1: {
      display: "flex",
      justifyContent: "center",
      color: palette?.text.primary,
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "45px",
    },
    h2: {
      color: palette?.text.primary,
      fontWeight: "bold",
      fontSize: "34px",
      lineHeight: "34px",
    },
    h3: {
      color: palette?.text.primary,
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "22px",
    },

    body1: {
      color: palette?.text.primary,
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "normal",
    },

    button: {
      color: palette?.text.primary,
      fontSize: "15px",
      lineHeight: "20px",
      fontWeight: "bold",
    },
  };
};

export default useTypography;
