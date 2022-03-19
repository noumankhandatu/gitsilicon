import { makeStyles } from "@material-ui/core";
import img from "../../assets/BlackLineCardImg/Rectangle13.png";
export const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage: `url(${img})`,
    height: "270px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    transition: "transform 550ms",
    width: "250px",
    border: "2px solid #4A0386",
    borderRadius: "3px",
    margin: "10px 0px  ! important",
    "&:hover": {
      transform: "scale(1.03)",
      filter: "drop-shadow(0px 7px 25px rgba(102, 5, 184, 0.68))",
      "& .cardText": {
        display: "none",
      },
    },
  },
  textsInsideLeft: {
    position: "absolute",
    bottom: "0px",
    background: "linear-gradient(1deg, #000000 9.1%, rgba(0, 0, 0, 0) 83.42%)",
    width: "100%",
    padding: "10px",
    textAlign: "left",
    left: "0px",
  },
  textsInsideRight: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    padding: "10px",
    textAlign: "right",
    right: "0px",
  },
  textsInsideTop: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    padding: "10px",
    textAlign: "left",
    top: "0px",
    background:
      "linear-gradient(180deg, #000000 9.1%, rgba(0, 0, 0, 0) 83.42%)",
    left: "0px",
  },
  textsInsideTopRight: {
    display: "block",
    position: "absolute",
    width: "100%",
    padding: "10px",
    textAlign: "right",
    top: "0px",
    right: "0px",
  },
}));
