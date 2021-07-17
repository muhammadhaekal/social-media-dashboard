import { useQuery } from "react-query";

const fetchPhotos = async ({ albumId = "" }) => {
  const queryUrl = albumId ? `?albumId=${albumId}` : albumId;

  const users = await fetch(
    `https://jsonplaceholder.typicode.com/photos${queryUrl}`
  )
    .then((response) => response.json())
    .then((error) => error);

  return users;
};

// Hooks to fetch photo by albumId
function usePhotosHooks(albumId) {
  return useQuery("photos", () => fetchPhotos({ albumId }));
}

export { usePhotosHooks };
