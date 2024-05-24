import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Opinion
        </Heading>
        <Text fontSize="lg">
          Latest opinion pieces and editorials.
        </Text>
      </Box>
    </Container>
  );
};

export default Opinion;