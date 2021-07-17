import { Box, Grid, Image, useDisclosure } from "@chakra-ui/react";
import AlbumPhotoContainerModal from "./AlbumPhotoContainerModal";
import { useState } from "react";

export default function AlbumPhotoContainer({ photos }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={6}
        data-testid="images-container"
      >
        {photos &&
          photos.map(({ thumbnailUrl, id, title, url }) => (
            <Box
              w="100%"
              bg="blue.500"
              data-testid="image-container"
              onClick={() => {
                setSelectedPhoto({ thumbnailUrl, title });
                onOpen();
              }}
              key={id}
            >
              <Image
                w="100%"
                cursor="pointer"
                data-testid="image"
                testdong={id}
                src={thumbnailUrl}
                url={url}
              />
            </Box>
          ))}
      </Grid>
      <AlbumPhotoContainerModal
        isOpen={isOpen}
        onClose={onClose}
        selectedPhoto={selectedPhoto}
      />
    </>
  );
}
