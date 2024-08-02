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
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BASE_URL } from "../App";

const EditUser = ({ user, setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [inputs, setInputs] = useState({
    name: user.name,
    role: user.role,
    description: user.description,
  });

  const handleEditUser = async (e) => {
    e.preventDefault(); //prevent page refresh
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? data : u))
      );
      toast({
        title: "Edit successful",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-center",
      });
    } catch (error) {
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        <form onSubmit={handleEditUser}>
          <ModalContent>
            <ModalHeader>My new BFF ❤️</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input 
                  value={inputs.name} 
                  onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </FormControl>
                {/* Right */}
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input  value={inputs.role} 
                  onChange={(e) => setInputs((prev) => ({ ...prev, role: e.target.value }))}/>
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
              <Button
                colorScheme="green"
                mr={4}
                type="submit"
                isLoading={isLoading}
              >
                Update
              </Button>
              <Button onClick={onClose} colorScheme="gray" mr={4}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default EditUser;
