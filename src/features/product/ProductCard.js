import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { products } from "../../data/Data";

export default function ProductCard({ product }) {
  // console.log(product);

  return (
    <>
      <Card
        sx={{
          
        //   xs: 10,
          borderRadius: 5,
          m: 3,
          backgroundColor: "primary.light",
        }}
      >
        <CardMedia
          sx={{
            height: {
              xs: 130,
              md: 200,
              lg: 250,
            },
          }}
          component="img"
          image={product.cover}
          alt=""
          key={product.id}
        />
        <CardContent
          sx={{
            height: { xs: 90 },
            mt: { xs: 2 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{
              color: "primary.darker",
              display: "flex",
              justifyContent: "center",
              fontSize: { xs: 14, md: 18, lg: 20 },
              fontWeight: "700",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            size="medium"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "primary.darker",
              fontSize: { xs: 11, md: 18, lg: 18 },
              fontWeight: "500",
            }}
          >
            {product.price} VNĐ
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
