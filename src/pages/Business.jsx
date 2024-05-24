import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Business = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Business News
        </Heading>
        <Text fontSize="lg">
          Latest updates and news from the business world.
        </Text>
      </Box>
    </Container>
  );
};

export default Business;