import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Modal,
    Input,
    Textarea,
    ModalFooter,
    IconButton,
  } from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";


const EditUser = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <IconButton 
            onClick={onOpen}
            variant="ghost"
            colorScheme="blue"
            size={"sm"}
            icon={<BiEdit size={20} />}
        />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>My new BFF ❤️</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder={user.name} />
                </FormControl>
                {/* Right */}
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input placeholder={user.role} />
                </FormControl>
                {/* Description */}
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder="Test"
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="green" mr={4}>
                  Edit
              </Button>
              <Button onClick={onClose} colorScheme="gray" mr={4}>
                  Close
              </Button>
            </ModalFooter>
  
  
          </ModalContent>
        </Modal>
      </>
    );
}

export default EditUser