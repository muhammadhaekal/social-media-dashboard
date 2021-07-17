import { usePostHooks } from "../../hooks/postHooks";
import { useCommentsHooks } from "../../hooks/commentHooks";
import { useUserHooks } from "../../hooks/userHooks";
import { useParams } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
import PostDetail from "./PostDetail";
import PostUserDetail from "./PostUserDetail";
import {
  Spinner,
  ErrorMessage,
  Box,
  Text,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import PostCommentCard from "./PostCommentCard";
import PostCommentForm from "./PostCommentForm";
import PostCommentEditModal from "./PostCommentEditModal";
import { useState } from "react";

export default function PostPage() {
  const { postId, userId } = useParams();
  const [selectedComment, setSelectedComment] = useState(null);
  const { status: fetchPostStatus, data: post } = usePostHooks(postId);
  const { status: fetchCommentsStatus, data: comments } = useCommentsHooks(
    postId
  );
  const { status: fetchUserStatus, data: user } = useUserHooks(userId);

  const renderPostDetail = (fetchPostStatus, post) => {
    switch (fetchPostStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <PostDetail post={post} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  const renderUserDetail = (fetchUserStatus, user) => {
    switch (fetchUserStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <PostUserDetail userId={userId} user={user} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  const renderComments = (fetchCommentsStatus, comments) => {
    switch (fetchCommentsStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return (
          <>
            {comments &&
              comments.map((comment) => (
                <PostCommentCard
                  comment={comment}
                  key={comment.id}
                  setSelectedComment={setSelectedComment}
                />
              ))}
            {selectedComment && (
              <PostCommentEditModal
                setSelectedComment={setSelectedComment}
                selectedComment={selectedComment}
              />
            )}
          </>
        );
      case "error":
      default:
        return <ErrorMessage />;
    }
  };

  const renderCommentForm = (fetchUserStatus, user) => {
    switch (fetchUserStatus) {
      case "idle":
      case "loading":
        return <Spinner />;
      case "success":
        return <PostCommentForm user={user} postId={postId} />;
      case "error":
      default:
        return <ErrorMessage />;
    }
  };
  return (
    <MainContainer>
      <Box width="100%">
        <Text fontSize="3xl" fontWeight="bold" color="teal" textAlign="center">
          Post
        </Text>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          mb="12px"
        >
          {renderUserDetail(fetchUserStatus, user)}
          {renderPostDetail(fetchPostStatus, post)}
        </VStack>
        {renderCommentForm(fetchUserStatus, user)}
        {renderComments(fetchCommentsStatus, comments)}
      </Box>
    </MainContainer>
  );
}
