import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Luca!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  <Avatar name="Castelli Luca" src="https://i.postimg.cc/8cD3MjFv/Webp-net-resizeimage-3.jpg" size="4"  color="cyan" objectFit="cover" />
  <VStack spacing={8} mt={8}>
    <Heading as="h1" size="md" color="white">
      {greeting}
    </Heading>
    <Heading as="h2" size="2xl" color="white">
      {bio1}  
      <VStack spacing={0} mt={2}> 
        <Heading as="h2" size="2xl" color="white">
          {bio2}  
        </Heading>  
      </VStack>
    </Heading>
  </VStack>


  </FullScreenSection>
);

export default LandingSection;
