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
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
// import Child from './Child';
// import Family from './Family';
import OrphanInfo from './OrphanInfo';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createOrphan } from '@/services/orphans.service';
import moment from 'moment';
import { useRouter } from 'next/router';

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

interface Props {
  isOpen: any;
  onClose: any;
  selectedUpdate?: any;
  type?: string;
}

function AddOrphan({ isOpen, onClose, selectedUpdate, type }: Props) {
  const toast = useToast();
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (selectedUpdate) {
      reset({
        firstname: selectedUpdate.firstname,
        lastname: selectedUpdate.lastname,
        age: selectedUpdate.age,
        gender: selectedUpdate.gender,
        dob: moment(new Date(selectedUpdate.dob)).utc().format('YYYY-MM-DD'),
        height: selectedUpdate.height,
        weight: selectedUpdate.weight,
        waist: selectedUpdate.waist,
        date_admission: moment(new Date(selectedUpdate.date_admission))
          .utc()
          .format('YYYY-MM-DD'),
        birth_status: selectedUpdate.birth_status,
        category: selectedUpdate.category,
        date_surrendered: moment(new Date(selectedUpdate.date_surrendered))
          .utc()
          .format('YYYY-MM-DD'),
        present_whereabouts: selectedUpdate.present_whereabouts,
        moral: selectedUpdate.moral,
      });
    }
  }, [selectedUpdate]);

  const onSubmit = async (data: any) => {
    try {
      const res = await createOrphan(data);
      if (res.success) {
        toastUI(1, res.message, 'Orphan created');
        reset();
        onClose();
        router.replace(router.asPath);
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
        <ModalContent
          maxH="90vh"
          overflowY="auto"
          maxW="80%"
          sx={thinnerScollbar}
        >
          <ModalHeader>Add Orphan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormProvider {...methods}>
              <form>
                <OrphanInfo />
              </form>
            </FormProvider>
          </ModalBody>
          {type !== 'view' && (
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
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddOrphan;
