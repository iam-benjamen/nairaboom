import { Box, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ActiveLink from "./ActiveLink";

const NavElements = (props) => {
  const router = useRouter();
  const NavElement = [
    ["Home", "/"],
    ["How it Works", "/how-it-works"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ];
  return (
    <Box
      display={props.display}
      flexDir={{ base: "column", sm: "column", lg: "row" }}
      gap={"3rem"}
      alignItems="center"
      w={{ base: "max-content" }}
      margin={{ base: "auto", lg: "0" }}
      pt={{ base: "2.5rem", lg: "0" }}
    >
      <Box
        display={"flex"}
        gap="2.5rem"
        flexDir={{ base: "column", sm: "column", lg: "row" }}
      >
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

      <Box
        display={"flex"}
        gap={{ base: "2rem", lg: "1rem" }}
        flexDir={{ base: "column", sm: "column", lg: "row" }}
      >
        <NextLink href="/login" passHref>
          <Link
            fontWeight={400}
            color="white"
            border={"1.2px solid"}
            borderColor="nairagreen"
            padding={"0.7rem 1.8rem"}
            borderRadius="md"
            _hover={{}}
            textAlign="center"
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
  );
};

export default NavElements;
