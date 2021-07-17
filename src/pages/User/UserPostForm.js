import {
  Button,
  Input,
  Textarea,
  Text,
  Flex,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useCreatePostMutation } from "../../hooks/postHooks";
import { useRef } from "react";
import { useQueryClient } from "react-query";

export default function PostForm({ userId }) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  const { mutate } = useCreatePostMutation({
    onSuccess: () => {
      // queryClient.invalidateQueries will refetch posts
      // data if delete post success
      queryClient.invalidateQueries("posts");
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
      <Text my="12px" fontWeight="bold" fontSize="2xl">
        Create New Post
      </Text>
      <Text my="12px" fontWeight="bold">
        Title:
      </Text>
      <Input type="text" placeholder="Title..." ref={titleInputRef} />
      <Text my="12px" fontWeight="bold">
        Content:
      </Text>
      <Textarea
        ref={bodyInputRef}
        placeholder="Content..."
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
              userId: userId,
              title: titleInputRef.current.value,
              body: bodyInputRef.current.value,
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
