import { useState } from 'react';
import { useDispatch, } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';

import { getUserData, loginHandler } from '../../Store/userStore/actions.js';

import style from "./style.module.css";
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLogenData] = useState({email: "", password: ""});

  const onChange = (e) => setLogenData(o => ({...o, [e.target.name]: e.target.value}));

  const loginUser = async () => {
    let res = await dispatch(loginHandler(loginData));
    if(res) {
      // navigate("/profile");
      await dispatch(getUserData());
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
        </Grid>
    </Grid>
    </Container>
  );
}

export default Login;
