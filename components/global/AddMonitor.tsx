import React, { useEffect, useState } from 'react';
import {
  Button,
  Collapse,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { thinnerScollbar } from '../Scrollbar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CalendarModal from './CalendarModal';
import { Select } from 'chakra-react-select';
import {
  addMonitoringOrphans,
  getAllActiveChild,
} from '@/services/user.service';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';
import cookie from 'js-cookie';

interface Props {
  isOpen: any;
  onClose: any;
  selectedUpdate?: any;
  type?: string;
}

const schema = yup.object().shape({
  date: yup.string().required('Date is required.'),
  education: yup.string().required('Education is required.'),
  daily_health: yup.string().required('Education is required.'),
  action: yup.string().required('Action is required.'),
  chores: yup.string().required('Chores is required.'),
  meal: yup.string().required('Meal is required.'),
  orphan_id: yup
    .array()
    .required('Orphan is required.')
    .min(1, 'Please pick at least 1 Orphan')
    .of(
      yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
      }),
    ),
});
const AddMonitor = ({ isOpen, onClose, selectedUpdate, type }: Props) => {
  const router = useRouter();
  const toast = useToast();
  const [activeOrphans, setActiveOrphans] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const { userId }: { userId: string } = jwt_decode(
        cookie.get('token') as any,
      );
      const payload = { ...data, addedby: userId };
      payload.orphan_id.map((orp: any) => {
        orp.name = orp.label;
        delete orp.label;
        delete orp.value;
        delete orp._id;
        delete orp.orphans;
      });

      const res = await addMonitoringOrphans(payload);
      toastUI(1, res.message, 'Successfully added');
      reset();
      onClose();
      router.replace(router.asPath);
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
  const change = (e: any) => {
    setValue('orphan_id', e, { shouldValidate: true, shouldDirty: true });
  };
  useEffect(() => {
    getAllActiveOrphans();
  }, []);

  const getAllActiveOrphans = async () => {
    const res = await getAllActiveChild();
    res.data.map((orphan: any) => {
      orphan.label = orphan.orphans;
      orphan.value = orphan.id;
    });
    setActiveOrphans(res.data);
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
          sx={thinnerScollbar}
          maxW="50%"
        >
          <ModalHeader>
            {type === 'add' && 'Add Monitoring'}
            {type === 'view' && 'View Monitoring'}
            {type === 'update' && 'Update Monitoring'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Flex gap="3" pt="5" direction="column">
                <Flex>
                  <FormControl isInvalid={!!errors.orphan_id} id="orphan_id">
                    <FormLabel>Orphans</FormLabel>
                    <Select
                      {...register('orphan_id')}
                      name="orphan_id"
                      onChange={change}
                      isMulti
                      colorScheme="blue"
                      options={activeOrphans}
                    />
                    <Collapse in={errors.orphan_id ? true : false}>
                      {errors.orphan_id && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.orphan_id.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                </Flex>
                <Flex gap="3">
                  <FormControl isInvalid={errors.meal ? true : false}>
                    <FormLabel>Meal</FormLabel>
                    <Input
                      type="text"
                      placeholder="Meal"
                      {...register('meal')}
                    />
                    <Collapse in={errors.meal ? true : false}>
                      {errors.meal && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.meal.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                  <CalendarModal
                    placeholder="Date"
                    name="date"
                    errors={errors.date}
                    {...{ setValue, register, getValues }}
                  />
                  <FormControl isInvalid={errors.chores ? true : false}>
                    <FormLabel>Chores</FormLabel>
                    <Input
                      type="text"
                      placeholder="Chores"
                      {...register('chores')}
                    />
                    <Collapse in={errors.chores ? true : false}>
                      {errors.chores && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.chores.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                  <FormControl isInvalid={errors.education ? true : false}>
                    <FormLabel>Education</FormLabel>
                    <Input
                      type="text"
                      placeholder="Education"
                      {...register('education')}
                    />
                    <Collapse in={errors.education ? true : false}>
                      {errors.education && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.education.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                </Flex>
                <Flex gap="3">
                  <FormControl isInvalid={errors.daily_health ? true : false}>
                    <FormLabel>Daily Health</FormLabel>
                    <Input
                      type="text"
                      placeholder="Daily Health"
                      {...register('daily_health')}
                    />
                    <Collapse in={errors.daily_health ? true : false}>
                      {errors.daily_health && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.daily_health.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                  <FormControl isInvalid={errors.action ? true : false}>
                    <FormLabel>Action</FormLabel>
                    <Input
                      type="text"
                      placeholder="Action"
                      {...register('action')}
                    />
                    <Collapse in={errors.action ? true : false}>
                      {errors.action && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.action.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                </Flex>
              </Flex>
            </form>
          </ModalBody>

          <ModalFooter>
            {type !== 'view' && (
              <>
                <Button colorScheme="gray" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={handleSubmit(onSubmit)}
                  isLoading={isSubmitting}
                >
                  {type === 'update' && 'Update Monitoring'}
                  {type === 'add' && 'Create Monitoring'}
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddMonitor;
