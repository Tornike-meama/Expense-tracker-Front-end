import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';

import { userActions } from "../../Store/userStore/store";

import style from "./style.module.css";
import { getUserData, loginHandler } from '../../Store/userStore/actions.js';
import { selectUserData } from '../../Store/userStore/userSelectors.js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();

  const [loginData, setLogenData] = useState({email: "", password: ""});

  const onChange = (e) => setLogenData(o => ({...o, [e.target.name]: e.target.value}));

  const loginUser = async () => {
    let res = await dispatch(loginHandler(loginData));
    console.log(res, 'res')
    if(res) {
      navigate("/profile")
    }
  }

  return (
    <Container maxWidth={500}>
      <Grid container spacing={2} width="100%" direction="column" alignItems="center">
        <Grid item lg={12}>
          <TextField 
            variant="outlined"
            type="email"
            name="email"
            label="Email"
            value={loginData.email}
            onChange={onChange}
          />
        </Grid>
        <Grid item lg={12}>
          <TextField 
            variant="outlined"
            type="password"
            name="password"
            label="password"
            value={loginData.password}
            onChange={onChange}
          />
        </Grid>
        <Grid item lg={12}>
        <Button variant="contained" onClick={async () => {
         loginUser();
          // let res = await apiManager.postData("/identity/login", loginData);
          // if(res.isError === false) {
          //   localStorage.setItem("userToken", res?.token);
          // }
        }}>Log In</Button>
        <Button variant="contained" onClick={async () => {
         let res = await dispatch(getUserData("ed45b449-6cde-43ac-a3b7-112d5d9aa46c"));
         console.log(userData, 'userdata');
          // let res = await apiManager.postData("/identity/login", loginData);
          // if(res.isError === false) {
          //   localStorage.setItem("userToken", res?.token);
          // }
        }}>get user data</Button>
        </Grid>
    </Grid>
    </Container>
  );
}

export default Login;
