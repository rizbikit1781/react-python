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
  Radio,
  RadioGroup,
  Stack,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { BASE_URL } from "../App";

const CreateUser = ({ setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const toast = useToast();

  const handleCreateUser = async (e) => {
    e.preventDefault(); //prevent page refresh
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        status: "success",
        title: "Yayy!",
        description: "Friend created successfully",
        duration: 2000,
        position: "top-center",
      });
      onClose();
      
      setUsers((prevUsers) => [...prevUsers, data])

    } catch (error) {
      toast({
        status: "error",
        title: "An error occurred.",
        description: error.message,
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        <MdPostAdd size={24} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader>My new BFF ❤️</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* Left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    required
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>
                {/* Right */}
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    required
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>
                {/* Description */}
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder="Test"
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Stack spacing={5} direction="row">
                  <Radio
                    colorScheme="blue"
                    value="male"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Male
                  </Radio>
                  <Radio
                    colorScheme="red"
                    value="female"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="green" mr={4} type="submit"
              isLoadind={isLoading}>
                Add
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

export default CreateUser;
