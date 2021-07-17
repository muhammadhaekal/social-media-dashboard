import { Box, Text, Flex, Button, VStack, useToast } from "@chakra-ui/react";
import { ChatIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useDeletePostMutation } from "../../hooks/postHooks";
import { useQueryClient } from "react-query";

export default function UserPost({ post, setSelectedPost, userId }) {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { title, body, id } = post;

  const { mutate } = useDeletePostMutation({
    onSuccess: () => {
      // queryClient.invalidateQueries will refetch posts
      // data if delete post success
      queryClient.invalidateQueries("posts");
      toast({
        title: "Success",
        description: "You have successfully deleted post",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    },
    onError: () =>
      toast({
        title: "Failed",
        description: "Oops. Something went wrong. Please try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      }),
  });

  return (
    <Flex w="100%" borderWidth="1px" borderRadius="lg" p="12px" mb="12px">
      <Box flex="1">
        <Text fontSize="md" fontWeight="bold" mb="8px">
          {title}
        </Text>
        <Text fontSize="md">{body}</Text>
        <Link to={`/user/${userId}/post/${post.id}`}>
          <Flex mt="12px" alignItems="center">
            <ChatIcon w="4" h="4" mr="6px" />
            <Text
              fontSize="sm"
              textDecor="underline"
              fontWeight="bold"
              cursor="pointer"
            >
              See Comments
            </Text>
          </Flex>
        </Link>
      </Box>
      <VStack ml="12px">
        <Button
          w="100%"
          leftIcon={<EditIcon />}
          colorScheme="green"
          variant="outline"
          size="sm"
          onClick={() => setSelectedPost(post)}
        >
          Edit Post
        </Button>
        <Button
          w="100%"
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={() => mutate(id)}
        >
          Delete Post
        </Button>
      </VStack>
    </Flex>
  );
}
