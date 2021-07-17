import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

export default function ErrorMessage() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Oops, something went wrong !</AlertTitle>
      <AlertDescription>Please reload the page and try again</AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
}
