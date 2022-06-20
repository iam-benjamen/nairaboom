import { Box, Text } from "@chakra-ui/react";

const Clock = () => {
  const times = ["Hours", "Minute", "Seconds", "Percentages"];
  const hour = "02";
  const minute = "30";
  const second = "50";
  const percentage = "70%";
  return (
    <Box
      w="46.75rem"
      pl="3.85rem"
      pr="4.3rem"
      bgColor={"nairablue"}
      borderRadius="1.2rem"
      fontFamily={"poppins"}
    >
      <Box py="4rem" display={"flex"} flexDir="column" alignItems={"center"}>
        <Text letterSpacing={"0.15em"} fontSize={"3.43rem"} color={"nairagreen"} fontWeight={700}>
          {`${hour}  :  ${minute}  :  ${second}  :  ${percentage}`}
        </Text>
        <Box color="white" display={"flex"} gap="5.5rem">
          {times.map((time, index) => (
            <Text key={index} fontWeight={400} fontSize="lg">
              {time}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Clock;
