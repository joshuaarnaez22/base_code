import React, { useEffect } from 'react';
import { thinnerScollbar } from '@/components/Scrollbar';
import {
  Button,
  Collapse,
  FormControl,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CalendarModal from '@/components/global/CalendarModal';

const schema = yup.object().shape({
  purpose: yup.string().required('Puspose is required.'),
  visit_date: yup.string().required('Visitation Date is required.'),
});

const AddVisitation = ({ isOpen, onClose }: any) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    reset,
    setValue,
    register,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent overflowY="auto" maxW="40%" sx={thinnerScollbar}>
        <ModalHeader>Add Visitation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormProvider {...methods}>
            <form>
              <Stack gap="2">
                <CalendarModal
                  placeholder="Visitation Date"
                  name="visit_date"
                  errors={errors.visit_date}
                  {...{ setValue, register }}
                />
                <FormControl isInvalid={errors.purpose ? true : false}>
                  <FormLabel>Purpose</FormLabel>
                  <Textarea placeholder="Purpose" {...register('purpose')} />
                  <Collapse in={errors.purpose ? true : false}>
                    {errors.purpose && (
                      <FormHelperText fontSize="SubHeader.md" color="red">
                        {errors.purpose.message as string}
                      </FormHelperText>
                    )}
                  </Collapse>
                </FormControl>
              </Stack>
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
            Add Visitation
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddVisitation;
