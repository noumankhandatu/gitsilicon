import { makeStyles } from "@material-ui/core";
import bgImage from "../../assets/image/comin.png";
export const useStyles = makeStyles((theme) => ({
  EntireBanner: {
    position: "relative",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "800px",
  },
  textBox: {
    position: "absolute",
    top: "50%",
    textAlign: "center",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  textComing: {
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: "520 ! important",
    fontSize: "55px ! important",
    letterSpacing: "5px ! important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px ! important",
    },
  },
  SiliconText: {
    color: theme.palette.text.default,
    fontSize: "60px",
    fontFamily: theme.typography.fontFamily,
    
  },
  logo: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  getreadyText: {
    color:theme.palette.text.primary,
    fontSize: "16px ! important",
  },
}));
