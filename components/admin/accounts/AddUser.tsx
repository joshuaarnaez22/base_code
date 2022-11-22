import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Collapse,
  Input,
  FormControl,
  Select,
  FormLabel,
  Stack,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Icon,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { thinnerScollbar } from '@/components/Scrollbar';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { createUser } from '@/services/user.service';
import { useRouter } from 'next/router';

interface Props {
  isOpen: any;
  onClose: any;
  selectedUpdate?: any;
  type?: string;
}
const AddUser = ({ isOpen, onClose, selectedUpdate, type }: Props) => {
  const router = useRouter();
  const [password, showPassword] = useState<boolean>(false);
  const [confirmPass, showConfirmPass] = useState<boolean>(false);
  const toast = useToast();

  const schema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email is required.'),
    username: yup.string().required('Username is required.'),
    role: yup.string().required('Role is required.'),
    password: yup.string().required('Password is required.'),
    confirm: yup
      .string()
      .required('Confirm Password is required.')
      .oneOf([yup.ref('password'), null], 'Passwords do not match.'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedUpdate) {
      reset({
        email: selectedUpdate.email,
        username: selectedUpdate.username,
        role: selectedUpdate.role,
        password: '',
        confirm: '',
      });
    }
  }, [selectedUpdate]);
  const onSubmit = async (data: any) => {
    try {
      const { success, message } = await createUser(data);
      if (!success && message === 'User name or Email already exists ') {
        toastUI(2, message, 'Already exists');
      }
      if (success && message === 'Account Registered successfully') {
        toastUI(1, message, 'Account created.');
        // reset();
        router.replace('/admin/accounts');
        onClose();
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent maxH="90vh" overflowY="auto" sx={thinnerScollbar}>
        <ModalHeader>Add User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <Stack gap="3">
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'robo',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('email')}
                />
                <Collapse in={errors.email ? true : false}>
                  {errors.email && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.email.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Username"
                  autoComplete="off"
                  _placeholder={{
                    color: 'white',
                    opacity: '.5',
                    fontFamily: 'robo',
                    fontSize: 'SubHeader.lg',
                  }}
                  {...register('username')}
                />
                <Collapse in={errors.username ? true : false}>
                  {errors.username && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.username.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Select
                  placeholder="Select Role"
                  variant="normal"
                  {...register('role')}
                >
                  <option value="admin">Admin</option>
                  <option value="foster">Foster</option>
                  <option value="socialworker">Social Worker</option>
                </Select>
                <Collapse in={errors.role ? true : false}>
                  {errors.role && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.role.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              {type !== 'view' && (
                <>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Password"
                        autoComplete="off"
                        type={password ? 'text' : 'password'}
                        _placeholder={{
                          color: 'white',
                          opacity: '.5',
                          fontFamily: 'robo',
                          fontSize: 'SubHeader.lg',
                        }}
                        {...register('password')}
                      />

                      <InputRightElement>
                        <Icon
                          onClick={() => showPassword(!password)}
                          as={password ? FiEye : FiEyeOff}
                          color="black"
                          _hover={{
                            cursor: 'pointer',
                            transform: 'scale(1.1)',
                            transition: 'all 1s ease',
                          }}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <Collapse in={errors.password ? true : false}>
                      {errors.password && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.password.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Confirm Password"
                        autoComplete="off"
                        type={confirmPass ? 'text' : 'password'}
                        _placeholder={{
                          color: 'white',
                          opacity: '.5',
                          fontFamily: 'robo',
                          fontSize: 'SubHeader.lg',
                        }}
                        {...register('confirm')}
                      />

                      <InputRightElement>
                        <Icon
                          onClick={() => showConfirmPass(!confirmPass)}
                          as={confirmPass ? FiEye : FiEyeOff}
                          color="black"
                          _hover={{
                            cursor: 'pointer',
                            transform: 'scale(1.1)',
                            transition: 'all 1s ease',
                          }}
                        />
                      </InputRightElement>
                    </InputGroup>
                    <Collapse in={errors.confirm ? true : false}>
                      {errors.confirm && (
                        <FormHelperText fontSize="SubHeader.md" color="red">
                          {errors.confirm.message as string}
                        </FormHelperText>
                      )}
                    </Collapse>
                  </FormControl>
                </>
              )}
            </Stack>
          </form>
        </ModalBody>

        <ModalFooter>
          {type !== 'view' && (
            <>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
                Create User
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddUser;
