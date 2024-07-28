import { Button, Container, Stack, Text } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import UserGrid from "./components/UserGrid"

function App() {
  
  return (
    <Stack>
      <Navbar />

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

        <UserGrid />
      </Container>

    </Stack>
  )
}

export default App
