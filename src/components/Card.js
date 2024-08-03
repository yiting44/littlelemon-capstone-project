import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack
      w="100%"
      bg="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      align="stretch"
      spacing={4}
      _hover={{
        boxShadow: "lg",
        textDecoration: "none",
      }}
    >
      <Image src={imageSrc} alt={title} />
      <VStack align="start" px={4} py={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack
        px={4}
        py={3}
        justify="space-between"
        w="45%"
        background="#F4CE14"
        // paddingTop="20px"
      >
        {/* <Text fontSize="sm">Order for Delivery</Text> */}
        <a href="#">
          <HStack bottom={3}>
            <p className={"orderDelivery"}>Order a delivery</p>
          </HStack>
        </a>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
