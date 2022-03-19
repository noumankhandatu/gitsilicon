import { Box, Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
const ShoppingCard = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const getUsersPromises = () => {
    axios
      .get("http://testquencies.alshumaal.com/api/RCAs/getallRcas.php")
      .then((result) => {
        setUsers(result.data.getallRCAs);
        console.log(result);
      });
  };
  console.log(users, "Here");
  useEffect(() => {
    getUsersPromises();
  }, []);
  return (
    <Box className={classes.outterContainer} pt={4}>
      {users &&
        users.map((item, id) => {
          return (
            <Box className={classes.container} key={item.id}>
              <Box
                key={id}
                component={Link}
                to={`/shippingdetail/${id}`}
                className={classes.container}
              >
                <Box display="flex" justifyContent="center">
                  <img className={classes.image} src={item.art_img} alt="" />
                </Box>
                <Box pb={2} pl={2} pt={1}>
                  <Typography variant="h3">{item.art_name}</Typography>
                </Box>
                <Box
                  className={classes.titlePrice}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>Price</Typography>
                  <Typography>${item.art_price}</Typography>
                </Box>
                <Box pb={2} pt={1} display="flex" justifyContent="center">
                  <Button className={classes.btn} background="primary">
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default ShoppingCard;

const useStyles = makeStyles((theme) => ({
  outterContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 20,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr ",
    },
  },
  container: {
    border: "2px solid #360480",
    width: 280,
    background: "#1b0240",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
  },
  image: {
    width: 260,
    height: 260,
    cursor: "pointer",

    padding: 10,
    "&:hover": {
      transform: "scale(1.07)",
      transition: "0.5s",
    },
  },
  btn: {
    width: "90%",
    background: "#1f74cf",
    height: 45,
    "&:hover": {
      background: "#467fbd",
    },
  },
  titlePrice: {
    marginLeft: 15,
    marginRight: 15,
  },
}));
