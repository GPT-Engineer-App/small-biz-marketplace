import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Container, Stack, useColorModeValue, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTA0NzA5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another sample product.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTA0NzA5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products here
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Box textAlign="right" mb={4}>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
      </Box>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Welcome to Our Store
      </Heading>
      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden" p={4} bg={useColorModeValue("white", "gray.700")}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h2" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={2}>{product.description}</Text>
            <Text fontWeight="bold" mb={4}>
              ${product.price.toFixed(2)}
            </Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
      <Box mt={8}>
        <Heading as="h2" size="lg" mb={4}>
          Cart
        </Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          <Stack spacing={4}>
            {cart.map((item, index) => (
              <Box key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Container>
  );
};

export default Index;
