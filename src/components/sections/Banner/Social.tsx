import { HStack } from "@chakra-ui/react";
import React from "react";
import behance from "@/assets/behance.svg";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import Image from "next/image";

type Props = {};

const Social = (props: Props) => {
  return (
    <HStack mt="60px" spacing={22}>
      <a
        href="http://github.com/santospatrick"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={github} alt="Github social media logo" />
      </a>
      <a
        href="https://www.behance.net/santospatrick"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={behance} alt="Behance social media logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrick-santos-b08143106/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={linkedin} alt="Linkedin social media logo" />
      </a>
    </HStack>
  );
};

export default Social;
