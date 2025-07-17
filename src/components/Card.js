import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Project = ({ title, description, imageSrc, url }) => {
  return (
    <Card maxW="sm" overflow="hidden">
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="200px"
        objectFit="contain"
      />
      <CardBody>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="white">
          {description}
        </Text>
      </CardBody>
      <CardFooter display="flex" gap="2">
        <Button
          as="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
          colorScheme="blue"
          marginTop="5"
        >
          See More
          <Box as="span" ml="5px">
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Box>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Project;
