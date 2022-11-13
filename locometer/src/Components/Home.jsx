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
  Slide
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
        <HStack
          maxW='max-content'
          justify='center'
          spacing='20'
          border='1px solid red'
          pl='80px'
        >
          <SlideFade in='false' offsetX='-300px'>
            <Image
              src='https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg'
              alt='mobile'
              w={{ base: "100%" }}
              loading='lazy'
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
            <Text mt='40px' fontSize='18px'>
              Already have an account?
              <Link _hover={{ color: "orange.400" }} textDecoration='underline'>
                Log In.
              </Link>
            </Text>
          </Box>
        </HStack>
      </Container>
    </>
  );
};

export default Home;
