import {
  Button,
  Textarea,
  Text,
  Flex,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useCreateCommentMutation } from "../../hooks/commentHooks";
import { useQueryClient } from "react-query";

export default function PostCommentForm({ user: { name, email }, postId }) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const bodyInputRef = useRef();
  const { mutate } = useCreateCommentMutation({
    onSuccess: () => {
      // queryClient.invalidateQueries will refetch comments
      // data if delete comment success
      queryClient.invalidateQueries("comments");
      toast({
        title: "Success",
        description: "You have successfully created post",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    },
    onError: () =>
      toast({
        title: "Failed !",
        description: "Oops. Something went wrong. Please try again later",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      }),
  });

  return (
    <>
      <Divider borderColor="gray.200" mt="12px" mb="12px" />
      <Text my="12px" fontWeight="bold" fontSize="xl">
        Add New Comment
      </Text>
      <Text my="12px" fontWeight="bold">
        Comment:
      </Text>
      <Textarea
        ref={bodyInputRef}
        placeholder="write your comment ..."
        size="sm"
        height="80px"
      />
      <Flex flexDir="row-reverse" my="12px">
        <Button colorScheme="red" mr={3} onClick={() => {}} ml="8px">
          Cancel
        </Button>
        <Button
          colorScheme="teal"
          onClick={() =>
            mutate({
              name,
              email,
              body: bodyInputRef.current.value,
              postId,
            })
          }
        >
          Submit
        </Button>
      </Flex>
      <Divider borderColor="gray.200" mt="12px" mb="12px" />
    </>
  );
}
