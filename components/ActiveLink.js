import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const ActiveLink = (props) => {
  return (
    <Box key={props.key}>
      <NextLink href={`${props.link}`} passHref>
        <Link fontSize={"sm"} color={"white"} _hover={{}}>
          &#9679; {props.name}
        </Link>
      </NextLink>
    </Box>
  );
};

export default ActiveLink;
