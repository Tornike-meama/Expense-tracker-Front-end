import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Login from "../../pages/Login/index";
import { selectAuth } from "../../Store/userStore/userSelectors.js";

const PriviteRoute = ({Component}) => {
    const isAuth = useSelector(selectAuth);

    if(!isAuth) return  <Navigate to="/" />

    return <Component />
};

export default PriviteRoute;