import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Login from "../../pages/Login/index";
import { selectAuth } from "../../Store/userStore/userSelectors.js";

const PriviteRoute = ({component}) => {
    const isAuth = useSelector(selectAuth);

    if(!isAuth) return  <Navigate to="/login" />

    return <component />
};

export default PriviteRoute;