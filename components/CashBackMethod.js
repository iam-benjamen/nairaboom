import { Box, Circle, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

const CashBack = (props) => {
  return (
    <Box
      w={"30%"}
      minW="22rem"
      bgColor="#F6F6F6"
      borderRadius={"24px"}
      pb="4rem"
      boxShadow={"md"}
    >
      <Circle size="40px" top={0} left={0} bgColor="white">
        <Circle size="20px" bgColor={"#f6f6f6"}>
          <Text fontSize={"xl"} fontWeight={700}>
            {props.number}
          </Text>
        </Circle>
      </Circle>
      <Box
        display={"flex"}
        flexDir="column"
        alignItems={"flex-start"}
        gap="2rem"
        pl="3rem"
        pr="4rem"
        pt="1rem"
      >
        <Image src={props.icon} alt="icon 1" />
        <Text fontWeight={600} fontSize="17px">
          {props.title}
        </Text>
        <Text>{props.note}</Text>
      </Box>
    </Box>
  );
};

export default CashBack;
