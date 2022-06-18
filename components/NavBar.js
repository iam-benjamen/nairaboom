import { Box, Text, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import nairaboomlogo from "../public/navassets/nairaboom-logo.svg";
import NextLink from "next/link";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";
import DotImage from "./Dot";

const NavBar = () => {
  const router = useRouter();
  const NavElement = [
    ["Home", "/"],
    ["How it Works", "/how-it-works"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ];
  return (
    <Box
      w="100%"
      display={"flex"}
      top={0}
      fontFamily="poppins"
      bgColor={"nairablue"}
      h="8rem"
      alignItems={"center"}
      justifyContent="space-around"
      position={"sticky"}
      zIndex={999}
    >
      <Box as={Link} href="/">
        <Image src={nairaboomlogo} alt="NairaBoom Logo" />
      </Box>

      <Box display="flex" flexDir="row" gap={"3rem"} alignItems="center">
        <Box display={"flex"} gap="2.5rem">
          {NavElement.map((element, index) =>
            router.pathname == `${element[1]}` ? (
              <ActiveLink key={index} name={element[0]} link={element[1]} />
            ) : (
              <Box key={index}>
                <NextLink href={element[1]} passHref>
                  <Link fontSize={"sm"} color={"nairagreen"} _hover={{}}>
                    {element[0]}
                  </Link>
                </NextLink>
              </Box>
            )
          )}
        </Box>

        <Box display={"flex"} gap="1rem">
          <NextLink href="/login" passHref>
            <Link
              fontWeight={400}
              color="white"
              border={"1.2px solid"}
              borderColor="nairagreen"
              padding={"0.7rem 1.8rem"}
              borderRadius="md"
              _hover={{}}
            >
              Log In
            </Link>
          </NextLink>
          <NextLink href="/register" passHref>
            <Link
              fontWeight={400}
              bgColor="nairagreen"
              color="white"
              padding={"0.7rem 1.8rem"}
              borderRadius="md"
              transitionDuration={".3s"}
              _hover={{ transform: "scale(1.02)" }}
            >
              Register Now
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
