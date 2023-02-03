import React, { useEffect, useState } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
  TableContainer,
} from '@chakra-ui/react';
import ServiceModal from './ServiceModal';
import AgencyModal from './AgencyModal';
import { addWebsiteService, getlatestData } from '@/services/user.service';

const WebsiteDrawer = ({
  isOpenWebsiteMenu,
  onCloseWebsiteMenu,
  btnRefWebsite,
}: any) => {
  const [allServices, setAllServices] = useState<any>([]);
  const [allAgency, setAllAgency] = useState<any>([]);
  const [information, setInformation] = useState('');
  const [contact_number, setContact_number] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const {
    isOpen: isOpenService,
    onOpen: onOpenService,
    onClose: onCloseService,
  } = useDisclosure();
  const {
    isOpen: isOpenAgency,
    onOpen: onOpenAgency,
    onClose: onCloseAgency,
  } = useDisclosure();

  const service = () => {
    onOpenService();
  };
  const addService = (params: any) => {
    setAllServices((prev: any) => [...prev, params]);
  };

  const agency = () => {
    onOpenAgency();
  };

  const addAgency = (params: any) => {
    setAllAgency((prev: any) => [...prev, params]);
  };

  const onSubmit = async (data: any) => {
    data.preventDefault();
    console.log(allServices);
    console.log(allAgency);
    // try {
    //   const payload = {
    //     services: allServices,
    //     trusted_agency: allAgency,
    //     information,
    //     contact_number,
    //     email,
    //     address,
    //   };
    //   const query = await addWebsiteService(payload);
    //   console.log(query);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    (async () => {
      const { landingPageData }: { landingPageData: any } =
        await getlatestData();
      console.log(landingPageData);

      setAllServices(landingPageData.services);
      setAllAgency(landingPageData.trusted_agency);
      setInformation(landingPageData.information);
      setContact_number(landingPageData.contact_number);
      setEmail(landingPageData.email);
      setAddress(landingPageData.address);
    })();
  }, []);
  return (
    <>
      <ServiceModal {...{ isOpenService, onCloseService, addService }} />
      <AgencyModal {...{ isOpenAgency, onCloseAgency, addAgency }} />
      <Drawer
        isOpen={isOpenWebsiteMenu}
        placement="right"
        onClose={onCloseWebsiteMenu}
        finalFocusRef={btnRefWebsite}
      >
        <DrawerOverlay />
        <form onSubmit={onSubmit}>
          <DrawerContent maxW="450px">
            <DrawerCloseButton />
            <DrawerHeader>Update Website</DrawerHeader>
            <DrawerBody>
              <Stack gap="5">
                <FormControl>
                  <FormLabel>Information</FormLabel>
                  <Input
                    type="text"
                    placeholder="Information"
                    value={information}
                    onChange={(e: any) => setInformation(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Contact Number</FormLabel>
                  <Input
                    type="text"
                    placeholder="Contact Number"
                    value={contact_number}
                    onChange={(e: any) => setContact_number(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel> Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e: any) => setAddress(e.target.value)}
                  />
                </FormControl>
              </Stack>

              <Stack mt="10">
                <Text fontWeight="bold" mt={5}>
                  Services we offer
                </Text>
                <ServiceTable allServices={allServices} />
              </Stack>
              <Stack mt="10">
                <Text fontWeight="bold" mt={5}>
                  Agencies
                </Text>
                <AgencyTable allAgency={allAgency} />
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onCloseWebsiteMenu}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={service} mr={3}>
                Add Service
              </Button>
              <Button colorScheme="blue" onClick={agency} mr={3}>
                Add Agency
              </Button>
              <Button colorScheme="blue" type="submit">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

const ServiceTable = ({ allServices }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Services</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allServices.map((service: any, index: number) => {
            return (
              <Tr key={index}>
                <Td>{service.title}</Td>
                <Td>{service.value}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const AgencyTable = ({ allAgency }: any) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Agency</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allAgency.map((agency: any, index: number) => {
            return (
              <Tr key={index}>
                <Td>{agency.title}</Td>
                <Td>{agency.value}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default WebsiteDrawer;
