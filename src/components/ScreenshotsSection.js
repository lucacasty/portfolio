import React, { useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Button, Heading, Grid, Image } from "@chakra-ui/react";

const screenshots = [
  {
    title: "Spotify",
    description:
      "XXXXXx",
    getImageSrc: () => require("../images/spotify_screenshots.png"),
  },
  {
    title: "Spotify 2",
    description:
      "XXX",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Spotify 3",
    description:
      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    getImageSrc: () => require("../images/photo2.png"),
  },
];

const ScreenshotsSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FullScreenSection
      backgroundColor="#533d14ff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="screenshots-section"
    >
      <Heading as="h1">
        Gallery of Screenshots
      </Heading>
      <Grid
        templateColumns="1fr 16fr 1fr"
        gap={4}
        alignItems="center"
      >
      <Button
        backgroundColor="white"
        color="black"
        fontSize="24px"
        fontWeight="bold"
        width="20px"
        onClick={() => setActiveIndex((activeIndex - 1 + screenshots.length) % screenshots.length)}
      >
        &lt;
      </Button>
      <Image
        h="600px"
        w="auto"
        key={screenshots[activeIndex].title}
        title={screenshots[activeIndex].title}
        description={screenshots[activeIndex].description}
        src={screenshots[activeIndex].getImageSrc()}
      />
      <Button
        backgroundColor="white"
        color="black"
        fontSize="24px"
        fontWeight="bold"
        width="20px"
        onClick={() => setActiveIndex((activeIndex + 1) % screenshots.length)}
      >
        &gt;
      </Button>
      </Grid>
    </FullScreenSection>
  );
};

export default ScreenshotsSection;
