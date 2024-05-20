import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { AddIcon, EmailIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button>
          <AddIcon />
        </Button>
        <Button leftIcon={<EmailIcon />}>email</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
