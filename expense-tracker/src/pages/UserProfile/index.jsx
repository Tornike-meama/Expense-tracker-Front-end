import { useSelector } from "react-redux";
import { selectUserData } from './../../Store/userStore/userSelectors';

const UserProfile = () => {
    const userData = useSelector(selectUserData);

    return (
        <ul>
            <li style={{background: "red"}}>{userData?.userName ?? "tets"}</li>
            <li style={{background: "red"}}>profile</li>
        </ul>
    )
};

export default UserProfile;