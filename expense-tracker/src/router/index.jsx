import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Components/Header/index';
import PriviteRoute from "../router/priivteRoute/index";
import {Home} from '../pages/Home/index';
import Login from '../pages/Login/index';
import UserProfile from './../pages/UserProfile/index';
import { selectAuth } from '../Store/userStore/userSelectors.js';
import { userActions } from '../Store/userStore/store.js';

function MyRouter() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  useEffect(() => {
    dispatch(userActions.initiUserAuth());
  }, []);

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={isAuth ? <Home /> : <Login />} />
        <Route path='/profile' element={<PriviteRoute component={UserProfile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
