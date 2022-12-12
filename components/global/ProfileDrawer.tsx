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
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  username: yup.string().required('Username is required'),
  password: yup.string().notRequired(),
  oldpassword: yup.string().notRequired(),
});

const ProfileDrawer = ({ isOpen, onClose, btnRef }: any) => {
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
  }, [isOpen]);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update your profile</DrawerHeader>
          <DrawerBody>
            <Stack gap="3">
              <FormControl isInvalid={errors.firstname ? true : false}>
                <FormLabel>Firstname</FormLabel>
                <Input
                  type="text"
                  placeholder="Firstname"
                  {...register('firstname')}
                />
                <Collapse in={errors.firstname ? true : false}>
                  {errors.firstname && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.firstname.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl isInvalid={errors.lastname ? true : false}>
                <FormLabel>Lastname</FormLabel>
                <Input
                  type="text"
                  placeholder="Lastname"
                  {...register('lastname')}
                />
                <Collapse in={errors.lastname ? true : false}>
                  {errors.lastname && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.lastname.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl isInvalid={errors.email ? true : false}>
                <FormLabel>Email</FormLabel>
                <Input type="text" placeholder="Email" {...register('email')} />
                <Collapse in={errors.email ? true : false}>
                  {errors.email && (
                    <FormHelperText fontSize="SubHeader.md" color="red">
                      {errors.email.message as string}
                    </FormHelperText>
                  )}
                </Collapse>
              </FormControl>
              <FormControl isInvalid={errors.username ? true : false}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Username"
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
              <FormControl isInvalid={errors.oldpassword ? true : false}>
                <FormLabel>Old Password</FormLabel>
                <Input
                  type="text"
                  placeholder="Old Password"
                  {...register('oldpassword')}
                />
              </FormControl>
              <FormControl isInvalid={errors.password ? true : false}>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="text"
                  placeholder="New Password"
                  {...register('password')}
                />
              </FormControl>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
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

export default ProfileDrawer;
