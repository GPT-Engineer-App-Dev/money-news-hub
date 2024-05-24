import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box w="full" bg="gray.100" p={5} borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Image src="/images/featured-article.jpg" alt="Featured Article" mb={4} />
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 1
            </Heading>
            <Image src="/images/article1.jpg" alt="Article 1" mb={2} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 2
            </Heading>
            <Image src="/images/article2.jpg" alt="Article 2" mb={2} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box bg="gray.100" p={5} borderRadius="md">
            <Heading as="h3" size="md" mb={2}>
              Article 3
            </Heading>
            <Image src="/images/article3.jpg" alt="Article 3" mb={2} />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;