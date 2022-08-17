import { useDispatch } from 'react-redux';
import { Grid, List, ListItem } from '@mui/material';
import { MdArrowBackIos } from "react-icons/md";

import styles from "./styles.module.css";
import { userActions } from '../../Store/userStore/store.js';
import { Link } from 'react-router-dom';

const SideBar = ({setOpenDrawer}) => {
    const dispatch = useDispatch();

    return (
        <List component="nav" className={`${styles.navBar} ${styles.close}`}>
            <ListItem className={styles.arrowIcon}>
                <MdArrowBackIos onClick={() => setOpenDrawer(o => !o)} />
            </ListItem>
            <ListItem className={styles.navItem}>
                <Link to="/profile">profile</Link>
            </ListItem>
            <ListItem className={styles.navItem}>item1</ListItem>
            <ListItem className={styles.navItem}>item1</ListItem>
            <ListItem className={styles.navItem} onClick={() => dispatch(userActions.logoutUser())}>
                logOut
            </ListItem>
        </List>
    )
};

export default SideBar;