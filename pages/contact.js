import {
  Box,
  Heading,
  chakra,
  Link,
  Text,
  HStack,
  Input,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import Image from "next/image";
import NextLink from "next/link";
import coil2 from "../public/contactpage/coil2.png";
import coil from "../public/contactpage/coil.png";
import ladycalling from "../public/contactpage/ladycalls.svg";
import call from "../public/contactpage/call.png";
import email from "../public/contactpage/email.png";
import BackgroundTitle from "../components/BackgroundTitle";
import Getstarted from "../components/Getstarted";

const ContactPage = () => {
  return (
    <Box>
      <NavBar />
      <BackgroundTitle longbit="Contact " shortbit="Us" />
      <Box
        bgColor={"white"}
        backgroundImage={`url(${coil2.src}), url(${coil.src})`}
        backgroundPosition="left top, left bottom"
        backgroundRepeat="no-repeat"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        pb="10rem"
        gap="5rem"
      >
        <Box
          w="30%"
          display={"flex"}
          gap="1.85rem"
          flexDir="column"
          fontFamily={"poppins"}
          pt="10rem"
        >
          <Image src={ladycalling} alt="contact us" />
          <Text fontWeight={500} fontSize="21.22px" color={"nairablue"}>
            Need Help? Reach out to us, We got answers to your questions
          </Text>
          <HStack spacing={5}>
            <Image src={call} alt="phone icon" />{" "}
            <Text color={"nairablue"} fontWeight={400} fontSize="21.22px">
              080-6858-9473
            </Text>
          </HStack>
          <HStack spacing={5}>
            <Image src={email} alt="email icon" />{" "}
            <Text color={"nairablue"} fontWeight={400} fontSize="21.22px">
              {" "}
              info@9jaCashBack.com
            </Text>
          </HStack>
        </Box>
        <Box
          pt="10rem"
          w="35%"
          fontFamily={"poppins"}
          display="flex"
          flexDir={"column"}
        >
          <Text
            pb="3rem"
            color={"nairagreen"}
            fontWeight={500}
            fontSize="21.22px"
          >
            Make Enquiries
          </Text>
          <form action="">
            <Input
              placeholder="Username"
              w="27.5rem"
              h="3.6rem"
              border={"none"}
              bgColor="#F6F6F6"
              type={"text"}
              _placeholder={{ fontSize: "17.62px" }}
              mb="1.85rem"
              focusBorderColor ="nairagreen"
            />
            <Input
              placeholder="Password"
              w="27.5rem"
              h="3.6rem"
              border={"none"}
              bgColor="#F6F6F6"
              type={"password"}
              _placeholder={{ fontSize: "17.62px" }}
              mb="1.85rem"
              focusBorderColor ="nairagreen"
            />
            <Input
              placeholder="Phone number"
              w="27.5rem"
              h="3.6rem"
              border={"none"}
              bgColor="#F6F6F6"
              type={"tel"}
              _placeholder={{ fontSize: "17.62px" }}
              mb="1.85rem"
              focusBorderColor ="nairagreen"
            />
            <Input
              placeholder="Enter your message"
              w="27.5rem"
              pt="1.3rem"
              pb="9.7rem"
              border={"none"}
              bgColor="#F6F6F6"
              type={"text"}
              _placeholder={{ fontSize: "17.62px" }}
              mb="1.85rem"
              focusBorderColor ="nairagreen"
            />
            <Input
              value={"Send Message"}
              w="27.5rem"
              border={"none"}
              color="white"
              bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
              type={"submit"}
              fontWeight={600}
              fontSize="lg"
              mb="1.85rem"
              cursor={"pointer"}
              transitionDuration={".3s"}
              _hover={{ transform: "scale(1.02)" }}
            />
          </form>
        </Box>
      </Box>
      <Getstarted/>
      <FooterComponent />
    </Box>
  );
};

export default ContactPage;
