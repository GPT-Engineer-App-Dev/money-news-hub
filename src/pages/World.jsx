import { Box, Container, Heading, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          World News
        </Heading>
        <Text fontSize="lg">
          Latest updates and news from around the world.
        </Text>
      </Box>
    </Container>
  );
};

export default World;