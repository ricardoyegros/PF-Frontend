import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/index.js";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { createUsers } from "../redux/actions/index.js";
import { redirect, useNavigate } from "react-router-dom";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { getAllCartItems } from "../redux/actions/getCart.js";

const StyledBox = styled(Box)(({}) => ({
  width: 500,
  height: 250,
  padding: 40,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
}));

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.usersReducers.token);
  const [input, setInput] = useState({});
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  let email = input.email;

  

  let emailLogin ;
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(input));
    emailLogin = input.email;
    setInput({});
    dispatch(getAllCartItems(emailLogin));
    navigate("/welcome");
  }
  const clientId =
    "701558810586-vvvkadjt3u0n7472ff5jfm3bnteejl4h.apps.googleusercontent.com";
  function handleLoginGoogle(res) {
    const user = {
      name: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
    };
    dispatch(createUsers(user));
    emailLogin = user.email;
    console.log(emailLogin, "estoy dentro");
    navigate("/welcome");
  }
  function handleFailure(err) {
    console.log("failed:", err);
  }
console.log(emailLogin, "estoy afuera");
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId });
    });
  }, []);

  return (
    <>
      <Typography variant="h3" align="center" sx={{ paddingTop: 5 }}>
        TechStore - Login
      </Typography>
      <Grid container columnSpacing={4} pb={8} pt={5} justifyContent={"center"}>
        <Grid item sm={"auto"}>
          <form onSubmit={handleSubmit}>
            <StyledBox justifyContent={"space-evenly"}>
              <Typography gutterBottom variant="h5">
                Ingrese sus datos
              </Typography>
              <TextField
                label="Email"
                placeholder="Please enter you Email..."
                variant="outlined"
                fullWidth
                required
                name="email"
                value={input.email}
                onChange={handleChange}
              />

              <TextField
                label="Password"
                placeholder="Password"
                variant="outlined"
                fullWidth
                required
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
              <Box display={"flex"} alignItems={"center"}>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  sx={{ width: "50%" }}
                  disable={!input.email || !input.password}
                >
                  Login
                </Button>
                <Button href="/passwordReset">Olvidaste tu contraseña?</Button>
              </Box>
              <GoogleLogin
                clientId="701558810586-vvvkadjt3u0n7472ff5jfm3bnteejl4h.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLoginGoogle}
                onFailure={handleFailure}
                cookiePolicy={"single_host_origin"}
              ></GoogleLogin>
            </StyledBox>
          </form>
        </Grid>
        <Grid item sm={"auto"}>
          <StyledBox>
            <Typography variant="h5">Nuevo cliente</Typography>
            <Typography variant="subtitle1" pt={3}>
              Create una cuenta!
            </Typography>
            <Typography variant="subtitle1" pb={4}>
              Asi podras comprar en nuestra tienda
            </Typography>
            <Button href="/register" variant="contained">
              Registrarse
            </Button>
          </StyledBox>
        </Grid>
      </Grid>
    </>
  );
}
