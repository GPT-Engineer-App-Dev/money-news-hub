import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Markets = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Markets News
        </Heading>
        <Text fontSize="lg">
          Latest updates and news from the financial markets.
        </Text>
      </Box>
    </Container>
  );
};

export default Markets;