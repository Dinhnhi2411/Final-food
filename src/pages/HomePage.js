import { Container, Divider } from '@mui/material'
import React from 'react'
import Banner from '../components/banner/Banner'
import Cooperate from '../components/cooperate/Cooperate'
import BannerRegister from '../components/registerByEmail/BannerRegister'
import SliderShow from '../components/sliderShow/SliderShow'
import ProductHot from '../features/product/ProductHot'
import ProductTopList from '../features/product/ProductTopList'
function HomePage() {
  return (
    <Container
    >
      <SliderShow/>
      <Banner/>
      
      <ProductTopList/>
      <ProductHot/>
     
      <Cooperate/>
      <BannerRegister/>
    </Container>
  )
}

export default HomePage
