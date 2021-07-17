import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import UserPosts from "./UserProfilePosts";
import UserAlbums from "./UserProfileAlbums";
import UserProfileInfo from "./UserProfileInfo";

export default function UserProfile({ user }) {
  return (
    <Box width="100%">
      <Text fontSize="3xl" fontWeight="bold" color="teal" textAlign="center">
        User Profile
      </Text>
      <UserProfileInfo user={user} />
      <Tabs isFitted isLazy variant="enclosed">
        <TabList mb="1em">
          <Tab>Posts</Tab>
          <Tab>Albums</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserPosts userId={user.id} />
          </TabPanel>
          <TabPanel>
            <UserAlbums userId={user.id} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
