import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import {Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';

import { getUserData, loginHandler } from '../../Store/userStore/actions.js';

import PageLoader from '../../Components/PageLoader/index.jsx';
import { selectUserLoading } from './../../Store/userStore/userSelectors';
import MyButton from './../../Components/MyButton/index';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoading = useSelector(selectUserLoading);
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
    <PageLoader isLoading={false}>
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
          <MyButton variant="contained" isLoading={userLoading} onClick={async () => {
          loginUser();
            // let res = await apiManager.postData("/identity/login", loginData);
            // if(res.isError === false) {
            //   localStorage.setItem("userToken", res?.token);
            // }
          }}>Log In</MyButton>
          </Grid>
      </Grid>
      </Container>
    </PageLoader>
  );
}

export default Login;
