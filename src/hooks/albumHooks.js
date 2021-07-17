import { useQuery } from "react-query";

const fetchAlbum = async ({ id = "", userId = "" }) => {
  const queryUrl = userId ? `?userId=${userId}` : userId;

  const users = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}${queryUrl}`
  )
    .then((response) => response.json())
    .then((error) => error);

  return users;
};

// Hooks to fetch album by id
function useAlbumHooks(id) {
  return useQuery("album", () => fetchAlbum({ id }));
}

// Hooks to fetch albums
function useAlbumsHooks(userId) {
  return useQuery("albums", () => fetchAlbum({ userId }));
}

export { useAlbumsHooks, useAlbumHooks };
