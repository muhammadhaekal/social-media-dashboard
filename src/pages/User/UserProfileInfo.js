import { Box, VStack, StackDivider, Text } from "@chakra-ui/react";

export default function UserProfileInfo({ user }) {
  const {
    name,
    username,
    email,
    phone,
    website,
    company: { name: companyName },
    address: { street, city, suite, zipcode },
  } = user;

  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
      mb="12px"
    >
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="md">Username: {username}</Text>
        <Text fontSize="md">Email: {email}</Text>
        <Text fontSize="md">Phone: {phone}</Text>
        <Text fontSize="md">Website: {website}</Text>
        <Text fontSize="md">Company: {companyName}</Text>
      </Box>
      <Box>
        <Text fontSize="md" fontWeight="bold">
          Address
        </Text>
        <Text fontSize="md">{street} St.</Text>
        <Text fontSize="md">{city} City</Text>
        <Text fontSize="md">{suite}</Text>
        <Text fontSize="md">{zipcode}</Text>
      </Box>
    </VStack>
  );
}
