import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="brand.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" color="white">Home</Link>
            <Link as={RouterLink} to="/world" color="white">World</Link>
            <Link as={RouterLink} to="/business" color="white">Business</Link>
            <Link as={RouterLink} to="/tech" color="white">Tech</Link>
            <Link as={RouterLink} to="/markets" color="white">Markets</Link>
            <Link as={RouterLink} to="/opinion" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Box py={8}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" maxW="container.xl" mx="auto" px={4}>
          {/* Headlines Section */}
          <Box flex="2" mr={{ md: 8 }}>
            <Heading as="h2" size="xl" mb={4}>Headlines</Heading>
            <VStack spacing={4} align="start">
              <Box>
                <Heading as="h3" size="md">Headline 1</Heading>
                <Text>Summary of the first headline article. This is a brief overview of the news content.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">Headline 2</Heading>
                <Text>Summary of the second headline article. This is a brief overview of the news content.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">Headline 3</Heading>
                <Text>Summary of the third headline article. This is a brief overview of the news content.</Text>
              </Box>
            </VStack>
          </Box>

          {/* Articles Section */}
          <Box flex="3">
            <Heading as="h2" size="xl" mb={4}>Articles</Heading>
            <VStack spacing={8} align="start">
              <Box>
                <Heading as="h3" size="lg">Article 1</Heading>
                <Text>Full content of the first article. This section contains detailed information about the news story.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">Article 2</Heading>
                <Text>Full content of the second article. This section contains detailed information about the news story.</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">Article 3</Heading>
                <Text>Full content of the third article. This section contains detailed information about the news story.</Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/privacy" color="white">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms" color="white">Terms of Service</Link>
            <Link as={RouterLink} to="/contact" color="white">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;