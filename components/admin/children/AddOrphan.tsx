import { thinnerScollbar } from '@/components/Scrollbar';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import Child from './Child';
import Family from './Family';
import OrphanInfo from './OrphanInfo';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required.'),
  age: yup.string().required('Age is required.'),
  gender: yup.string().required('Gender is required.'),
  dob: yup.string().required('Date of Birth is required.'),
  doa: yup.string().required('Date of Admission is required.'),
  birthstatus: yup.string().required('Birthstatus is required.'),
  category: yup.string().required('Category is required.'),
  ds: yup.string().required('Date surrendered is required'),
  whereabouts: yup.string().required('Whereabouts is required.'),
});

function AddOrphan({ isOpen, onClose }: any) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent h="90vh" overflowY="auto" maxW="80%" sx={thinnerScollbar}>
          <ModalHeader>Add Orphan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormProvider {...methods}>
              <form>
                <Tabs size="md" variant="enclosed">
                  <TabList>
                    <Tab>Orphan Info</Tab>
                    <Tab>The Child</Tab>
                    <Tab>The Family</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <OrphanInfo />
                    </TabPanel>
                    <TabPanel>
                      <Child />
                    </TabPanel>
                    <TabPanel>
                      <Family />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </form>
            </FormProvider>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              type="submit"
              onClick={methods.handleSubmit(onSubmit)}
            >
              Create User
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddOrphan;
