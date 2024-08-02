import { Button, Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"
import { useState } from "react";


export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {

  const [users, setUsers] = useState([]);
  
  return (
    <Stack>
      <Navbar setUsers={setUsers} />

      <Container maxW={"1440px"} my={4}>
        <Text 
        fontSize={{base: "3xl", md: "50"}}
        fontWeight={"bold"} 
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
        >
          <Text
            as={"span"}
            color={"powderblue"}
          >
            My Besties 
          </Text>
          🔥
        </Text>

        <UserGrid users={users} setUsers={setUsers} />
      </Container>

    </Stack>
  )
}

export default App
