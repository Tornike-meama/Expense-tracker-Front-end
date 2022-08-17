import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Components/Header/index';
import PriviteRoute from "../router/priivteRoute/index";
import {Home} from '../pages/Home/index';
import Login from '../pages/Login/index';
import UserProfile from './../pages/UserProfile/index';
import { selectAuth } from '../Store/userStore/userSelectors.js';
import SideBar from '../Components/Sidebar/index.jsx';
import { Grid } from '@mui/material';
import { initUser } from '../Store/userStore/actions.js';

function MyRouter() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  const [openDrawer, setOpenDrawer] = useState(true);
  const [mounted, setMounted] = useState(false);

  const userInit = async () => {
    await dispatch(initUser());
    setMounted(true);
  }

  useEffect(() => {
    userInit();
  }, []);

  return (
    mounted ?
      <BrowserRouter>
      {/* <Header /> */}
      <Grid container>
        <Grid item xs={4} maxWidth={190} style={{
              background: "red",
              height: "100vh",
              transition: "all 1s ease-out 0s",
              maxWidth: openDrawer ? "100%" : "90px"
          }}>
          <SideBar setOpenDrawer={setOpenDrawer} />
        </Grid>
        <Grid item xs={8}>
          <Routes>
              <Route path="/" element={isAuth ? <Home /> : <Login />} />
              <Route path='/profile' element={<PriviteRoute Component={UserProfile} />} />
            </Routes>
        </Grid>
      </Grid>
      </BrowserRouter>
    : null
  );
}

export default MyRouter;
