import { Box, Text } from "@chakra-ui/react";
import { useUserHooks } from "../../hooks/userHooks";
import { Spinner } from "@chakra-ui/react";
import ErrorMessage from "../../components/ErrorMessage";

export default function PostUserDetail({
  userId,
  user: { name, username, email, phone, website, companyName },
}) {
  const { status, data: user } = useUserHooks(userId);

  const renderUser = (status, user) => {
    switch (status) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return (
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              User
            </Text>
            <Text fontSize="md">Name: {name}</Text>
            <Text fontSize="md">Username: {username}</Text>
            <Text fontSize="md">Email: {email}</Text>
            <Text fontSize="md">Phone: {phone}</Text>
            <Text fontSize="md">Website: {website}</Text>
            <Text fontSize="md">Company: {companyName}</Text>
          </Box>
        );
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return <Box>{renderUser(status, user)}</Box>;
}
