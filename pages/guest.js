import { Box, Heading, chakra } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import BackgroundTitle from "../components/BackgroundTitle";

const PlayAsGuest = () => {
  return (
    <Box>
      <NavBar />
      <BackgroundTitle longbit="Play As A Gu" shortbit="est"/>
      <FooterComponent />
    </Box>
  );
};

export default PlayAsGuest;
