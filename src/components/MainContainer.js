import { Box } from "@chakra-ui/react";

export default function MainContainer({ children }) {
  return (
    <Box display="flex" justifyContent="center" mt="12px">
      <Box width="1024px" display="flex" justifyContent="center">
        {children}
      </Box>
    </Box>
  );
}
