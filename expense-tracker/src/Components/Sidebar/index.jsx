import { Grid, List, ListItem } from '@mui/material';
import { MdArrowBackIos } from "react-icons/md";

import styles from "./styles.module.css";

const SideBar = ({setOpenDrawer}) => {

    return (
        <List component="nav" className={`${styles.navBar} ${styles.close}`}>
            <ListItem className={styles.arrowIcon}>
                <MdArrowBackIos onClick={() => setOpenDrawer(o => !o)} />
            </ListItem>
            <ListItem className={styles.navItem}>item1</ListItem>
            <ListItem className={styles.navItem}>item1</ListItem>
            <ListItem className={styles.navItem}>item1</ListItem>
        </List>
    )
};

export default SideBar;