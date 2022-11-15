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
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import Child from './Child';
import Family from './Family';
import OrphanInfo from './OrphanInfo';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { createOrphan } from '@/services/orphans.service';

const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required.'),
  lastname: yup.string().required('Lastname is required.'),
  age: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Age is required.'),
  gender: yup.string().required('Gender is required.'),
  dob: yup.string().required('Date of Birth is required.'),
  height: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Height is required.'),
  weight: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Weight is required.'),
  waist: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Waist is required.'),
  date_admission: yup.string().required('Date of Admission is required.'),
  birth_status: yup.string().required('Birth status is required.'),
  category: yup.string().required('Category is required.'),
  date_surrendered: yup.string().required('Date surrendered is required'),
  present_whereabouts: yup.string().required('Whereabouts is required.'),
  moral: yup.string().required('Moral is required.'),
});

function AddOrphan({ isOpen, onClose }: any) {
  const toast = useToast();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: any) => {
    try {
      const res = await createOrphan(data);
      if (res.success) {
        toastUI(1, res.message, 'Orphan created');
        reset();
        onClose();
      } else {
        toastUI(2, res.message, 'Error');
      }
    } catch (error) {
      console.log(error);
    }
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
              isLoading={isSubmitting}
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
