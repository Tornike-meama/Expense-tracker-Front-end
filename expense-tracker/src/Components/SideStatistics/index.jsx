import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system"

import styles from './styles.module.css';

const SideStatistics = () => {

    return (
      <Container className={styles.contaner}>
         <Box textAlign="right">ToDay</Box>
         <Typography variant="subtitle1" gutterBottom fontWeight="bold">Balance</Typography>
         <Typography
            gutterBottom 
            variant="h5"
            fontWeight="bold" 
            color="#370a79"
            mt={3} 
         ><label style={{fontSize: 16, color: "#565758"}}>$</label>2385.44</Typography>
         <Typography variant="subtitle1" gutterBottom >1122 2233 2255 XXXX</Typography>
         <Grid container mt={4}>
            <Grid item xs={6}>income</Grid>
            <Grid item xs={6}>upcome</Grid>
         </Grid>
         <Box className={styles.line}></Box>
      </Container>
    )
};

export default SideStatistics;