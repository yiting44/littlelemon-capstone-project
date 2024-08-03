import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import bannerimg from "../assets/restauranfood.jpg";

const greeting =
  "We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.";
const bio1 = "Little Lemon";
const bio2 = "Ghicago";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

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

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#495E57"
  >
    <HStack>
      <div style={{ marginRight: "100px", width: "50vw" }}>
        <h1
          className="bigHeader"
          style={{
            color: "#F4CE14",
            fontWeight: "bolder",
            marginBottom: "10px",
          }}
        >
          Little Lemon
        </h1>
        <h2
          className="subHeader"
          style={{ color: "#F4CE14", fontWeight: "bold", marginBottom: "40px" }}
        >
          Ghicago{" "}
        </h2>
        <p style={{ marginBottom: "20px" }}>
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        <a
          href="#contact"
          onClick={handleClick("contactme")}
          style={{
            background: "#F4CE14",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          Reservations a Table
        </a>
      </div>
      <div>
        <img
          src={bannerimg}
          alt="bannerimg"
          style={{ width: "15vw", borderRadius: "8px" }}
        />
      </div>
      {/* <div>
        <VStack spacing={2} mt={6}>
          <Heading as="h1" size="3xl" noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as="h2" size="xl" noOfLines={1}>
            {bio2}
          </Heading>
          <Heading as="p" size="xs" noOfLines={1}>
            {greeting}
          </Heading>
        </VStack>
      </div> */}
      <div>
        {/* <Avatar src=" https://i.pravatar.cc/150?img=7" size="2xl" /> */}
      </div>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
