import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import BackgroundTitle from "../components/BackgroundTitle";
import Getstarted from "../components/Getstarted";

const TestingPage = () => {
  return (
    <Box>
      <NavBar />
      <BackgroundTitle longbit="About " shortbit="Us" />
      <Getstarted />
      <FooterComponent />
    </Box>
  );
};

export default TestingPage;
