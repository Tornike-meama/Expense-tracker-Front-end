import { Button, List, ListItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../Store/userStore/actions.js";
import { selectUserData } from './../../Store/userStore/userSelectors';

import styes from "./styles.module.css";

const UserProfile = () => {
  const dispatch = useDispatch();

  // states
  const userInfo = useSelector(selectUserData);
  const [userData, setUserData] = useState({});

  const userOnChange = e => setUserData(o => ({...o, [e.target.name]: e.target.value}))

  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  return (
    <Box>
      <List>
        <ListItem>
          <TextField
            type="text"
            name="userName"
            label="Name"
            value={userData?.userName ?? ""}
            onChange={userOnChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            type="number"
            name="phoneNumber"
            label="Phone Number"
            value={userData?.phoneNumber ?? ""}
            onChange={userOnChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            type="text"
            name="email"
            label="Email"
            value={userData?.email ?? ""}
            onChange={userOnChange}
          />
        </ListItem>
        <ListItem>
          <Box className={styes.avatarContainer}>
           <Box className={styes.avatar}>
            <img src={userData?.avatarUrl} />
           </Box>
            <TextField
              type="file"
              name="avatar"
              label="Avatar"
              // value={userData?.avatar ?? ""}
              onChange={e => setUserData(o => e.target.files?.length && ({...o, avatarUrl: URL.createObjectURL(e.target.files[0]),   avatar: e.target.files[0]}))}
            />
          </Box>
        </ListItem>
      </List>
      <Button onClick={() => dispatch(updateCurrentUser(userData))}>
        Update
      </Button>
    </Box>
  )
};

export default UserProfile;