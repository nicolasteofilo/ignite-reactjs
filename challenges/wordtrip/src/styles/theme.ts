import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#47585B",
    	600: "#2f3542",
			700: "#1a202c",
			800: "#171923",
			900: "#0d1017"
    },
  },
  styles: {
    global: {
      body: {
        bg: "white.500",
        color: "gray.500",
      },
    },
  },
});
