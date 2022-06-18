import { Box, Text, Link, Heading, chakra, Circle } from "@chakra-ui/react";
import NextLink from "next/link";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import background from "../public/aboutpage/background.png";
import coil from "../public/cashback-atm/coil.png";
import coil2 from "../public/cashback-atm/coil2.png";
import BackgroundTitle from "../components/BackgroundTitle";

const CashBackATM = () => {
  const instructArray = [
    ["1", "Visit nearest ATM"],
    ["7", "Select Pay Merchant"],
    ["2", "Insert your ATM Card"],
    ["8", "Enter the 9jaCashback ATM code = 04369201"],
    ["3", "Input your  PIN as usual"],
    ["9", "Enter your mobile phone number as customer reference number"],
    ["4", "Select Quickteller"],
    ["10", "Confirm your entry  and mobile phone number again and Proceed"],
    ["5", "Select pay bills"],
    [
      "11",
      "You will get a succeful prompt on the ATM Screen and receive an SMS confirming your entry",
    ],
    ["6", "Select your account  type (E.g Savings or Current)"],
  ];
  return (
    <Box>
      <NavBar />
      <BackgroundTitle longbit="Play Cashback From A" shortbit="TM" />
      <Box
        bgColor={"white"}
        pt="4.5rem"
        pb="14.8rem"
        backgroundImage={`url(${coil.src}), url(${coil2.src})`}
        backgroundPosition="center left, top right"
        backgroundRepeat="no-repeat"
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        fontFamily="poppins"
      >
        <Text fontWeight={700} fontSize="2.5rem">
          Welcome to Naira Boom ATM Play
        </Text>
        <Text
          fontSize={"xl"}
          fontWeight={500}
          pt="1.8rem"
          pb="4.5rem"
          textAlign={"center"}
        >
          NAIRA BOOM ATM PLAY IS AVAILABLE on every ATM terminal <br /> all over
          Nigeria.
        </Text>
        <Box
          fontFamily={"poppins"}
          pt="4.75rem"
          w="85%"
          bgColor="#F6F6F6"
          borderRadius={"2rem"}
          display="flex"
          flexDir={"column"}
        >
          <Text
            pb="6.4rem"
            margin={"auto"}
            fontSize={"xl"}
            fontWeight={500}
            textAlign="center"
            w="25rem"
          >
            To request for cashback through the ATM follow the instructions
            below:
          </Text>
          <Box
            display={"flex"}
            justifyContent="space-evenly"
            flexWrap={"wrap"}
          >
            {instructArray.map((item, index) => (
              <Box
                justifyContent={"flex-start"}
                alignItems="center"
                display={"flex"}
                bgColor={"nairablue"}
                borderRadius={"xl"}
                gap="1.03rem"
                w="35%"
                py="2rem"
                pl="1.5rem"
                key={index}
                mb="1.5rem"
              >
                <Circle
                  fontWeight={700}
                  fontSize="xl"
                  size={"3rem"}
                  bgColor="nairagreen"
                  color="white"
                >
                  {item[0]}
                </Circle>
                <Text color="white">{item[1]}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        bgColor={"nairablue"}
        display="flex"
        fontFamily={"poppins"}
        py="6.5rem"
        justifyContent={"center"}
        gap="5rem"
        alignItems={"center"}
        mb="10.5rem"
      >
        <Box
          display={"flex"}
          flexDir="column"
          alignItems="flex-start"
          fontFamily={"poppins"}
          w="30%"
          gap="1rem"
        >
          <Text color={"nairagreen"} fontSize="20px">
            Enjoy Daily and Monthly Giveaways
          </Text>
          <Text color={"white"} fontSize="md">
            Be eligible to enjoy 500% cashback on A.T.M withdrawals. what are
            you waiting for?
          </Text>
        </Box>
        <NextLink href={"/"} passHref>
          <Link
            bgColor={"nairagreen"}
            color="white"
            fontWeight={600}
            fontSize="lg"
            p=".8rem 6rem"
            borderRadius={"md"}
          >
            Get Started
          </Link>
        </NextLink>
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default CashBackATM;
