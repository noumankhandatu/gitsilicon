import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const NftRentBuy = ({
  Title = "Price",
  amountInEth = "0.015",
  amountInDollar = "210",
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.buy_bidtimer_container}>
      <Box className={classes.buy_bidtimer_title_div}>
        <Typography className={classes.buy_bidtimer_title} variant="h4">
          {Title}
        </Typography>
        <Box className={classes.bidTimer_RightDiv}>
          <Typography className={classes.bidtimer_Price}>
            {amountInEth}ETH
          </Typography>
          <Typography className={classes.bidtimer_time_p}>
            ${amountInDollar}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default NftRentBuy;

const useStyles = makeStyles((theme) => ({
  buy_bidtimer_title_div: {
    display: "flex",
    justifyContent: "space-between",
  },
  buy_bidtimer_title: {
    color: theme.palette.text.primary,
    fontSize: "36px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  buy_bidTimer_Timer_: {
    display: "flex",
    marginTop: "12.26px",
    justifyContent: "space-between",
  },
  buy_bidTimer_Div: {
    display: "flex",
    gap: "31px",
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
  },
  bidTimer_innerDiv: {
    display: "flex",
    flexDirection: "column",
  },
  bidtimer_time_T: {
    fontSize: "18px",
    fontWeight: "700",
  },
  bidtimer_time_p: {
    fontSize: "12px",
    fontWeight: "400",
    marginTop: "1.5px",
    color: theme.palette.text.primary,
  },
  bidTimer_RightDiv: {
    textAlign: "right",
  },
  bidtimer_Price: {
    fontSize: "18px",
    color: theme.palette.text.primary,
    fontWeight: "500",
  },
}));
