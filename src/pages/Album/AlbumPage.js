import { useParams } from "react-router-dom";
import { useAlbumHooks } from "../../hooks/albumHooks";
import { usePhotosHooks } from "../../hooks/photoHooks";
import { Box, Text, Divider } from "@chakra-ui/react";
import MainContainer from "../../components/MainContainer";
import { Spinner } from "@chakra-ui/react";
import ErrorMessage from "../../components/ErrorMessage";
import AlbumPhotoContainer from "./AlbumPhotoContainer";

export default function AlbumPage() {
  let { albumId } = useParams();
  const { status: fetchAlbumStatus, data: album } = useAlbumHooks(albumId);
  const { status: fetchPhotosStatus, data: photos } = usePhotosHooks(albumId);

  const renderAlbumInfo = (fetchAlbumStatus, album) => {
    switch (fetchAlbumStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return (
          <Text fontSize="2xl" fontWeight="bold">
            Album : {album.title}
          </Text>
        );
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  const renderPhotos = (fetchPhotosStatus, photos) => {
    switch (fetchPhotosStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <AlbumPhotoContainer photos={photos} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return (
    <MainContainer>
      <Box width="100%">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="teal"
          textAlign="center"
          data-testid="header"
        >
          Album
        </Text>
        {renderAlbumInfo(fetchAlbumStatus, album)}
        <Divider borderColor="gray.200" mt="12px" mb="12px" />
        {renderPhotos(fetchPhotosStatus, photos)}
      </Box>
    </MainContainer>
  );
}
