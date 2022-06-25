import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import BackgroundTitle from "../components/BackgroundTitle";
import Getstarted from "../components/Getstarted";
import Clock from "../components/Clock";
const TestingPage = () => {
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"}>
      {/* <NavBar /> */}
      {/* <BackgroundTitle longbit="About " shortbit="Us" />
      <Getstarted /> */}
      <Clock />
      {/* <FooterComponent /> */}
    </Box>
  );
};

export default TestingPage;
