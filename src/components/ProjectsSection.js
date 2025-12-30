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
    title: "Gaming Hub",
    description:
      "Gaming Hub is a web app for gamers to explore, review, and discuss games, featuring authentication, reviews, ratings, and a community forum. It was my high-school final year project (likely inactive now due to Heroku’s free plan discontinuation).",
    getImageSrc: () => require("../images/gaming-hub.png"),
    url: "https://gaming-hub-2k21.herokuapp.com/",
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
