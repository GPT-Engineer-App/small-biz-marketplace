import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ProductForm from "../components/ProductForm";

const Index = () => {
  const addProduct = (product) => {
    console.log("Product added:", product);
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to My Store
      </Heading>
      <Text mb={8}>Here you can find a variety of products. Use the form below to add new products to the store.</Text>
      <ProductForm addProduct={addProduct} />
    </Box>
  );
};

export default Index;
