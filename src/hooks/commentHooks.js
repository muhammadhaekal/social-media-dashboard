import { useQuery, useMutation } from "react-query";

const fetchComments = async ({ postId = "" }) => {
  const queryUrl = postId ? `?postId=${postId}` : postId;

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments${queryUrl}`
  )
    .then((response) => response.json())
    .then((error) => error);

  return comments;
};

// Hooks to fetch comments by postId
function useCommentsHooks(postId) {
  return useQuery("album", () => fetchComments({ postId }));
}

const deleteComment = async (commentId) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to delete comment
function useDeleteCommentMutation(config) {
  return useMutation(deleteComment, config);
}

const updateComment = async (request) => {
  fetch(`https://jsonplaceholder.typicode.com/comments/${request.id}`, {
    method: "PUT",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to edit comment
function useEditCommentMutation(config) {
  return useMutation(updateComment, config);
}

const createComment = async (request) => {
  fetch(`https://jsonplaceholder.typicode.com/comments`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((error) => error);
};

// Hooks to create comment
function useCreateCommentMutation(config) {
  return useMutation(createComment, config);
}

export {
  useCommentsHooks,
  useDeleteCommentMutation,
  useCreateCommentMutation,
  useEditCommentMutation,
};
