import React, { useState } from 'react';
import {
  Button,
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react';
import { hideScollbar } from '@/components/Scrollbar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import { inquiryAdd } from '@/services/user.service';

// const BgProps = {
//   height: '100vh',
//   width: '100%',
//   pos: 'absolute',
//   zIndex: '0',
// } as any;

// const HeaderMenuProps = {
//   fontFamily: 'robo',
//   fontSize: 'SubHeader.lg',
//   fontWeight: 'normal',
//   cursor: 'pointer',
// };

const Website = ({ resources }: any) => {
  const toast = useToast();
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    await inquiryAdd(form);
    setForm({ email: '', phone: '', name: '', message: '' });
    setLoader(false);
    toastUI(1, 'Inquiry successfully sent', 'Success');
  };
  const toastUI = (type: number, description: string, title: string) => {
    toast({
      status: type == 1 ? 'success' : 'error',
      variant: 'left-accent',
      position: 'top-right',
      isClosable: true,
      title,
      description: `${description}`,
      duration: 5000,
    });
  };
  return (
    <>
      <Box
        h="100vh"
        overflow="scroll"
        scrollBehavior="smooth"
        sx={hideScollbar}
        pos="relative"
        m="0"
        p="0"
        w="100vw"
      >
        <FirstSection />
        <SecondSection />
        <ThirdSection resources={resources} />

        <Flex>
          <Flex
            w="100vw"
            justify="center"
            align="center"
            h="90vh"
            direction={{ base: 'column', lg: 'row' }}
          >
            <Flex w="50%">
              <Flex
                direction="column"
                align="center"
                w="80%"
                mx="auto"
                py="30px"
                boxShadow="2xl"
                rounded="md"
                bg="white"
              >
                <Text fontSize="32px" fontWeight="bolder">
                  Contact Us
                </Text>
                <Box w="50%">
                  <form onSubmit={handleSubmit}>
                    <Flex direction="column" gap="10" w="auto">
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          placeholder="Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          placeholder="Email address"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          required
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Phone number</FormLabel>
                        <InputGroup>
                          <InputLeftAddon>+63</InputLeftAddon>
                          <Input
                            type="number"
                            placeholder="Phone number"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            required
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          placeholder="Message"
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          required
                        />
                      </FormControl>
                      <Button
                        mt="3"
                        type="submit"
                        isLoading={loader}
                        loadingText="Sending..."
                      >
                        Submit
                      </Button>
                    </Flex>
                  </form>
                </Box>
              </Flex>
            </Flex>
            <Flex w="50%" h="inherit">
              <iframe
                src="https://maps.google.com/maps?q=JW37+PW8,%20San%20Francisco%20St.%20San%20Sebastian%20Village,%20Brgy.%20Sum-Ag,%20Bacolod,%206100%20Negros%20Occidental&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
              ></iframe>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" h="10vh" bg="gray">
          footer
        </Flex>
      </Box>
    </>
  );
};

export default Website;
