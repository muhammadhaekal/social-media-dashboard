import { Switch, Route } from "react-router-dom";
import UsersPage from "./pages/Users/UsersPage";
import UserPage from "./pages/User/UserPage";
import AlbumPage from "./pages/Album/AlbumPage";
import PostPage from "./pages/Post/PostPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Switch>
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route exact path="/user/:userId/post/:postId" component={PostPage} />
        <Route exact path="/album/:albumId" component={AlbumPage} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
