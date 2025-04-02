import { Box, Button, Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Project = ({ title, description, imageSrc }) => {

  return (
    <Card maxW="sm" overflow="hidden">
      <Image
        src={imageSrc}
        alt={title}
      />
      <CardBody>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="gray.600">
          {description}
        </Text>
      </CardBody>
      <CardFooter display="flex" gap="2">
        <Button variant="solid" colorScheme="blue">
          See More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Project;
