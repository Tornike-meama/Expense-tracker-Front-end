
import { Box, Grid, Typography } from '@mui/material';
import { MdOutlineShoppingBag } from 'react-icons/md';

import styles from "./styles.module.css";

const MyListItem = ({isInCome = false, amount = 0.00, category}) => {

   return (
      <Grid container className={styles.tabPanelItem}>
      <Grid item xs={2}>
         <Box className={styles.typeIcon}><MdOutlineShoppingBag /></Box>
      </Grid>
      <Grid item xs={8} className={styles.titleContainer}>
         <Typography variant="h6" fontSize={15}>{category ?? ""}</Typography>
         <Typography variant="p" fontSize={10}>Company Name</Typography>
      </Grid>
      <Grid item xs={2} className={styles.priceContainer}>
         <Typography variant="h6" fontSize={15} color={isInCome ? '#b2ce9c' : '#dd9494'}>{amount}</Typography>
         <Typography variant="p" fontSize={10}>oct 17</Typography>
      </Grid>
      </Grid>
    )
};

export default MyListItem;