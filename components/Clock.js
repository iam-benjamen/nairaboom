import { Box, Text } from "@chakra-ui/react";

const Clock = () => {
  const times = ["Hours", "Minute", "Seconds", "Percentages"];
  const hour = "02";
  const minute = "30";
  const second = "50";
  const percentage = "70%";

  return (
    <Box
      w={{ base: "90%", md: "46.75rem" }}
      pl={{ base: "1.5rem", md: "3.85rem" }}
      pr={{ base: "1.5rem", md: "4.3rem" }}
      bgColor={"nairablue"}
      borderRadius="1.2rem"
      fontFamily={"poppins"}
    >
      <Box py="4rem" display={"flex"} flexDir="column" alignItems={"center"}>
        <Text
          letterSpacing={"0.15em"}
          fontSize={{ base: "1rem", sm: "1.5rem", md: "3.43rem" }}
          color={"nairagreen"}
          fontWeight={700}
          w={"100%"}
          textAlign="center"
        >
          {`${hour}  :  ${minute}  :  ${second}  :  ${percentage}`}
        </Text>
        <Box
          color="white"
          display={"flex"}
          w="100%"
          justifyContent={{ sm: "center", md: "space-around" }}
          flexWrap="wrap"
          gap={{ sm: "1rem" }}
        >
          {times.map((time, index) => (
            <Text
              key={index}
              fontWeight={400}
              fontSize={{ base: ".8rem", md: "lg" }}
            >
              {time}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Clock;
