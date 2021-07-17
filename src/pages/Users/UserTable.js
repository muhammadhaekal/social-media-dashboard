import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import UserTableContent from "./UserTableContent";

export default function UserTable({ users }) {
  const renderColumns = () => (
    <Tr>
      <Th>Name</Th>
      <Th>Email</Th>
      <Th>Phone</Th>
      <Th>Address</Th>
      <Th>Action</Th>
    </Tr>
  );

  return (
    <Box>
      <Text fontSize="3xl" fontWeight="bold" color="teal" textAlign="center">
        User List
      </Text>
      <Divider mt="12px" />
      <Table variant="simple" size="md">
        <Thead>{renderColumns()}</Thead>
        <Tbody>
          <UserTableContent users={users} />
        </Tbody>
        <Tfoot>{renderColumns()}</Tfoot>
      </Table>
    </Box>
  );
}
