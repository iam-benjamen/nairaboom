import { Box, Heading, chakra, Text, Link, Square } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import background from "../public/aboutpage/background.png";
import coil from "../public/how-it-works/coil.png";
import CashBack from "../components/CashBackMethod";
import icon1 from "../public/homepage/1.svg";
import icon2 from "../public/homepage/2.svg";
import icon3 from "../public/homepage/3.svg";
import icon4 from "../public/homepage/4.svg";
import icon5 from "../public/homepage/5.svg";
import icon6 from "../public/homepage/6.svg";
import number1 from "../public/how-it-works/number1.png";
import number2 from "../public/how-it-works/number2.png";
import number3 from "../public/how-it-works/number3.png";
import arrow from "../public/how-it-works/arrow.png";
import BackgroundTitle from "../components/BackgroundTitle";

const HowItWorks = () => {
  return (
    <Box>
      <NavBar />
      <BackgroundTitle image={background} longbit="How it wo" shortbit="rks" />
      <Box
        bgColor={"white"}
        fontFamily="poppins"
        pt="4.8rem"
        pb="3rem"
        backgroundImage={`url(${coil.src})`}
        backgroundPosition="right center"
        backgroundRepeat="no-repeat"
      >
        <Text textAlign={"center"} fontWeight={500} w="55%" margin={"auto"}>
          Once you get a credit alert or a debit alert after any financial
          transaction, you can immediately head to{" "}
          <Link color={"nairagreen"} href="/">
            www.nairaboom.com
          </Link>{" "}
          and place a request to double your credit alert or to get back your
          debit alert through the following steps.
        </Text>
      </Box>
      <Box
        bgColor="#F5F5F5"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDir="column"
        flexWrap={"wrap"}
        gap="5rem"
        pt="5rem"
        pb="5.2rem"
      >
        <Box display={"flex"} gap="12rem">
          <Box
            w="22rem"
            display={"flex"}
            flexDir="column"
            fontFamily={"poppins"}
          >
            <Box
              py="1.1rem"
              borderRadius={"md"}
              textAlign={"center"}
              fontWeight={500}
              fontSize="lg"
              bgColor={"nairablue"}
              color="white"
            >
              Play Cashback as a guest
            </Box>
            <Text pt="1.3rem" lineHeight={"30px"}>
              This option allows users to request cashback without having to
              register a profile or login, the user just clicks on the
              &quot;Play Cashback as Guest&quot; Tab and fills in details of the
              transaction in question.
            </Text>
            <Text pt=".5rem" as={Link} color="nairagreen">
              Read More...
            </Text>
          </Box>
          <Box
            w="22rem"
            display={"flex"}
            flexDir="column"
            fontFamily={"poppins"}
          >
            <Box
              py="1.1rem"
              borderRadius={"md"}
              textAlign={"center"}
              fontWeight={500}
              fontSize="lg"
              bgColor={"nairablue"}
              color="white"
            >
              Play Cashback with profile
            </Box>
            <Text pt="1.3rem" lineHeight={"30px"}>
              This option allows you to request cashback from within a
              registered profile from where you can keep better track of all
              your CashBack requests and CashBack history
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} gap="12rem">
          <Box
            w="22rem"
            display={"flex"}
            flexDir="column"
            fontFamily={"poppins"}
          >
            <Box
              py="1.1rem"
              borderRadius={"md"}
              textAlign={"center"}
              fontWeight={500}
              fontSize="lg"
              bgColor={"nairablue"}
              color="white"
            >
              Play Cashback from ATM
            </Box>
            <Text pt="1.3rem" lineHeight={"30px"}>
              Clicking on this option gives you step by step instructions of how
              to request CashBack directly from any ATM terminal in Nigeria for
              those who want to request directly from ATM terminals.
            </Text>
          </Box>
          <Box
            w="22rem"
            display={"flex"}
            flexDir="column"
            fontFamily={"poppins"}
          >
            <Box
              py="1.1rem"
              borderRadius={"md"}
              textAlign={"center"}
              fontWeight={500}
              fontSize="lg"
              bgColor={"nairablue"}
              color="white"
            >
              Cashout
            </Box>
            <Text pt="1.3rem" lineHeight={"30px"}>
              Clicking on this tab makes it possible for users to monitor the
              Wish Clock, Check Lucky Cashback Time and also the status of
              pending CashBack requests made.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        fontFamily={"poppins"}
        pt="4rem"
        pb="7rem"
        display={"flex"}
        flexDir="column"
        alignItems={"center"}
        px="6rem"
        bgColor={"white"}
      >
        <Heading fontFamily={"poppins"} pb="5rem">
          How to win
        </Heading>
        <Box
          display="flex"
          flexWrap={"wrap"}
          gap="3rem"
          justifyContent={"center"}
        >
          <CashBack
            number={1}
            icon={icon1}
            title="Recieve a Credit or Debit Alert"
            note="Whenever you receive a credit or debit alert, log on to www.9jacashback.com to
            request your cashback. "
          />
          <CashBack
            number={2}
            icon={icon2}
            title="Register Your Alert"
            note='Click "Play Cashback as a Guest" to request with just your phone number or "Play Cashback With Profile"  to register and request from your Profile.'
          />
          <CashBack
            number={3}
            icon={icon3}
            title="Fill a Wish Form"
            note="Fill out the wish form with details of the transaction you are requesting cashback for, Choose your Lucky time (any random time)."
          />
          <CashBack
            number={4}
            icon={icon4}
            title="Confirm and Submit Your Ticket"
            note="Confirm and Submit your ticket for your cashback request."
          />
          <CashBack
            number={5}
            icon={icon5}
            title="Pay Your Clock Token"
            note="Pay your clock token and save your entry ticket."
          />
          <CashBack
            number={6}
            icon={icon6}
            title="Check The Latest Lucky
            Cashback Time"
            note='Check the daily "Latest Lucky Cashback Time" at 12 midnight on the website or any of our social media pages to see if you won.'
          />
        </Box>
        <NextLink href={"/"} passHref>
          <Link
            bgColor={"nairagreen"}
            color="white"
            fontWeight={600}
            fontSize="lg"
            p="1rem 3rem"
            mt="4.5rem"
            borderRadius={"md"}
            transitionDuration={".3s"}
            _hover={{ transform: "scale(1.02)" }}
          >
            Load More
          </Link>
        </NextLink>
      </Box>

      {/* winning modalities */}
      <Box
        display={"flex"}
        alignItems="center"
        bgColor="nairablue"
        pt="5.3rem"
        pb="4.5rem"
        flexDir={"column"}
        fontFamily="poppins"
      >
        <Heading
          fontFamily={"poppins"}
          fontSize={"2.5rem"}
          fontWeight={700}
          color="white"
        >
          Winning Modalities
        </Heading>
        <Box
          mt="7.3rem"
          display={"flex"}
          bgColor="rgba(255, 255, 255, 0.03)"
          alignItems={"center"}
          w="80%"
          justifyContent={"space-evenly"}
          borderRadius="2rem"
        >
          <Image src={number1} alt="number 1" />
          <Box display={"flex"} flexDir="column" gap="2rem" w="65%" pr="2rem">
            <Text color="white" fontSize={"xl"}>
              If you match all 3 time units ( Hours, Mins & Secs) for either
              your Credit alert or Debit alert, you immediately get double your
              alert as cashback that will be paid into your submitted bank
              account.
            </Text>
            <Text color="white" fontSize={"xl"}>
              For example if you submit a Credit alert of 10,000 naira and your
              chosen Lucky Time matches the winning. Daily Lucky Cashback Time,
              you automatically get 10,000 naira. See as illustration below;
            </Text>
            <Text color={"white"} fontSize={"xl"}>
              Daily Lucky Cashback Time: 01:22:36 Percentage: 40% Your Chosen
              Lucky Cashback Time: 01:22:36 Your Cashback winning=10,000 naira.
              You get an automatic entry into the Mega Million Cashpot.
            </Text>
          </Box>
        </Box>

        <Box
          mt="6.6rem"
          display={"flex"}
          bgColor="rgba(255, 255, 255, 0.03)"
          alignItems={"center"}
          w="80%"
          justifyContent={"space-evenly"}
          borderRadius="2rem"
          flexDir={"row-reverse"}
        >
          <Image src={number2} alt="number 2" />
          <Box display={"flex"} flexDir="column" gap="2rem" w="65%" pl="2rem">
            <Text color="white" fontSize={"xl"}>
              If you match just two time units (Hours & Minutes/Hours &
              Seconds/Minutes & Seconds) for either your Credit alert or Debit
              alert, you immediately get your alert multiplied by the day&apos;s
              percentage as cashback that will be paid into your submitted bank
              account. For example if you submit a Credit alert of 10,000 naira
              and two of your chosen Lucky Time matches the two of the winning.
              Daily Lucky Cashback Time, you automatically get 10,000 naira
              multiplied by the day&apos;s percentage. See illustration below;
            </Text>
            <Text color="white" fontSize={"xl"}>
              Daily Lucky Cashback Time: 01:22:36 Percentage: 40% Your Chosen
              Lucky Cashback Time: 01:22:48 Your Cashback winning:10,000 naira ×
              40% = 4,000 naira You also get an automatic entry into the Mega
              Million Cashpot.
            </Text>
          </Box>
        </Box>
        <Box
          mt="6.6rem"
          display={"flex"}
          bgColor="rgba(255, 255, 255, 0.03)"
          alignItems={"center"}
          w="80%"
          justifyContent={"space-evenly"}
          borderRadius="2rem"
        >
          <Image src={number3} alt="number 3" />
          <Box display={"flex"} flexDir="column" gap="2rem" w="65%" pr="2rem">
            <Text color="white" fontSize={"xl"}>
              If you match just one single time unit (Hour/Minute/Second), you
              immediately get one (1) point to enter the monthly Mega Million
              Cashpot. See as illustration below;
            </Text>
            <Text color="white" fontSize={"xl"}>
              Daily Lucky Cashback Time: 01:22:36 Percentage: 40% Your Chosen
              Lucky Cashback Time: 01:29:36 Your Cashback winning = 1 point 10
              points = Automatic entry into the Mega Million Cashpot
            </Text>
            <Text color={"white"} fontSize={"xl"}>
              Please note, you need 10 points (10 one time unit matches) within
              a month to qualify for the Mega Million Cashpot.
            </Text>
          </Box>
        </Box>
      </Box>
      {/* winning modalities ends here */}
      <Box
        bgColor={"white"}
        fontFamily="poppins"
        display="flex"
        flexDir="column"
        alignItems="center"
        pt="6.68rem"
        pb="10rem"
      >
        <Text
          lineHeight={"3.75rem"}
          fontSize="2.5rem"
          color="nairablue"
          fontWeight={700}
          textAlign="center"
        >
          How To Qualify For Naira Boom <br /> Mega MIllion Cashpot
        </Text>
        <Text
          fontSize={"lg"}
          color="#767676"
          w="50%"
          textAlign={"center"}
          pt="2rem"
          lineHeight={"1.8rem"}
        >
          Once every month people who make CashBack requests for their Credit or
          Debit alerts on Naira Boom stand a chance to win in the 9jaCashBack
          Mega Millions CashPot and qualifying for this CashPot has never been
          easier.{" "}
        </Text>
        <Box
          pt="8.8rem"
          w="80%"
          display={"flex"}
          alignItems="flex-start"
          gap="2rem"
        >
          <Box
            display={"flex"}
            flexDir="column"
            alignItems="flex-end"
            gap="5.5rem"
            w="50%"
          >
            <Text textAlign={"right"} fontSize="xl" lineHeight={"1.8rem"}>
              Match all 3 time units (Hr:Min:Sec)
            </Text>
            <Text textAlign={"right"} fontSize="xl" lineHeight={"1.8rem"}>
              Match 2 time units (Hr: Min)
            </Text>
            <Text textAlign={"right"} fontSize="xl" lineHeight={"1.8rem"}>
              Match single time unit (Hr)
            </Text>
            <Text textAlign={"right"} fontSize="xl" lineHeight={"1.8rem"}>
              Make 20 requests for Cashback within a month (even if you
              don&quot;t match any winning time unit)
            </Text>
          </Box>

          <Box display={"flex"} flexDir="column" alignItems="center" gap="5rem">
            <Square h="39px" w="60px" borderRadius={"md"} bgColor="nairagreen">
              <Image src={arrow} alt="arrow icon" />
            </Square>

            <Square h="39px" w="60px" borderRadius={"md"} bgColor="nairagreen">
              <Image src={arrow} alt="arrow icon" />
            </Square>
            <Square h="39px" w="60px" borderRadius={"md"} bgColor="nairagreen">
              <Image src={arrow} alt="arrow icon" />
            </Square>
            <Square h="39px" w="60px" borderRadius={"md"} bgColor="nairagreen">
              <Image src={arrow} alt="arrow icon" />
            </Square>
          </Box>
          <Box
            display={"flex"}
            flexDir="column"
            alignItems="flex-start"
            gap="5rem"
            w="50%"
          >
            <Text textAlign={"left"} fontSize="xl" lineHeight={"1.8rem"}>
              Automatic entry into the Mega Million CashPot{" "}
            </Text>
            <Text textAlign={"left"} fontSize="xl" lineHeight={"1.8rem"}>
              Automatic entry into the Mega Million CashPot
            </Text>
            <Text textAlign={"left"} fontSize="xl" lineHeight={"1.8rem"}>
              1 Mega Million CashPot entry. You need to match 10 single time
              units within a month to qualify for entry into the Mega Million
              CashPot.
            </Text>
            <Text textAlign={"left"} fontSize="xl" lineHeight={"1.8rem"}>
              Mega Million CashPot entry
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        bgColor={"nairablue"}
        display="flex"
        fontFamily={"poppins"}
        py="6.5rem"
        justifyContent={"center"}
        gap="5rem"
        alignItems={"center"}
        mb="10.5rem"
      >
        <Box
          display={"flex"}
          flexDir="column"
          alignItems="flex-start"
          fontFamily={"poppins"}
          w="30%"
          gap="1rem"
        >
          <Text color={"nairagreen"} fontSize="20px">
            Enjoy Daily and Monthly Giveaways
          </Text>
          <Text color={"white"} fontSize="md">
            Be eligible to enjoy 500% cashback on A.T.M withdrawals. what are
            you waiting for?
          </Text>
        </Box>
        <NextLink href={"/"} passHref>
          <Link
            bgColor={"nairagreen"}
            color="white"
            fontWeight={600}
            fontSize="lg"
            p=".8rem 6rem"
            borderRadius={"md"}
            transitionDuration={".3s"}
            _hover={{ transform: "scale(1.02)" }}
          >
            Get Started
          </Link>
        </NextLink>
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default HowItWorks;
