import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

const addProduct = (product) => {
  console.log("Product added:", product);
};

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (product) {
      addProduct(product);
      setProduct("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Enter product name" value={product} onChange={(event) => setProduct(event.target.value)} />
      <Button type="submit" colorScheme="blue">
        Add Product
      </Button>
    </form>
  );
};

const Index = () => {
  return <ProductForm addProduct={addProduct} />;
};

export default Index;
