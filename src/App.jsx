import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Laborum?</Button>
        <Button colorScheme={"yellow"}>Aliquam!</Button>
        <Button colorScheme={"green"}>Non.</Button>
        <Button colorScheme={"pink"}>Similique.</Button>
        <Button colorScheme={"blue"}>Modi!</Button>
        <Button colorScheme={"cyan"}>Quaerat?</Button>
        <Button colorScheme={"purple"}>Suscipit!</Button>
        <Button colorScheme={"teal"}>Hic!</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Button
        </Button>
        <hr />
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Consequatur.
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Inventore?
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Delectus!
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
