import React, { useState } from 'react';
import {
    Text,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    Icon,
    Flex,
    Stack,
    Collapse,
    useDisclosure,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useFormContext, useFormState } from 'react-hook-form';

const LoginFields = () => {
    const [password, showPassword] = useState<boolean>(false);
    const [confirmPass, showConfirmPass] = useState<boolean>(false);
    const {
        register,
        formState: { isSubmitting },
    } = useFormContext();
    const { errors } = useFormState();
    return (
        <>
            <Flex gap="7" direction="column" align="center">
                <Text
                    fontSize="Header.lg"
                    fontWeight="normal"
                    fontFamily="lexendDeca"
                >
                    Sign In
                </Text>
                <Text
                    fontSize="Header.xs"
                    fontWeight="normal"
                    fontFamily="lexendDeca"
                >
                    Sign in and start managing your candidates!
                </Text>
                <Stack>
                    <Input
                        color="white"
                        w="300px"
                        bg="black300"
                        placeholder="Username"
                        _placeholder={{
                            color: 'white',
                            fontWeight: 'bold',
                            opacity: '.5',
                        }}
                        {...register('username')}
                    />
                    <Collapse
                        in={errors.username ? true : false}
                        animateOpacity
                    >
                        {errors.username && (
                            <Text fontSize="SubHeader.md" color="red">
                                {errors.username.message as string}
                            </Text>
                        )}
                    </Collapse>
                </Stack>
                <Stack>
                    <InputGroup w="300px">
                        <Input
                            color="white"
                            bg="black300"
                            placeholder="Password"
                            type={password ? 'text' : 'password'}
                            _placeholder={{
                                color: 'white',
                                fontWeight: 'bold',
                                opacity: '.5',
                            }}
                            {...register('password')}
                        />

                        <InputRightElement>
                            <Icon
                                onClick={() => showPassword(!password)}
                                as={password ? FiEye : FiEyeOff}
                                color="white"
                                _hover={{
                                    cursor: 'pointer',
                                    transform: 'scale(1.1)',
                                    transition: 'all 1s all ease',
                                }}
                            />
                        </InputRightElement>
                    </InputGroup>

                    <Collapse in={errors.password ? true : false}>
                        {errors.password && (
                            <Text fontSize="SubHeader.md" color="red">
                                {errors.password.message as string}
                            </Text>
                        )}
                    </Collapse>
                </Stack>

                <Stack>
                    <InputGroup w="300px">
                        <Input
                            color="white"
                            bg="black300"
                            placeholder="Confirm Password"
                            type={confirmPass ? 'text' : 'password'}
                            _placeholder={{
                                color: 'white',
                                fontWeight: 'bold',
                                opacity: '.5',
                            }}
                            {...register('confirmPassword')}
                        />

                        <InputRightElement>
                            <Icon
                                onClick={() => showConfirmPass(!confirmPass)}
                                as={confirmPass ? FiEye : FiEyeOff}
                                color="white"
                                _hover={{
                                    cursor: 'pointer',
                                    transform: 'scale(1.1)',
                                    transition: 'all 1s all ease',
                                }}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <Collapse in={errors.confirmPassword ? true : false}>
                        {errors.confirmPassword && (
                            <Text fontSize="SubHeader.md" color="red">
                                {errors.confirmPassword.message as string}
                            </Text>
                        )}
                    </Collapse>
                </Stack>

                <Button
                    w="300px"
                    color="black300"
                    fontFamily="lexendDeca"
                    fontSize="SubHeader.lg"
                    bg="green500"
                    type="submit"
                    isLoading={isSubmitting}
                >
                    Login
                </Button>
            </Flex>
        </>
    );
};

export default LoginFields;
