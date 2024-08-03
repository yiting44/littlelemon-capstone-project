import React from "react";
import logo from "../assets/footerLogo.png";
import { Box, Flex, VStack, HStack, Image } from "@chakra-ui/react";

const Contact = (props) => {
  return (
    <VStack alignItems={"flex-start"} className={props.className}>
      <a href="#">
        <address>123 Citrus Lane</address>
      </a>
      <a href="#">123-456-7890</a>
      <a href="#">littlelemon@XXXX.com</a>
    </VStack>
  );
};

const Media = (props) => {
  return (
    <VStack alignItems={"flex-start"} className={props.className}>
      <a href="#">Facebook</a>
      <a href="#">instagram</a>
    </VStack>
  );
};

const Footer = () => {
  const date = Date();

  // Handle clicks on buttons within the header
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer>
      <Box
        backgroundColor="#495E57"
        px={"15vw"}
        py={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        color="#ffffff"
      >
        <HStack
          justifyItems={"space-between"}
          alignItems={"center"}
          gap={"10vw"}
        >
          <Image src={logo} alt="Little Lemon Logo" w={"9.2489vw"} />
          <HStack alignItems={"first-baseline"} gap={"100px"}>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">SITEMAP</h1>
              <VStack alignItems={"flex-start"} className="footerText">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#contact" onClick={handleClick("contactme")}>
                  Reservations
                </a>
                <a href="#">Order</a>
                <a href="#">Login</a>
              </VStack>
            </VStack>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">CONTACT</h1>
              <Contact className="footerText" />
            </VStack>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">SOCIAL MEDIA LINKS</h1>
              <Media className="footerText" />
            </VStack>
          </HStack>
        </HStack>
      </Box>
      {/* <Box backgroundColor="#495E57">
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Little Lemon © {new Date().getFullYear()}</p>
        </Flex>
      </Box> */}
    </footer>
  );
};
export default Footer;
