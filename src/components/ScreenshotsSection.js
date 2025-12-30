import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image, Text, AspectRatio, VStack } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style/swiper.css";

const screenshots = [
  {
    title: "Spotify API Integration & UI Replication",
    description: "For a work project, I developed a feature for an application that integrates with the Spotify APIs. The goal was to replicate Spotify’s user interface and experience, including playlists, tracks, and user content. This required careful attention to design details, handling authentication, data fetching, and state management to provide a seamless and familiar experience for the end user.",
    getImageSrc: () => require("../images/spotify_screenshots.png"),
  },
  {
    title: "Booking Management Dashboard",
    description: "In a hotel management system used to handle guests, staff, and internal operations, there was no visual dashboard to manage reservations. I designed and implemented a calendar-based booking dashboard that allows staff to easily view, manage, and understand all reservations at a glance. This significantly improved usability and helped reduce errors in daily booking management.",
    getImageSrc: () => require("../images/Bookings.png"),
  },
  {
    title: "Access Logs Visualization",
    description:"For the same hotel management platform, I developed a dedicated logs interface to track room access activity. The system provides a clear and structured view of who accessed a specific room and at what time, improving traceability and security. This feature helps administrators monitor activity and quickly identify unusual or unauthorized access patterns",
    getImageSrc: () => require("../images/logs.png"),
  },
];

const ScreenshotsSection = () => {

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
        Gallery
      </Heading>
      <Box
        maxW={{ base: "370px", md: "700px", lg: "1000px" }}
        mx="auto"
      >
        <Swiper
          effect={"cards"}
          modules={[EffectCards]}
          grabCursor={true}
        >
          {screenshots.map((item, index) => (
           <SwiperSlide>
            <Box
              bg={["green.700", "blue.700", "red.700"][index % 3]}
              borderRadius="18px"
              p={{ base: 4, md: 10}}
              display="flex"
              flexDirection="column"
              gap={4}
            >
              {/* Screenshot */}
              <Box
                maxW="100%"
                h={{ base: "320px", md: "500px"}}
                borderRadius="12px"
                backgroundImage={`url(${item.getImageSrc()})`}
                backgroundSize={{ base: "cover", md: "contain" }}
                backgroundPosition={{ base: "left center", md: "center" }}
                backgroundRepeat="no-repeat"
              />

              {/* Text */}
              <Box textAlign="center">
                <Text fontSize={{base: "md", md: "lg"}} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontSize={{base: "sm", md: "md"}} p={2}>
                  {item.description}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </FullScreenSection>
  );
};

export default ScreenshotsSection;
