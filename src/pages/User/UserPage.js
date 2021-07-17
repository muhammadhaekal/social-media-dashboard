import { useUserHooks } from "../../hooks/userHooks";
import ErrorMessage from "../../components/ErrorMessage";
import MainContainer from "../../components/MainContainer";
import UserProfile from "./UserProfile";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Users() {
  let { userId } = useParams();
  const { status, data: user } = useUserHooks(userId);

  const renderUser = (status, user) => {
    switch (status) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <UserProfile user={user} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return <MainContainer>{renderUser(status, user)}</MainContainer>;
}
