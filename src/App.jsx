import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Button sx={{ color: "orange", bgColor: "black" }} colorScheme={"blue"}>
        Lorem.
      </Button>
    </ChakraProvider>
  );
}

export default App;
