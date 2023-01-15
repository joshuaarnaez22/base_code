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
  Collapse,
  FormHelperText,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  useDisclosure,
  TableContainer,
} from '@chakra-ui/react';
import ServiceModal from './ServiceModal';
import AgencyModal from './AgencyModal';

const WebsiteDrawer = ({
  isOpenWebsiteMenu,
  onCloseWebsiteMenu,
  btnRefWebsite,
}: any) => {
  const [allServices, setAllServices] = useState<any>([]);
  const [allAgency, setAllAgency] = useState<any>([]);
  const [about, setAbout] = useState('');
  const [title, setTitle] = useState('');

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

  const onSubmit = (data: any) => {
    data.preventDefault();
    console.log(title);
    console.log(about);
  };
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
                  <FormLabel>Title</FormLabel>
                  <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>About Us</FormLabel>
                  <Input
                    type="text"
                    placeholder="About Us"
                    value={about}
                    onChange={(e: any) => setAbout(e.target.value)}
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
