import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient:
          "linear(215.44deg,rgba(15, 15, 15, 0.91) 15.64%, rgba(80, 0, 0, 0.79) 63.96%, rgba(10, 0, 71, 0.8) 78.73%, rgba(10, 0, 71, 0.8) 78.73%) ",
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no",
      },
    },
  },
});
