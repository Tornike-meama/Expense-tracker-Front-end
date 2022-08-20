import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { MdArrowBack } from "react-icons/md";
import MyChart from "../Chart/index.jsx";

import styles from './styles.module.css';

const SideStatistics = () => {

    return (
      <Box className={styles.contaner}>
         <Container className={styles.upContainer}>
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
               <Grid item xs={6} className={styles.incomeContainer}>
                  <span>
                     <MdArrowBack />
                  </span>
                     <label style={{fontSize: 16, color: "#565758"}}>$</label>2385.44
               </Grid>
               <Grid item xs={6} className={styles.upcomeContainer}>
                   <span >
                     <MdArrowBack />
                  </span>
                  <label style={{fontSize: 16, color: "#565758"}}>$</label>2385.44
               </Grid>
            </Grid>
            <Box className={styles.line}></Box>
         </Container>
         <Container className={styles.downContainer}>
            <MyChart />
         </Container>
      </Box>
    )
};

export default SideStatistics;