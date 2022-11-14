import React from "react";
import {
  Text,
  Flex,
  Spacer,
  Container,
  Accordion,
  Button,
  Box,
  Image,
  Show,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  VStack,
  Stack,
  Link,
  Icon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Heading,
  Fade,
  SlideFade,
  Slide,
  Divider
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <>
      <Container
        maxW='6xl'
        py={{ base: "20px", sm: "20px", md: "22px", lg: "30px" }}
      >
        <Flex align='center' justify='space-between' minW='max-content'>
          <Box>
            <Image
              width={{ base: "50%", sm: "60%", lg: "65%" }}
              src='https://i.postimg.cc/6qkn9sRz/locometer.png'
              alt='logo'
            />
          </Box>
          <Spacer />
          <Hide below='lg'>
            <Popover>
              <PopoverTrigger>
                <Button
                  fontSize='1.2rem'
                  fontWeight='normal'
                  bg='none'
                  _hover={{ color: "orange.400" }}
                  rightIcon={<ChevronDownIcon ml='-5px' />}
                >
                  Products
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody boxShadow='sm'>
                  <Stack spacing='8' direction='column' p='10px'>
                    <Flex align='center' justify='left' gap='30px'>
                      <Image
                        w='50px'
                        src='https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg'
                        alt='main'
                      />
                      <Stack direction='column' textAlign='left'>
                        <Link
                          lineHeight='30px'
                          _hover={{ color: "orange.400" }}
                        >
                          Locometer
                        </Link>
                        <Link
                          lineHeight='30px'
                          _hover={{ color: "orange.400" }}
                          fontSize='14px'
                          color='gray.400'
                        >
                          For Individuals
                        </Link>
                      </Stack>
                    </Flex>
                    <Flex align='center' justify='left' gap='30px'>
                      <Image
                        w='50px'
                        src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg'
                        alt='pro'
                      />
                      <Stack direction='column' textAlign='left'>
                        <Link
                          lineHeight='30px'
                          _hover={{ color: "orange.400" }}
                        >
                          Locometer Pro
                        </Link>
                        <Link
                          lineHeight='30px'
                          _hover={{ color: "orange.400" }}
                          fontSize='14px'
                          color='gray.400'
                        >
                          For Healthcare Professionals
                        </Link>
                      </Stack>
                    </Flex>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Flex fontSize='1.2rem' align='center' gap='24px'>
              <Link _hover={{ color: "orange.400" }}>Support</Link>
              <Link _hover={{ color: "orange.400" }}>Blog</Link>
              <Link _hover={{ color: "orange.400" }}>Forums</Link>
              <Link _hover={{ color: "orange.400" }}>About</Link>
              <Button
                _hover={{ bg: "gray.50" }}
                bg='none'
                border='1px solid'
                borderColor='orange.400'
                color='orange.400'
                ml='16px'
                px='36px'
                py='20px'
                boxShadow='md'
                fontSize='1rem'
                letterSpacing='1.275px'
              >
                Log In
              </Button>
            </Flex>
          </Hide>
          <Show below='lg'>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  boxShadow='md'
                  _hover={{ bg: "orange.400", color: "white" }}
                  p={{ base: "4", sm: "5" }}
                  bg='none'
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                />
              </PopoverTrigger>
              <PopoverContent
                mt='30px'
                w='100vw'
                textAlign='left'
                border='none'
                pl='2px'
              >
                <Accordion allowMultiple>
                  <AccordionItem border='none'>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex='1'
                          textAlign='left'
                          fontSize='1rem'
                          mb='10px'
                          ml='2px'
                        >
                          Products
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack
                        spacing={{ base: "4", sm: "4", md: "6" }}
                        direction='column'
                        p='10px'
                      >
                        <Flex align='center' justify='left' gap='30px'>
                          <Image
                            w={{ base: "10%", sm: "5%", md: "5%" }}
                            src='https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg'
                            alt='main'
                          />
                          <Stack
                            spacing='0.5'
                            direction='column'
                            textAlign='left'
                          >
                            <Link _hover={{ color: "orange.400" }}>
                              Locometer
                            </Link>
                            <Link
                              lineHeight='30px'
                              fontSize='14px'
                              color='gray.400'
                              _hover={{ color: "orange.400" }}
                            >
                              For Individuals
                            </Link>
                          </Stack>
                        </Flex>
                        <Flex align='center' justify='left' gap='30px'>
                          <Image
                            w={{ base: "10%", sm: "5%", md: "5%" }}
                            src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg'
                            alt='pro'
                          />
                          <Stack
                            spacing='0.5'
                            direction='column'
                            textAlign='left'
                          >
                            <Link
                              lineHeight='30px'
                              _hover={{ color: "orange.400" }}
                            >
                              Locometer Pro
                            </Link>
                            <Link
                              lineHeight='30px'
                              fontSize='14px'
                              color='gray.400'
                              _hover={{ color: "orange.400" }}
                            >
                              For Healthcare Professionals
                            </Link>
                          </Stack>
                        </Flex>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Stack
                  textAlign='left'
                  spacing='10'
                  direction='column'
                  p='18px'
                  fontSize='1rem'
                >
                  <Link _hover={{ color: "orange.400" }}>Blog</Link>
                  <Link _hover={{ color: "orange.400" }}>Forums</Link>
                  <Link _hover={{ color: "orange.400" }}>About</Link>
                  <Link _hover={{ color: "orange.400" }}>Support</Link>
                </Stack>
                <Button
                  _hover={{ bg: "gray.50" }}
                  bg='none'
                  w='15%'
                  border='1px solid'
                  borderColor='orange.400'
                  color='orange.400'
                  mt='4'
                  ml='16px'
                  px='36px'
                  py='20px'
                  boxShadow='md'
                  fontSize='1rem'
                  letterSpacing='1.275px'
                >
                  LOG IN
                </Button>
              </PopoverContent>
            </Popover>
          </Show>
        </Flex>
      </Container>

      <Container maxW='6xl' mt='9'>
        <HStack maxW='max-content' justify='center' spacing='20' pl='80px'>
          <SlideFade in='false' offsetX='-300px'>
            <Image
              src='https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg'
              alt='mobile'
              w={{ base: "100%", lg: "600px" }}
            />
          </SlideFade>
          <Box textAlign='left'>
            <Box>
              <Heading
                as='h1'
                fontSize='50'
                color='#505050'
                letterSpacing='1.2px'
                lineHeight='55px'
              >
                Eat smarter.
                <br />
                Live better.
              </Heading>
            </Box>
            <Heading
              fontSize='29px'
              fontWeight='normal'
              color='#505050'
              lineHeight='40px'
              letterSpacing='0.5px'
              mt='20px'
            >
              Track your calories, exercise, biometrics and health data.
            </Heading>
            <Button
              px='60px'
              py='30px'
              mt='60px'
              fontSize='20px'
              color='white'
              bg='#ff7043'
              boxShadow='base'
              _hover={{ bg: "#ff7043", boxShadow: "xl" }}
            >
              Sign Up - It's Free!
            </Button>
            <Text mt='40px' fontSize='18px' letterSpacing='1px'>
              Already have an account?
              <Link _hover={{ color: "orange.400" }} textDecoration='underline'>
                Log In.
              </Link>
            </Text>
          </Box>
        </HStack>
      </Container>

      <Container>
        <Heading
          fontSize='24'
          fontWeight='normal'
          color='#505050'
          lineHeight='40px'
          letterSpacing='0.5px'
          mt='20px'
        >
          As Seen On
        </Heading>
        <HStack spacing='28' justify='center' align='center' my='20px'>
          <Image
            w='40%'
            src='https://cdn1.cronometer.com/2021/landing/media-mention-2.svg'
            alt='womens-health'
          />
          <Image
            w='40%'
            src='https://cdn1.cronometer.com/2021/landing/media-mention-1.svg'
            alt='life-hacker'
          />
          <Image
            w='40%'
            src='https://cdn1.cronometer.com/2021/landing/media-mention-3.svg'
            alt='mens-journal'
          />
        </HStack>
        <Heading
          fontSize='24'
          fontWeight='normal'
          color='#505050'
          lineHeight='40px'
          letterSpacing='0.5px'
          mt='30px'
        >
          Available on Web, iOS and Android
        </Heading>
        <HStack spacing='4' justify='center' align='center' my='30px'>
          <Button w='35%' px='0px'>
            <Image
              w='100%'
              src='https://cdn1.cronometer.com/2021/landing/ios-icon.svg'
              alt='apple-store'
            />
          </Button>
          <Button w='35%' px='0px'>
            <Image
              w='100%'
              src='https://cdn1.cronometer.com/2021/landing/android-icon.svg'
              alt='google-play-store'
            />
          </Button>
        </HStack>
      </Container>

      <Container bg='#fafafa' maxW='100%' py='24' mt='24'>
        <Box w='40%' m='auto' color='#505050'>
          <Heading letterSpacing='0.75px'>Discover your nutrition</Heading>
          <Text fontSize='24px' mt='10px'>
            Locometer encourages you to not just count your calories but to
            focus on your nutrition as a whole.
          </Text>
        </Box>
        <HStack
          spacing='10'
          justify='center'
          align='center'
          alignSelf='normal'
          m='auto'
          mt='24'
          mb='8'
          w='80%'
        >
          <Box w='30%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/community-icon.svg'
              alt='community-icon'
            />
            <Text fontSize='24px' fontWeight='medium' mt='10px'>
              Over 5 million users
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box w='30%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg'
              alt='nutrition-icon'
            />
            <Text fontSize='24px' fontWeight='medium' mt='10px'>
              Accurate nutrition data
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Box>
          <Box w='30%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/security-icon.svg'
              alt='security-icon'
            />
            <Text fontSize='24px' fontWeight='medium' mt='10px'>
              Data privacy & security
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Box>
        </HStack>
      </Container>

      <Container maxW='100%' py='24'>
        <Box w='36%' m='auto' color='#505050'>
          <Heading letterSpacing='0.75px'>Develop healthy habits</Heading>
          <Text fontSize='24px' mt='10px'>
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </Text>
        </Box>
        <HStack
          spacing='20'
          justify='center'
          align='center'
          alignSelf='normal'
          m='auto'
          mt='20'
          mb='8'
          w='80%'
        >
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg'
              alt='micronutrients-icon'
            />
            <Text fontSize='24px' fontWeight='bold' mt='10px'>
              Track up to 82 micronutrients
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/diary-icon.svg'
              alt='diary-icon'
            />
            <Text fontSize='24px' fontWeight='bold' m='auto' mt='10px' w='75%'>
              Log meals, exercise and biometrics
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>
          </Box>
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/reports-icon.svg'
              alt='reports-icon'
            />
            <Text fontSize='24px' fontWeight='bold' m='auto' mt='10px' w='75%'>
              Valuable reports and charts
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </HStack>
        <HStack
          spacing='20'
          justify='center'
          align='center'
          alignSelf='normal'
          m='auto'
          mt='20'
          mb='8'
          w='80%'
        >
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/scale-icon.svg'
              alt='scale-icon'
            />
            <Text fontSize='24px' fontWeight='bold' mt='10px'>
              Custom diet settings
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Set weight, macro & nutrient targets to meet your goals.
            </Text>
          </Box>
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/fasting-icon.svg'
              alt='fasting-icon'
            />
            <Text fontSize='24px' fontWeight='bold' mt='10px'>
              Fasting timer
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Track your intermittent fasts and see their effect over time.
            </Text>
          </Box>
          <Box w='26%' color='#505050'>
            <Image
              h='24'
              m='auto'
              src='https://cdn1.cronometer.com/2021/landing/food-icon.svg'
              alt='food-icon'
            />
            <Text fontSize='24px' fontWeight='bold' mt='10px'>
              Diet support
            </Text>
            <Text fontSize='20px' mt='10px' lineHeight='28px'>
              Whether you’re Keto, Vegan, or on one recommended by your doctor.
            </Text>
          </Box>
        </HStack>
      </Container>

      <Container maxW='100%' mt='8' pb='14' bg='#fafafa'>
        <Heading
          w='40%'
          m='auto'
          color='#505050'
          fontSize='28'
          letterSpacing='0.75px'
          lineHeight='40px'
          fontWeight='medium'
        >
          Find out if you're getting the vitamins and minerals you need with our
          food diary app.
        </Heading>
        <Button
          color='white'
          fontSize='20px'
          fontWeight='medium'
          bg='#ff7043'
          px='16'
          py='8'
          mt='14'
          _hover={{ bg: "#ff7043", shadow: "dark-lg" }}
        >
          Sign Up - It's Free!
        </Button>
      </Container>

      <Container maxW='100%' py='24'>
        <Heading color='#505050' fontWeight='medium' letterSpacing='0.75px'>
          Sync with Apps and Devices
        </Heading>
        <Text fontSize='24px' color='#505050' mt='20px'>
          Sync Locometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
        <Image
          w='65%'
          m='auto'
          mt='14'
          src='https://cdn1.cronometer.com/2021/landing/devices-p-1600.png'
          alt='devices'
        />
      </Container>

      <Container bg='#424242' maxW='100%' py='16' mt='6'>
        <Box>
          <Flex align='center' justify='center' gap='20px'>
            <Link w='3%' px='0px'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png'
                alt='instagram-icon'
              />
            </Link>
            <Link w='3%' px='0px'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png'
                alt='facebook-icon'
              />
            </Link>
            <Link w='3%' px='0px'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png'
                alt='twitter-icon'
              />
            </Link>
            <Link w='3%' px='0px'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png'
                alt='youtube-icon'
              />
            </Link>
          </Flex>
          <Flex align='center' justify='center' gap='20px' mt='30px'>
            <Link w='10%'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/ios-icon.svg'
                alt='ios-icon'
              />
            </Link>
            <Link w='10%'>
              <Image
                src='https://cdn1.cronometer.com/2021/landing/android-icon.svg'
                alt='android-icon'
              />
            </Link>
          </Flex>
        </Box>
        <Divider w='75%' m='auto' mt='16' />
        <Box w='75%' m='auto' py='12'>
          <Flex justify='left' align='flex-start' gap='20'>
            <Image
              w='20%'
              src='https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg'
              alt='logo'
            />
            <Stack
              direction='column'
              spacing='6'
              textAlign='left'
              color='white'
              mr='16'
            >
              <Text fontSize='20px' fontWeight='bold' mb='-2.5'>
                Locometer
              </Text>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                For Individuals
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                For Professionals
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Privacy
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Terms
              </Link>
            </Stack>
            <Stack
              direction='column'
              spacing='6'
              textAlign='left'
              color='white'
              mr='16'
            >
              <Text fontSize='20px' fontWeight='bold' mb='-2.5'>
                The Company
              </Text>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                About Us
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Loco Blog
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Loco Forums
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Jobs
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Support
              </Link>
            </Stack>
            <Stack
              direction='column'
              spacing='6'
              textAlign='left'
              color='white'
            >
              <Text fontSize='20px' fontWeight='bold' mb='-2.5'>
                Partners & Affiliates
              </Text>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Affilate Program
              </Link>
              <Link _hover={{ textDecoration: "none", color: "orange.500" }}>
                Media Kit
              </Link>
            </Stack>
          </Flex>
        </Box>
        <Text fontSize='xl' color='white' w='15%' m='auto'>
          Copyright © 2011-2022 All rights reserved
        </Text>
      </Container>
    </>
  );
};

export default Home;
