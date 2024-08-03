import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, Button, Flex } from "@chakra-ui/react";
import Card from "./Card";
import Cardt from "./Cardt";

const projects = [
  {
    title: "Greek Salad [$12.99]",
    description:
      "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
    getImageSrc: () => require("../assets/greek salad.jpg"),
  },
  {
    title: "Bruschetta [$12.99]",
    description:
      "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
  },
  {
    title: "Lemon Dessert [$12.99]",
    description:
      "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
  },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../images/photo4.jpg"),
  // },
];

const testimonials = [
  {
    title: "Alice",
    description: "This is the best Mediterranean food that I've ever had!",
    getImageSrc: () => require("../assets/Alice.png"),
  },
  {
    title: "John",
    description:
      "The food here really refreshed me after a late night shift at the local supply depot.",
    getImageSrc: () => require("../assets/John.png"),
  },
  {
    title: "Quin",
    description:
      "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
    getImageSrc: () => require("../assets/Quin.png"),
  },
  {
    title: "Roy",
    description:
      "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
    getImageSrc: () => require("../assets/Roy.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#ffffff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      {/* <Heading
        as="h1"
        id="projects-section"
        color="#000000"
        padding="50px 0px 0px 0px "
        className={"bigHeader aboutTitle"}
      >
        This weeks specials!
      </Heading> */}
      <Flex direction={"column"} w="100%">
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <h1 className="bigHeader" style={{ color: "#000000" }}>
            This week’s specials!
          </h1>
          <Button
            colorScheme={"yellow"}
            color={"#333333"}
            h={42}
            w={131}
            fontSize={"1rem"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            Order Online
          </Button>
        </HStack>
      </Flex>

      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      <Heading
        as="h1"
        id="projects-section"
        color="#000000"
        width="100%"
        align="center"
        padding="80px 0px 0px 0px "
        className={"bigHeader aboutTitle"}
      >
        <h2 className="bigHeader" style={{ color: "#000000" }}>
          Testimonials
        </h2>
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
        pb={"80px"}
      >
        {testimonials.map((project) => (
          <Cardt
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      <div></div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
