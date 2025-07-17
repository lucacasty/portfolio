import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Hair Day Salon",
    description:
      "Hair Day Salon is a simple and basic website created using only HTML and CSS as part of a Coursera course project. It represents a modern and welcoming hair salon offering professional styling, cuts, and color services tailored to your unique look.",
    getImageSrc: () => require("../images/photo1.png"),
    url: "https://hair-day-salon.web.app/",
  },
  {
    title: "Little Lemon",
    description:
      "Little Lemon is a React-based responsive web application developed as the final project for a Coursera front-end development course. It highlights core React principles and delivers an engaging user experience for a fictional restaurant.",
    getImageSrc: () => require("../images/photo2.png"),
    url: "https://little-lemon-casty.web.app/",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects-section"
    >
      <Heading as="h1">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url= {project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
