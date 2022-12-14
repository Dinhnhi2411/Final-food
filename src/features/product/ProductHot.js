import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { newProducts, saleProducts } from "../../data/Data";
import ProductCard from "./ProductCard";

export default function ProductHot() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          fontSize: { xs: 18, md: 25, lg: 35 },
          m: 2,
          fontFamily: "Comic Sans MS",
          color: "#000",
        }}
      >
        Hot Products
      </Button>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",

            justifyContent: "center",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Discount"
              value="1"
              sx={{
                fontSize: { xs: 14, md: 18, lg: 19 },
              }}
            />
            <Tab
              label="New Product"
              value="2"
              sx={{
                fontSize: { xs: 14, md: 18, lg: 19 },
              }}
            />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Grid container spacing={1} mt={0}>
            {saleProducts.map((item, index) => (
              <Grid key={item.id} item xs={6} md={4} lg={3}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Grid container spacing={1} mt={0}>
            {newProducts.map((item, index) => (
              <Grid key={item.id} item xs={6} md={4} lg={3}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
