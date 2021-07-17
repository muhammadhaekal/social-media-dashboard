import { useAlbumsHooks } from "../../hooks/albumHooks";
import { Spinner } from "@chakra-ui/react";
import UserAlbumCard from "./UserAlbumCard";
import ErrorMessage from "../../components/ErrorMessage";

export default function UserAlbums({ userId }) {
  const { status, data: albums } = useAlbumsHooks(userId);

  const renderPosts = (status, albums) => {
    switch (status) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return (
          <>
            {albums &&
              albums.map(({ title, id }) => (
                <UserAlbumCard title={title} id={id} key={id} />
              ))}
          </>
        );
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return <>{renderPosts(status, albums)}</>;
}
