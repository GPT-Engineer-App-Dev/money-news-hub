import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Terms of Service
        </Heading>
        <Text fontSize="lg">
          Our terms of service details.
        </Text>
      </Box>
    </Container>
  );
};

export default TermsOfService;