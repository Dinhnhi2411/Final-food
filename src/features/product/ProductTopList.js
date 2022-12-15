import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { products } from "../../data/Data";
import ProductCard from "./ProductCard";

function ProductTopList() {
  return (
    <div>
      <Box
        sx={{
          mt: { xs: 9, md: 12 },
          mb: 15,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Button
          sx={{
            fontSize: { xs: 18, md: 25, lg: 35 },
            m: 2,
            fontFamily: "Comic Sans MS",
            color:"#000"
          }}
        >
          Top Selling
        </Button>
        <Grid container spacing={1} mt={0}>
          {products.map((product, index) => (
            <Grid key={product.id} item xs={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductTopList;
