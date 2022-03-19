import { paletteDark as palette } from "../palette";

const MuiIconButton = {
  root: {
    color: palette.icon,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.01)",
    },
  },
};

export default MuiIconButton;
