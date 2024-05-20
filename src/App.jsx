import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>모달 오픈!</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TITLE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Lorem ipsum dolor sit amet.</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>CLOSE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
