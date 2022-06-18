import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../public/footerassets/logo.svg";
import facebook from "../public/footerassets/facebook.svg";
import twitter from "../public/footerassets/twitterlogo.svg";
import instagram from "../public/footerassets/instagram.svg";

const FooterComponent = () => {
  return (
    <Box
      display={"flex"}
      bgColor="nairablue"
      h={"35rem"}
      bottom={0}
      fontFamily="poppins"
      alignItems={"center"}
      justifyContent="space-evenly"
    >
      <Box
        display={"flex"}
        gap="2rem"
        flexDir="column"
        w="30%"
        alignItems={"flex-start"}
      >
        <Image src={logo} alt="footer logo" />
        <Text fontFamily="poppins" color={"#9E9E9E"}>
          9jaCashBack is an Electronic Transaction Request Back Service (ETRS)
          that scores and rewards users with cashback, refunds, giveaway and
          payouts for their Credit and Debit alerts they register with the
          service.
        </Text>
        <Box display={"flex"} gap="2.3rem">
          <Box as={Link}>
            <Image src={facebook} alt="facebook logo" />
          </Box>
          <Box as={Link} href="#">
            <Image src={twitter} alt="twitter logo" />
          </Box>
          <Box as={Link}>
            <Image src={instagram} alt="instagram logo" />
          </Box>
        </Box>
        <Text color={"#9E9E9E"}>2022 9ja Cashback. All Right Reserved</Text>
      </Box>
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontFamily="poppins"
          color={"white"}
          fontWeight={700}
          fontSize="xl"
        >
          Quicks Links
        </Text>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"} pt="1.5rem">
            Home
          </Link>
        </NextLink>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"}>Blog</Link>
        </NextLink>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"} pb="6rem">
            Check my number
          </Link>
        </NextLink>
      </Box>
      <Box display={"flex"} flexDir="column" gap="1rem">
        <Text
          fontFamily="poppins"
          color={"white"}
          fontWeight={700}
          fontSize="xl"
        >
          Legal
        </Text>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"} pt="1.5rem">
            Terms and conditions
          </Link>
        </NextLink>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"}>Privacy policy</Link>
        </NextLink>
        <NextLink href={"/"} passHref>
          <Link color={"#9E9E9E"} pb="6rem">
            FAQ
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default FooterComponent;
