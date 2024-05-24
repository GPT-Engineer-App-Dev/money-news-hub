import { Box, Container, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Privacy Policy
        </Heading>
        <Text fontSize="lg">
          Our privacy policy details.
        </Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;