import React from 'react';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import {Box, Stack} from "@mui/material";
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
    <MainHeader/>
    <Outlet/>
    <Box sx={{ flexGrow: 1}}/>
    <MainFooter/>
  </Stack>
  )
}

export default MainLayout
