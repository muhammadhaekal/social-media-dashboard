import { Tr, Td, Button, Stack } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function UserTableContent({ users }) {
  return (
    <>
      {users &&
        users.map(
          ({ name, email, phone, id, address: { city, street, zipcode } }) => (
            <Tr key={id}>
              <Td>{name}</Td>
              <Td>{email}</Td>
              <Td>{phone}</Td>
              <Td>
                <div>{`${city} City`}</div>
                <div>{`${street} St`}</div>
                <div>{`${zipcode}`}</div>
              </Td>
              <Td>
                <Stack direction="row" spacing={4}>
                  <Link to={`/user/${id}`}>
                    <Button
                      leftIcon={<ViewIcon />}
                      colorScheme="teal"
                      variant="solid"
                    >
                      View Profile
                    </Button>
                  </Link>
                </Stack>
              </Td>
            </Tr>
          )
        )}
    </>
  );
}
