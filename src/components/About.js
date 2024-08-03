import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import doublePic from "../assets/doubleImages.png";

function About() {
  return (
    <section id="about">
      <Box
        pt={"100px"}
        pb={"100px"}
        pr={"15vw"}
        pl={"15vw"}
        className="aboutContainer"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        gap={10}
      >
        <VStack alignItems={"first-baseline"} gap={10}>
          <VStack alignItems={"first-baseline"}>
            <h1 className={"bigHeader aboutTitle"} style={{ color: "#495E57" }}>
              Little Lemon
            </h1>
            <h2 className={"subHeader lightBackgroundFont"}>Chicago</h2>
          </VStack>
          <p className={"sectionText"}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment the
            restaurant features a locally sourced menu with daily specials.
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment the
            restaurant features a locally sourced menu with daily specials.
          </p>
        </VStack>

        <Image src={doublePic} alt={"Adrian & Mario"} w={"400px"} />
      </Box>
    </section>
  );
}

export default About;
