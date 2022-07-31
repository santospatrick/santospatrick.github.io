import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: "#262E3B",
      color: "#fff",
    },
    ul: {
      listStyle: "none",
    },
  },
};

const theme = extendTheme({ config, colors, styles });

export default theme;
