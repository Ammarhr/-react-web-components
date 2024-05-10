import styles from "./Subscription.scss?inline";
import { useRef } from "react";
import {
  ChakraProvider,
  Flex,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
  // ModalFooter,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";

import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
import MiUButton from '@mui/material/Button';


// import theme from "./theme";
// eslint-disable-next-line react/prop-types
const Subscription = ({ username, shouldDisplayMentions, value }) => {
  console.log("value", value)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <style>
        <ChakraProvider>
          <Button color={"red"}>hello</Button>
        </ChakraProvider>
        {styles}
      </style> {/* // 👈 Import your styles */}
      <div id="#root" className="subscription">
        <h2 className="subscription__title">Subscription</h2>
        <p className="subscription__greeting">Hello {username}!</p>

        <label htmlFor="email">
          <input
            id="email"
            type="email"
            className="subscription__input"
            placeholder="Enter your email"
          />
        </label>

        {shouldDisplayMentions && (
          <p className="subscription__mentions">
            My mention should be display here...
          </p>
        )}
      </div>
      <CacheProvider value={value}>
        <ChakraProvider>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
            size={"full"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
                <Flex width={"350px"} backgroundColor={"red"}>
                  <Heading color={"red"} fontSize={"75px"}>
                    Web-components testing chakra ui
                  </Heading>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </Flex>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
              <Button variant="ghost">Secondary Action</Button>
            </DrawerContent>
          </Drawer>

          {/* <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
        </ChakraProvider>
        <MiUButton >MUI</MiUButton>
      </CacheProvider>
    </>
  );
};

export default Subscription;
