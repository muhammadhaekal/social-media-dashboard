import { useQuery, useMutation } from "react-query";

const fetchPost = async ({ postId = "", userId = "" }) => {
  const queryUrl = userId ? `?userId=${userId}` : userId;
  const users = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}${queryUrl}`
  )
    .then((response) => response.json())
    .then((error) => error);

  return users;
};

// etch posts by userId
function usePostsHooks(userId) {
  return useQuery("posts", () => fetchPost({ userId }));
}

// fetch single post by postId
function usePostHooks(postId) {
  return useQuery("post", () => fetchPost({ postId }));
}

const deletePost = async (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to delete post
function useDeletePostMutation(config) {
  return useMutation(deletePost, config);
}

const updatePost = async (request) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${request.id}`, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to edit post
function useEditPostMutation(config) {
  return useMutation(updatePost, config);
}

const createPost = async (request) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to create post
function useCreatePostMutation(config) {
  return useMutation(createPost, config);
}

export {
  useCreatePostMutation,
  useDeletePostMutation,
  useEditPostMutation,
  usePostsHooks,
  usePostHooks,
};
