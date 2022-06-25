import {
  Box,
  chakra,
  Heading,
  Text,
  Input,
  Button,
  Square,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import background from "../public/aboutpage/background.png";
import party from "../public/party.png";
import Image from "next/image";
import coil2 from "../public/aboutpage/coil2.png";
import searchIcon from "../public/whitesearch.png";
import confetti from "../public/confetti.png";

const DailyWinners = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <Box>
      <NavBar />
      <Box
        backgroundImage={`url(${background.src})`}
        backgroundPosition={{ base: "right", md: "center" }}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundAttachment="fixed"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        py={{ base: "6rem", md: "8rem", lg: "10rem" }}
      >
        <Heading
          color={"nairablue"}
          fontSize={{ base: "2rem", md: "4rem" }}
          fontWeight={700}
          fontFamily={"poppins"}
          textAlign={"center"}
        >
          Daily Win
          <chakra.span
            borderRadius={"4px"}
            borderBottom="10px solid"
            borderColor="nairagreen"
          >
            ner
          </chakra.span>
        </Heading>
        <Box maxW={"30%"}>
          <Image src={party} alt="party" />
        </Box>
      </Box>
      <Box
        bgColor={"white"}
        backgroundImage={`url(${coil2.src})`}
        backgroundPosition="right top"
        backgroundRepeat="no-repeat"
        pt="7.5rem"
        fontFamily={"poppins"}
        display="flex"
        flexDir={"column"}
        alignItems="center"
      >
        <Text pb="1.6rem" fontSize={{base:"1.2rem",md:"1.5rem"}} fontWeight={700}>
          Check My Number
        </Text>
        <form action="">
          <Box
            display={"flex"}
            w={{ base: "90%", md: "33.75rem" }}
            h={{ base: "4rem", md: "6rem" }}
            borderRadius={"15px"}
            bgColor={"#F6F6F6"}
          >
            <Input
              type="text"
              placeholder="Input your number here to check"
              h="100%"
              focusBorderColor="none"
              border={"none"}
              _placeholder="#A7A7A7"
            />
            <Button
              float={"right"}
              type="submit"
              bgColor={"nairagreen"}
              w="7rem"
              h={{ base: "4rem", md: "6rem" }}
            >
              <Image src={searchIcon} alt="search icon" />
            </Button>
          </Box>
        </form>
        <Box
          backgroundImage={`url(${confetti.src})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          mt={{ base: "4rem", md: "6.3rem" }}
          bgColor={"#F6F6F6"}
          borderRadius={{base:"1.6rem",md:"2.1rem"}}
          pt={{ base: "3rem", md: "4.5rem" }}
          pb={{ base: "2rem", md: "3.5rem" }}
          display={"flex"}
          flexDir="column"
          fontFamily={"poppins"}
          color="nairablue"
          w={{ base: "99%", md: "90%" }}
          alignItems={"center"}
        >
          <Text
            fontWeight={700}
            fontSize={{ base: "1.2rem", md: "1.5rem" }}
            pb="3rem"
          >
            List Of Daily Winners
          </Text>
          <Box w="90%">
            <Box
              bgColor="nairablue"
              borderRadius={"5px"}
              py="1.4rem"
              display={"flex"}
              fontFamily="poppins"
              justifyContent={"space-evenly"}
              mb="1.8rem"
            >
              <Text
                color="white"
                fontWeight={700}
                fontSize={{ base: ".7rem", md: "xl" }}
              >
                S/N
              </Text>
              <Text
                color="white"
                fontWeight={700}
                fontSize={{ base: ".7rem", md: "xl" }}
              >
                Full Name
              </Text>
              <Text
                color="white"
                fontWeight={700}
                fontSize={{ base: ".7rem", md: "xl" }}
              >
                Phone Number
              </Text>
              <Text
                color="white"
                fontWeight={700}
                fontSize={{ base: ".7rem", md: "xl" }}
              >
                Amount won
              </Text>
              <Text
                color="white"
                fontWeight={700}
                fontSize={{ base: ".7rem", md: "xl" }}
              >
                Date won
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir="column"
              gap="1.4rem"
              mb={{ base: "4rem", md: "7.6rem" }}
            >
              {numbers.map((number, index) => (
                <Box
                  display={"flex"}
                  justifyContent={{ base: "space-between", md: "space-evenly" }}
                  fontFamily="poppins"
                  key={index}
                >
                  <Text
                    fontSize={{ base: "0.8rem", md: "1.125rem" }}
                    color="nairablue"
                  >
                    {number}
                  </Text>
                  <Text
                    fontSize={{ base: "0.8rem", md: "1.125rem" }}
                    color="nairablue"
                  >
                    Nwabueze E.
                  </Text>
                  <Text
                    fontSize={{ base: "0.8rem", md: "1.125rem" }}
                    color="nairablue"
                  >
                    *********08
                  </Text>
                  <Text
                    fontSize={{ base: "0.8rem", md: "1.125rem" }}
                    color="nairablue"
                  >
                    ₦ 3,000 Won
                  </Text>
                  <Text
                    fontSize={{ base: "0.8rem", md: "1.125rem" }}
                    color="nairablue"
                  >
                    2021-10-07
                  </Text>
                </Box>
              ))}
            </Box>{" "}
            <Box
              mb={{ base: "3rem", md: "5.375rem" }}
              display={"flex"}
              justifyContent="space-evenly"
              maxW={"90%"}
              flexDir={{ base: "column", md: "row" }}
              gap={{ base: "1rem", md: "0" }}
            >
              <Text fontSize={"14px"} color="#A7A7A7">
                Showing 1 - 10 of 1,200
              </Text>
              <Box
                flexWrap={"wrap"}
                display={"flex"}
                gap="11px"
                maxW={"inherit"}
              >
                <Square
                  color="white"
                  size={"2.1rem"}
                  bgColor={"nairablue"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  1
                </Square>
                <Square
                  color="nairablue"
                  border="1px solid"
                  size={"2.1rem"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  2
                </Square>
                <Square
                  color="nairablue"
                  border="1px solid"
                  size={"2.1rem"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  3
                </Square>
                <Square
                  color="nairablue"
                  border="1px solid"
                  size={"2.1rem"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  ...
                </Square>
                <Square
                  color="nairablue"
                  border="1px solid"
                  size={"2.1rem"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  22
                </Square>
                <Square
                  color="nairablue"
                  border="1px solid"
                  w={"3rem"}
                  fontSize={"14px"}
                  borderRadius={"5px"}
                >
                  Next
                </Square>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterComponent />
    </Box>
  );
};
export default DailyWinners;
