import React from "react";
import { Box, Button, ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          toast({
            title: "제목",
            description: "내용",
            status: "warning",
            duration: 1000,
            isClosable: true,
            position: "bottom-left",
            render: () => (
              <Box color={"white"} p={3} bg={"blue.500"}>
                Hello world
              </Box>
            ),
          });
        }}
      >
        Toast
      </Button>
    </ChakraProvider>
  );
}

export default App;
