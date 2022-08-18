import axios from 'axios';
import apiManager from '../../apiManager/index.js';
import { setToken } from './helperMethods/index.jsx';
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
};

export const updateCurrentUser = (userData) => async dispatch => {
    try {
        dispatch(userActions.startLoading());
        let formData = new FormData();

        formData.append("UserName", userData?.userName);
        formData.append("PhoneNumber", userData?.phoneNumber);
        formData.append("Email", userData?.email);
        userData?.avatar?.name && formData.append("Avatar", userData?.avatar);
        
        let res = await apiManager.postData(`/identity/updateCurrentUser`, formData);
        dispatch(userActions.setLogedUserData(res?.data));
        return res?.data;
    } catch (ex) {
        return false;
    } finally {
        dispatch(userActions.stopLoading());
    }
};