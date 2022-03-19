const white = "#FFFFFF";
const black = "#000000";
const paletteDark = {
  black,
  white,
  primary: {
    contrastText: black,
    main: "#6605B8",
    secondary: "#000000",
    primary: "#52d869",
  },
  secondary: {
    contrastText: white,
    main: "#ffff",
  },
  text: {
    main: "#6605B8",
    alpha: "#4A0386",
    primary: "#fff",
    //check
    secondary: white,
    default: "#AE42FF",
    beta: "#8A00FF",
  },
  background: {
    default: "#1A042D",
    banner: "#160226",
    gridBanner: "#10011C",
    alpha: "#4A0386",
    btnWhite: "#ffff",
    btnPurple: "#6605B8",
    headerbg: "#101010",
    carusalBackground: "#000000",
    primary: "#6703BD",
    // Check
    main: "#160226",

    beta: "#11011E",
    secondary: "#21013D",
    lightWhite: "#160226",
  },
  hover: {
    main: "#6605B8",
  },
  icon: {
    main: "#2A2F39",
    primary: "#2a9bf2",
  },
};

const paletteLight = {
  ...paletteDark,

  primary: {
    contrastText: white,
    main: "#ffff",
  },
  secondary: {
    contrastText: black,
    main: "#6605B8",
    secondary: "#000000",
  },
  text: {
    main: "#000",
    alpha: "#fff",
    primary: "#000",
    secondary: black,
    default: "#AE42FF",
    beta: "#8A00FF",
  },
  background: {
    default: "#fff",
    banner: "#fafafa",
    gridBanner: "#EDEDED",
    alpha: "#EDEDED",
    btnWhite: "#000",
    btnPurple: "#fff",
    headerbg: "#2f0254",
    carusalBackground: "#fafafa",
    // check
    primary: "#fff",
    main: "#fff",
    beta: "#fff",
    lightWhite: "#fafafa",
  },
  hover: {
    main: "#6605B8",
  },
};

export { paletteDark, paletteLight };
