import { Box } from "@chakra-ui/react";
import { Routes } from "./routes";

function App() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgGradient="linear(215.44deg,rgba(15, 15, 15, 0.91) 15.64%, rgba(80, 0, 0, 0.79) 63.96%, rgba(10, 0, 71, 0.8) 78.73%, rgba(10, 0, 71, 0.8) 78.73%)"
    >
      <Routes />
    </Box>
  );
}

export default App;
