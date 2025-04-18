import React, { useEffect, useRef } from "react";
import { useMenuContext } from "../context/menuContext";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: luca.castelli02@gmail.com",
    title: "mail",
  },
  {
    icon: faGithub,
    url: "https://github.com/lucacasty",
    title: "github",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/luca-castelli-939a72267/",
    title: "linkedin",
  },
];

const internalLinks = [
  {
    url: "projects",
    label: "Projects",
  },
  {
    url: "contactme",
    label: "Contact me",
  },
];

const Header = () => {
  const { hidden, currentScroll, onShow, onHide } = useMenuContext();

  // Usa un riferimento per tenere traccia del valore più recente di currentScroll
  const currentScrollRef = useRef(currentScroll);

  // Aggiorna il riferimento ogni volta che currentScroll cambia
  useEffect(() => {
    currentScrollRef.current = currentScroll;
  }, [currentScroll]);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    console.log(
      "Hidden:",
      hidden,
      "ScrollY:",
      scrollY,
      "LastScrollY (ref):",
      currentScrollRef.current
    );

    if (scrollY > currentScrollRef.current && scrollY > 50) {
      // Scrolling down
      console.log("Hiding header");
      onHide(scrollY);
    } else {
      // Scrolling up
      console.log("Showing header");
      onShow(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onShow, onHide]);


  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      zIndex={100}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={hidden ? "-100%" : "0"}
      transform={`translateY(${hidden ? "-100%" : "0"})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px", color: "white" }}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "block" }}>
              {internalLinks.map((link, index) => (
                <a
                  key={index}
                  href=""
                  onClick={handleClick(link.url)}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;