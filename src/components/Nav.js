import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

function Nav() {
  return (
    <nav>
      <HStack gap={8} className="navLink">
        <ChakraLink as={ReactRouterLink} to="/Little-Lemon">
          Home
        </ChakraLink>

        <a href="#about">About</a>

        <a href="#">Menu</a>

        <ChakraLink as={ReactRouterLink} to="/Little-Lemon/booking">
          Reservations
        </ChakraLink>

        <a href="#">Order Online</a>

        <a href="#">Login</a>
      </HStack>
    </nav>
  );
}

export default Nav;
