import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useEditPostMutation } from "../../hooks/postHooks";
import { useQueryClient } from "react-query";

export default function PostDeleteModal({
  setSelectedComment,
  selectedComment,
}) {
  const onClose = () => setSelectedComment(null);
  const toast = useToast();
  const bodyInputRef = useRef();
  const queryClient = useQueryClient();
  const { mutate } = useEditPostMutation({
    onSuccess: () => {
      // queryClient.invalidateQueries will refetch posts
      // data if delete post success
      queryClient.invalidateQueries("posts");
      onClose();
      toast({
        title: "Success",
        description: "You have successfully edited post",
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
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Comment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text my="12px" fontWeight="bold">
            Comment:
          </Text>
          <Textarea
            ref={bodyInputRef}
            defaultValue={selectedComment.body}
            placeholder="Here is a sample placeholder"
            size="sm"
            height="300px"
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            colorScheme="teal"
            onClick={() =>
              mutate({
                ...selectedComment,
                body: bodyInputRef.current.value,
              })
            }
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
