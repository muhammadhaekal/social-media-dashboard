import { useQuery } from "react-query";

const fetchUser = async (userId = "") => {
  const users = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
    .then((response) => response.json())
    .then((error) => error);

  return users;
};

// Hooks to fetch all user
function useUsersHooks() {
  return useQuery("users", () => fetchUser());
}

// Hooks to fetch single user data
function useUserHooks(userId) {
  return useQuery(["user", userId], () => fetchUser(userId));
}

export { useUsersHooks, useUserHooks };
