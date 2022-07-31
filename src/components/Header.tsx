import { Box, Container, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container maxW={1200}>
      <Box as="header" width="100%">
        <Flex height={65} align="center">
          <HStack as="ul" spacing="60px">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="#setup">Setup</Link>
            </li>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Header;
