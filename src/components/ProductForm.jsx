import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, description, price: parseFloat(price), image });
  };

  return (
    <Box mt={8}>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Product Name</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Image URL</FormLabel>
          <Input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
