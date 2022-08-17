import axios from 'axios';
import apiManager from '../../apiManager/index.js';
import { userActions } from './store';


export const loginHandler = action => async dispatch => {
    try {
        dispatch(userActions.startLoading());
        let loginInfo = {email: action.email, password: action.password};
        let res = await apiManager.postData("/identity/login", loginInfo);
        setToken(res?.token);
        dispatch(userActions.loginUser());
        apiManager.setTokenInHeader(res?.token);
        return res;
    } catch (ex) {
        console.log(ex)
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

export const initUser = () => async dispatch => {
    apiManager.setTokenInHeader(localStorage.getItem("userToken"));
    let res = await dispatch(getUserData());
    if(!res) dispatch(userActions.logoutUser());
    else dispatch(userActions.loginUser())
}


// static methods
export const setToken = (token) => localStorage.setItem("userToken", token);
export const removeToken = () => localStorage.removeItem("userToken");