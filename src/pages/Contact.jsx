import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg">
          Get in touch with the Financial Times.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact;