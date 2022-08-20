import { useState } from "react";
import { Box, Container } from "@mui/system";
import { Grid, Typography} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from "./styles.module.css";
import { MdAdd, MdOutlineShoppingBag } from 'react-icons/md';
import SideStatistics from "../../Components/SideStatistics/index.jsx";
import MyListItem from "../../Components/MyListItem/index.jsx";

export const Home = () => {

   const [tabValue, setTabvalue] = useState("1");

   return (
      <Container>
         <SideStatistics />
         <Box className={styles.upContainer}>
            <Grid container>
               <Grid item container minHeight={30}>
                  <Grid item xs={1}>My Card</Grid>
                  <Grid item xs={11} textAlign="right" >10.25.20 December 2019</Grid>
               </Grid>
               <Grid container>
                  <Grid item xs={1}>
                     <Box className={styles.addIcon}> <MdAdd /> </Box>
                  </Grid>
                  <Grid item container xs={11}>
                     <Swiper
                        spaceBetween={-60}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                     >
                        <SwiperSlide className={styles.swiperSlide}>
                           <img src="https://www.pngall.com/wp-content/uploads/2016/05/ATM-Card-Download-PNG.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                           <img src="https://www.pngall.com/wp-content/uploads/2016/05/ATM-Card-Download-PNG.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                           <img src="https://www.pngall.com/wp-content/uploads/2016/05/ATM-Card-Download-PNG.png"/>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperSlide}>
                           <img src="https://www.pngall.com/wp-content/uploads/2016/05/ATM-Card-Download-PNG.png"/>
                        </SwiperSlide>
                     </Swiper>
                  </Grid>
               </Grid>
            </Grid>
         </Box>
         <Box>
            <Grid container>
               <Grid item container minHeight={40} mt={6} mb={0 }>
                  <Grid item xs={6} textAlign="left">Recent transaction</Grid>
                  <Grid item xs={6} textAlign="right" >ViewAll</Grid>
               </Grid>
               <Grid item>
               <TabContext value={tabValue}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                     <TabList onChange={(e, nexValue) => setTabvalue(nexValue)} aria-label="lab API tabs example">
                        <Tab label="All" value="1" />
                        <Tab label="Income" value="2" />
                        <Tab label="Expense" value="3" />
                     </TabList>
                  </Box>
                  <TabPanel className={styles.tabPanel} value="1">
                     <MyListItem color="#d5a3a2" />
                     <MyListItem color="#a8c890" />
                     <MyListItem color="#d5a3a2" />
                  </TabPanel>
                  <TabPanel className={styles.tabPanel} value="2">Item Two</TabPanel>
                  <TabPanel className={styles.tabPanel} value="3">Item Three</TabPanel>
               </TabContext>
               </Grid>
            </Grid>
         </Box>
      </Container>
   )
};
