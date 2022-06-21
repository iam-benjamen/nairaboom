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
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundAttachment="fixed"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        py="10rem"
      >
        <Heading
          color={"nairablue"}
          fontSize={"4rem"}
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
        <Image src={party} alt="party" />
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
        <Text pb="1.6rem" fontSize={"1.5rem"} fontWeight={700}>
          Check My Number
        </Text>
        <form action="">
          <Box
            display={"flex"}
            w="33.75rem"
            h="6rem"
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
              h="6rem"
            >
              <Image src={searchIcon} alt="search icon" />
            </Button>
          </Box>
        </form>
        <Box
          backgroundImage={`url(${confetti.src})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          mt="6.3rem"
          bgColor={"#F6F6F6"}
          borderRadius={"2.1rem"}
          pt="4.5rem"
          pb="3.5rem"
          display={"flex"}
          flexDir="column"
          fontFamily={"poppins"}
          color="nairablue"
          w="90%"
          alignItems={"center"}
        >
          <Text fontWeight={700} fontSize="1.5rem" pb="3rem">
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
              <Text color="white" fontWeight={700} fontSize="xl">
                S/N
              </Text>
              <Text color="white" fontWeight={700} fontSize="xl">
                Full Name
              </Text>
              <Text color="white" fontWeight={700} fontSize="xl">
                Phone Number
              </Text>
              <Text color="white" fontWeight={700} fontSize="xl">
                Amount won
              </Text>
              <Text color="white" fontWeight={700} fontSize="xl">
                Date won
              </Text>
            </Box>
            <Box display={"flex"} flexDir="column" gap="1.4rem" mb="7.6rem">
              {numbers.map((number, index) => (
                <Box
                  display={"flex"}
                  justifyContent={"space-evenly"}
                  fontFamily="poppins"
                  key={index}
                >
                  <Text fontSize={"1.125rem"} color="nairablue">
                    {number}
                  </Text>
                  <Text fontSize={"1.125rem"} color="nairablue">
                    Nwabueze E.
                  </Text>
                  <Text fontSize={"1.125rem"} color="nairablue">
                    *********08
                  </Text>
                  <Text fontSize={"1.125rem"} color="nairablue">
                    ₦ 3,000 Won
                  </Text>
                  <Text fontSize={"1.125rem"} color="nairablue">
                    2021-10-07
                  </Text>
                </Box>
              ))}
            </Box>{" "}
            <Box
              mb="5.375rem"
              display={"flex"}
              justifyContent="space-evenly"
            >
              <Text fontSize={"14px"} color="#A7A7A7">
                Showing 1 - 10 of 1,200
              </Text>
              <Box display={"flex"} gap="11px">
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
