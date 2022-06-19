import { Box, Heading, chakra, Text, Input, Select } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import BackgroundTitle from "../components/BackgroundTitle";
import coil2 from "../public/aboutpage/coil2.png";

const PlayAsGuest = () => {
  return (
    <Box>
      <NavBar />
      <BackgroundTitle longbit="Play As A Gu" shortbit="est" />
      <Box
        backgroundImage={`url(${coil2.src})`}
        backgroundPosition="right top"
        backgroundRepeat="no-repeat"
        pt="8rem"
        fontFamily={"poppins"}
        display="flex"
        flexDir={"column"}
        alignItems="center"
      >
        <Text textAlign={"center"} fontWeight={500} fontSize="2rem" pb="6.1rem">
          Wish to get cashback for your transaction?
          <br /> Fill the form below
        </Text>
        <Box
          mb="9.8rem"
          pt="7.3rem"
          pl="10rem"
          pr="11.5rem"
          w="90%"
          borderRadius={"2rem"}
          bgColor={"#F6F6F6"}
        >
          <form action="">
            <ul display="flex">
              <li>
                <Input
                  placeholder="Amount"
                  w="25.125rem"
                  h="4.8rem"
                  border={"none"}
                  bgColor="white"
                  type={"number"}
                  _placeholder={{ fontSize: "16px", color: "#A7A7A7" }}
                  mb="3rem"
                  focusBorderColor="nairagreen"
                />
              </li>
              <li>
                <Input
                  placeholder="First Name"
                  w="25.125rem"
                  h="4.8rem"
                  border={"none"}
                  color={"#A7A7A7"}
                  bgColor="white"
                  type={"text"}
                  _placeholder={{ fontSize: "16px" }}
                  mb="3rem"
                  focusBorderColor="nairagreen"
                />
              </li>
              <li>
                <Input
                  placeholder="Last Name"
                  w="25.125rem"
                  h="4.8rem"
                  color={"#A7A7A7"}
                  border={"none"}
                  bgColor="white"
                  type={"text"}
                  _placeholder={{ fontSize: "16px" }}
                  mb="3rem"
                  focusBorderColor="nairagreen"
                />
              </li>
              <li>
                <Input
                  placeholder="Phone Number"
                  w="25.125rem"
                  h="4.8rem"
                  border={"none"}
                  color={"#A7A7A7"}
                  bgColor="white"
                  type={"tel"}
                  _placeholder={{ fontSize: "16px" }}
                  mb="3rem"
                  focusBorderColor="nairagreen"
                />
              </li>
              <li>
                <Select
                  w="25.125rem"
                  h="4.8rem"
                  border={"none"}
                  bgColor="white"
                  placeholder="Transaction Type"
                  mb="3rem"
                  color={"#A7A7A7"}
                  focusBorderColor="nairagreen"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </li>
              <li>
                <Input
                  value={"Proceed"}
                  border={"none"}
                  w="31.6rem"
                  color="white"
                  bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
                  type={"submit"}
                  fontWeight={600}
                  fontSize="lg"
                  mb="5rem"
                  cursor={"pointer"}
                />
              </li>
            </ul>
          </form>
        </Box>
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default PlayAsGuest;
