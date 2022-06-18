import {
  Box,
  FormLabel,
  Input,
  Checkbox,
  Link,
  chakra,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import signupbg from "../public/signup/bg.svg";
import loginbg from "../public/login/bg.svg";
import nairaboomlogo from "../public/navassets/nairaboom-logo.svg";
import Image from "next/image";
import { useState } from "react";

const RegisterPage = () => {
  const bgies = [loginbg, signupbg];

  const [bgImage, setbgImage] = useState(0);
  const bg = bgies[bgImage];

  return (
    <Box
      h="max-content"
      bgColor={"#F7F7F7"}
      backgroundImage={`url(${bg.src})`}
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
      pl="8rem"
      pt="4.8rem"
    >
      <Box as={Link} href="/">
        <Image src={nairaboomlogo} alt="nairaboom logo" />
      </Box>

      <Box w="27.5rem" fontFamily={"poppins"} mt="7rem">
        <Tabs
          variant="unstyled"
          isFitted
          onChange={(index) => setbgImage(index)}
          defaultIndex={1}
        >
          <TabList>
            <Tab
              _selected={{
                color: "nairagreen",
                borderTop: "5px solid",
                borderColor: "nairagreen",
              }}
              borderTop="5px solid white"
              borderRadius={"3px"}
              color="#A7A7A7"
              fontSize={"1.6rem"}
            >
              Log In
            </Tab>
            <Tab
              _selected={{
                color: "nairagreen",
                borderTop: "5px solid",
                borderColor: "nairagreen",
              }}
              borderTop="5px solid white"
              borderRadius={"3px"}
              color="#A7A7A7"
              fontSize={"1.6rem"}
            >
              Register
            </Tab>
          </TabList>
          <TabPanels pt="5rem">
            <TabPanel>
              <form action="">
                {/* LOGIN */}
                <Input
                  placeholder="Email"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"email"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="2rem"
                />
                <Input
                  placeholder="Password"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"password"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="3rem"
                />
                <Checkbox>Remember me</Checkbox>
                <chakra.span
                  mb="6rem"
                  float={"right"}
                  as={Link}
                  textDecoration={"underline"}
                >
                  Forgot Password?
                </chakra.span>
                <Input
                  value={"Log In"}
                  w="27.5rem"
                  border={"none"}
                  color="white"
                  bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
                  type={"submit"}
                  fontWeight={600}
                  fontSize="lg"
                  mb="15.5rem"
                  cursor={"pointer"}
                />
              </form>
            </TabPanel>
            <TabPanel>
              <form action="">
                {/* REGISTER */}
                <Input
                  placeholder="Full Name"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"text"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="2rem"
                />
                <Input
                  placeholder="Email"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"email"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="2rem"
                />
                <Input
                  placeholder="Phone Number"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"tel"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="2rem"
                />
                <Input
                  placeholder="Password"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"password"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="3rem"
                />
                <Input
                  placeholder="Confirm Password"
                  w="100%"
                  h="3.6rem"
                  border={"none"}
                  bgColor="white"
                  type={"password"}
                  _placeholder={{ fontSize: "17.62px" }}
                  mb="3rem"
                />
                <Input
                  value={"Register"}
                  w="27.5rem"
                  border={"none"}
                  color="white"
                  bgGradient="linear(180deg, #02D95A 0%, #02B54C 100%)"
                  type={"submit"}
                  fontWeight={600}
                  fontSize="lg"
                  mb="5rem"
                  cursor={"pointer"}
                />
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default RegisterPage;
