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
} from "@chakra-ui/react";
import React from "react";
import { MdPostAdd } from "react-icons/md";

const CreateUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState("female");

  return (
    <>
      <Button onClick={onOpen}>
        <MdPostAdd size={24} />
      </Button>

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
                <Input placeholder="John Doe" />
              </FormControl>
              {/* Right */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Engineer" />
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

            <RadioGroup defaultValue="male" mt={4}>
              <Stack spacing={5} direction="row">
                <Radio colorScheme="blue" value="male">
                  Male
                </Radio>
                <Radio colorScheme="red" value="female">
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={4}>
                Add
            </Button>
            <Button onClick={onClose} colorScheme="gray" mr={4}>
                Close
            </Button>
          </ModalFooter>


        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUser;
