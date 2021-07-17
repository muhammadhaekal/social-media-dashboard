import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function UserAlbum({ title, id }) {
  return (
    <Flex w="100%" borderWidth="1px" borderRadius="lg" p="12px" mb="12px">
      <Box flex="1">
        <Text fontSize="md" fontWeight="bold" mb="8px">
          {`${title} album`}
        </Text>
      </Box>
      <VStack ml="12px">
        <Link to={`/album/${id}`}>
          <Button
            w="100%"
            leftIcon={<ViewIcon />}
            colorScheme="teal"
            variant="solid"
            size="sm"
          >
            See Photos
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
