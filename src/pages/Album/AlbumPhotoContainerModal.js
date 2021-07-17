import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
} from "@chakra-ui/react";

export default function AlbumPhotoContainerModal({
  isOpen,
  onClose,
  selectedPhoto,
}) {
  return (
    <>
      {selectedPhoto && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent pb="12px">
            <ModalHeader>{selectedPhoto.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedPhoto.thumbnailUrl}
                w="100%"
                cursor="pointer"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
