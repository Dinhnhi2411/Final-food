import React from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import {Box} from "@mui/material";

function MainLayout() {
  return (
    <div>
     <MainHeader/>
     <Box sx={{ flexGrow: 1 }}/>
     <MainFooter/>
    </div>
  )
}

export default MainLayout
