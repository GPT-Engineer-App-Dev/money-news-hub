import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Tech = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          Tech News
        </Heading>
        <Text fontSize="lg">
          Latest updates and news from the technology sector.
        </Text>
      </Box>
    </Container>
  );
};

export default Tech;