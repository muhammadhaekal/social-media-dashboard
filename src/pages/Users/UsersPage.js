import { useUsersHooks } from "../../hooks/userHooks";
import ErrorMessage from "../../components/ErrorMessage";
import MainContainer from "../../components/MainContainer";
import UserTable from "./UserTable";
import { Spinner } from "@chakra-ui/react";

export default function Users() {
  const { status, data: users } = useUsersHooks();

  const renderUsers = (status, users) => {
    switch (status) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <UserTable users={users} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return <MainContainer>{renderUsers(status, users)}</MainContainer>;
}
