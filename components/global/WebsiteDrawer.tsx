import React, { useEffect } from 'react';
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
  TableContainer,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  information: yup.string().required('Information is required'),
  // services: yup.array().of(
  //   yup.object().shape({
  //     name: yup.string(),
  //   }),
  // ),
});

const WebsiteDrawer = ({
  isOpenWebsiteMenu,
  onCloseWebsiteMenu,
  btnRefWebsite,
}: any) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    reset();
  }, [isOpenWebsiteMenu]);

  const addService = () => {
    console.log(123);
  };
  return (
    <Drawer
      isOpen={isOpenWebsiteMenu}
      placement="right"
      onClose={onCloseWebsiteMenu}
      finalFocusRef={btnRefWebsite}
    >
      <DrawerOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DrawerContent maxW="450px">
          <DrawerCloseButton />
          <DrawerHeader>Update Website</DrawerHeader>
          <DrawerBody>
            <FormControl isInvalid={errors.information ? true : false}>
              <FormLabel>Information</FormLabel>
              <Input
                type="text"
                placeholder="Firstname"
                {...register('information')}
              />
              <Collapse in={errors.information ? true : false}>
                {errors.information && (
                  <FormHelperText fontSize="SubHeader.md" color="red">
                    {errors.information.message as string}
                  </FormHelperText>
                )}
              </Collapse>
            </FormControl>
            <Stack>
              <Text fontWeight="bold" mt={5}>
                Services we offer
              </Text>
              <ServiceTable />
            </Stack>
            <Stack>
              <Text fontWeight="bold" mt={5}>
                Agencies
              </Text>
              <AgencyTable />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseWebsiteMenu}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={addService} mr={3}>
              Add Service
            </Button>
            <Button colorScheme="blue" onClick={addService} mr={3}>
              Add Agency
            </Button>
            <Button colorScheme="blue" isLoading={isSubmitting} type="submit">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
};

const ServiceTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Services</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const AgencyTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Agency</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default WebsiteDrawer;
