import { Box, Text, Flex, Button, VStack, useToast } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeleteCommentMutation } from "../../hooks/commentHooks";
import { useQueryClient } from "react-query";

export default function PostCommentCard({ comment, setSelectedComment }) {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { mutate } = useDeleteCommentMutation({
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
  let { name, email, body, id } = comment;

  return (
    <Flex w="100%" borderWidth="1px" borderRadius="lg" p="12px" mb="12px">
      <Box flex="1">
        <Text fontSize="md" fontWeight="bold" mb="8px">
          {`${name} (${email})`}
        </Text>
        <Text fontSize="md">{body}</Text>
      </Box>
      <VStack ml="12px">
        <Button
          w="100%"
          leftIcon={<EditIcon />}
          colorScheme="green"
          variant="outline"
          size="sm"
          onClick={() => setSelectedComment(comment)}
        >
          Edit Comment
        </Button>
        <Button
          w="100%"
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={() => mutate(id)}
        >
          Delete Comment
        </Button>
      </VStack>
    </Flex>
  );
}
