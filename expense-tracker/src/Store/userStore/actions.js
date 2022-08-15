import axios from 'axios';
import apiManager from '../../apiManager/index.js';
import { userActions } from './store';


export const loginHandler = action => async dispatch => {
    try {
        dispatch(userActions.startLoading());
        let loginInfo = {email: action.email, password: action.password};
        let res = await apiManager.postData("/identity/login", loginInfo);
        setToken(res?.token);
        dispatch(userActions.authuser());
        apiManager.setTokenInHeader(res?.token);
        return res;
    } catch (ex) {
        return false;
    } finally {
        dispatch(userActions.stopLoading());
    }
};

export const getUserData = () => async dispatch => {
    try {
        dispatch(userActions.startLoading());
        let res = await apiManager.getData(`/identity/getUserData`);
        dispatch(userActions.setLogedUserData(res?.data));
        return res?.data;
    } catch (ex) {
        return false;
    } finally {
        dispatch(userActions.stopLoading());
    }
};



// static methods
export const setToken = (token) => localStorage.setItem("userToken", token);