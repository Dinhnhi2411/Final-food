import { Opacity } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import React from 'react'

function BannerRegister() {
  return (
    <div>
      <Container
     sx={{
            maxWidth:"lg",
            mt:5,
            mb:5,
            display:"flex",
            justifyContent:"center",
            opacity:"0.7",
            
        }}
      >
        <img
        src="./background/background.jpg"
        alt=""
       
        sx={{
            position:"relative",
            
        }}
        />
      </Container>
    </div>
  )
}

export default BannerRegister
