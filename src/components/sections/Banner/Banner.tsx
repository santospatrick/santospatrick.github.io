import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import homeCircle from "@/assets/home-circle.png";
import Social from "./Social";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Container maxW={1200}>
      <SimpleGrid columns={2} spacing="60px" alignItems="center">
        <div>
          <Text fontFamily="Montserrat" fontSize={64}>
            Hi, I'm Patrick
          </Text>
          <Text maxW={400} fontFamily="Raleway" fontSize={30}>
            Senior Front-end Engineer & Graphic Designer
          </Text>
          <Social />
        </div>
        <div>
          <Image
            src={homeCircle}
            priority
            alt="Home circle with profile picture"
          />
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Banner;
