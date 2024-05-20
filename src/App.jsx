import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={2} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={10} bgColor={"tomato"}>
        Dolorem, hic totam.
      </Box>
      <Box m={20} bgColor={"tomato"}>
        Consequatur, exercitationem, voluptates.
      </Box>
      <Box bgColor={"tomato"}>Autem, iusto, sed!</Box>
      <Box bgColor={"tomato"}>Commodi, cumque tempore.</Box>
    </ChakraProvider>
  );
}

export default App;
