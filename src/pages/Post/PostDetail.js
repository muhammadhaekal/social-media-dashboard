import { Box, Text } from "@chakra-ui/react";

export default function PostDetail({ post: { body, title } }) {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">
        Post
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md">{body}</Text>
    </Box>
  );
}
