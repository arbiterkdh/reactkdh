import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <ChakraProvider>
        <Button colorScheme={"blue"}>클릭1</Button>
        <Button colorScheme={"orange"}>클릭2</Button>
        <Button
          sx={{
            color: "olive",
            fontSize: "1.5rem",
            padding: "10px",
          }}
          colorScheme={"gray"}
        >
          클릭3
        </Button>
      </ChakraProvider>
    </div>
  );
}

export default App;
