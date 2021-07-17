import { usePostsHooks } from "../../hooks/postHooks";
import { Spinner } from "@chakra-ui/react";
import ErrorMessage from "../../components/ErrorMessage";
import UserPostCard from "../Post/PostCard";
import { useState } from "react";
import PostEditModal from "./UserProfilePostEditModal";
import UserPostForm from "./UserPostForm";

export default function UserPosts({ userId }) {
  const { status, data: posts } = usePostsHooks(userId);
  const [selectedPost, setSelectedPost] = useState(null);

  const renderPosts = (status, posts) => {
    switch (status) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return (
          <>
            <UserPostForm userId={userId} />
            {posts &&
              posts.map((post) => (
                <UserPostCard
                  key={post.id}
                  post={post}
                  setSelectedPost={setSelectedPost}
                  userId={userId}
                />
              ))}
            {selectedPost && (
              <PostEditModal
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
              />
            )}
          </>
        );
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  return <>{renderPosts(status, posts)}</>;
}
