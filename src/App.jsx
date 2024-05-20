import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.900"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"green"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"green"}>
        Blanditiis consequuntur, doloremque?
      </Box>
      <Box mb={"10px"} bgColor={"green"}>
        Earum molestias, obcaecati.
      </Box>
      <Box ml={"10px"} bgColor={"green"}>
        Dignissimos, dolorem eum.
      </Box>
      <Box mr={"10px"} bgColor={"green"}>
        Harum, illum, recusandae.
      </Box>
      <Box mx={"10px"} bgColor={"green"}>
        Consequatur nemo, reiciendis.
      </Box>
      <Box my={"10px"} bgColor={"green"}>
        Amet exercitationem, quisquam!
      </Box>
      <hr />
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Quod, sint, veniam!
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Doloremque, esse, magni?
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Itaque, magnam, similique!
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Dignissimos, fuga, quis.
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Dignissimos, illo quod.
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Ipsa, porro quod.
      </Box>
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"500px"}>Consequuntur, eaque, quod.</Box>
    </ChakraProvider>
  );
}

export default App;
