import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ScreenshotsSection from "./components/ScreenshotsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import { MenuProvider } from "./context/menuContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <MenuProvider>
          <main>
            <Header />
            <LandingSection />
            <ProjectsSection />
            <ScreenshotsSection />
            <ContactMeSection />
            <Footer />
            <Alert />
          </main>
        </MenuProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;