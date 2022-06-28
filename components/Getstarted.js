import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import rightellipse from "../public/navassets/rightellipse.png";
import leftellipse from "../public/navassets/leftellipse.png";

const Getstarted = () => {
  return (
    <Box
      bgColor={"nairablue"}
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      fontFamily={"poppins"}
      py={{ base: "4rem", md: "6.5rem" }}
      justifyContent={"center"}
      gap={{base:"3rem",md:"5rem"}}
      alignItems={"center"}
      mb="10.5rem"
      backgroundImage={{
        base: `url(${rightellipse.src}), url(${leftellipse.src})`,
        md: `url(${rightellipse.src}), url(${leftellipse.src})`,
      }}
      backgroundPosition={{
        base: "right top, left center",
        md: "right center, left center",
      }}
      backgroundRepeat="no-repeat"
    >
      <Box
        display={"flex"}
        flexDir="column"
        alignItems="flex-start"
        fontFamily={"poppins"}
        w={{ base: "60%", md: "30%" }}
        gap="1rem"
      >
        <Text color={"nairagreen"} fontSize="20px" textAlign={"center"}>
          Enjoy Daily and Monthly Giveaways
        </Text>
        <Text color={"white"} fontSize="md" textAlign={"center"}>
          Be eligible to enjoy 500% cashback on A.T.M withdrawals. what are you
          waiting for?
        </Text>
      </Box>
      <NextLink href={"/"} passHref>
        <Link
          bgColor={"nairagreen"}
          color="white"
          fontWeight={600}
          fontSize="md"
          py=".8rem"
          px={{ base: "4rem", md: "6rem" }}
          borderRadius={"md"}
          transitionDuration={".3s"}
          _hover={{ transform: "scale(1.02)" }}
        >
          Get Started
        </Link>
      </NextLink>
    </Box>
  );
};

export default Getstarted;
