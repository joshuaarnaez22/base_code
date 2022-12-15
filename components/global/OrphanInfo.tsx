import React from 'react';
import {
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Box,
  Accordion,
  Collapse,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

import { useFormContext } from 'react-hook-form';
import CalendarModal from './CalendarModal';

const OrphanInfo = () => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  // const AccordionData = ({ name, children }: any) => {
  //   return (
  //     <AccordionItem>
  //       <AccordionButton>
  //         <Box flex="1" textAlign="left" fontWeight="bold">
  //           {name}
  //         </Box>
  //         <AccordionIcon />
  //       </AccordionButton>
  //       <AccordionPanel pb={4}>{children}</AccordionPanel>
  //     </AccordionItem>
  //   );
  // };

  return (
    <>
      <Stack spacing="5">
        <Flex gap="3" pt="5">
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

          <FormControl maxW="200px" isInvalid={errors.gender ? true : false}>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Gender"
              variant="normal"
              {...register('gender')}
              _focus={{
                border: '2px solid blue',
              }}
              _invalid={{
                border: '2px solid #E53E3E',
              }}
            >
              <option value="Female">Male</option>
              <option value="Male">Female</option>
            </Select>
            <Collapse in={errors.gender ? true : false}>
              {errors.gender && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.gender.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <CalendarModal
            placeholder="Date of Birth"
            name="dob"
            errors={errors.dob}
            {...{ setValue, register, getValues }}
          />
        </Flex>
        <Flex gap="3">
          <FormControl isInvalid={errors.age ? true : false}>
            <FormLabel>Age</FormLabel>
            <NumberInput>
              <NumberInputField {...register('age')} placeholder="Age" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Collapse in={errors.age ? true : false}>
              {errors.age && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.age.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl isInvalid={errors.height ? true : false}>
            <FormLabel>Height</FormLabel>
            <NumberInput>
              <NumberInputField {...register('height')} placeholder="Height" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Collapse in={errors.height ? true : false}>
              {errors.height && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.height.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl isInvalid={errors.weight ? true : false}>
            <FormLabel>Weight</FormLabel>
            <NumberInput>
              <NumberInputField {...register('weight')} placeholder="Weight" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Collapse in={errors.weight ? true : false}>
              {errors.weight && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.weight.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl isInvalid={errors.waist ? true : false}>
            <FormLabel>Waist</FormLabel>
            <NumberInput>
              <NumberInputField {...register('waist')} placeholder="Waist" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Collapse in={errors.waist ? true : false}>
              {errors.waist && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.waist.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
        </Flex>
        <Flex gap="3">
          <CalendarModal
            placeholder="Date of Admission"
            name="date_admission"
            errors={errors.date_admission}
            {...{ setValue, register, getValues }}
          />
          <FormControl isInvalid={errors.birth_status ? true : false}>
            <FormLabel>Birth Status</FormLabel>
            <Input
              type="text"
              placeholder="Birth Status"
              {...register('birth_status')}
            />
            <Collapse in={errors.birth_status ? true : false}>
              {errors.birth_status && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.birth_status.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl isInvalid={errors.category ? true : false}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              placeholder="Category"
              {...register('category')}
            />
            <Collapse in={errors.category ? true : false}>
              {errors.category && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.category.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <CalendarModal
            placeholder="Date Surrendered"
            name="date_surrendered"
            errors={errors.date_surrendered}
            {...{ setValue, register, getValues }}
          />
        </Flex>
        <Flex w="60%" gap="3">
          <FormControl isInvalid={errors.present_whereabouts ? true : false}>
            <FormLabel>Present Whereabouts</FormLabel>
            <Input
              type="text"
              placeholder="Present Whereabouts"
              {...register('present_whereabouts')}
            />
            <Collapse in={errors.present_whereabouts ? true : false}>
              {errors.present_whereabouts && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.present_whereabouts.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl isInvalid={errors.moral ? true : false}>
            <FormLabel>Moral</FormLabel>
            <Input type="text" placeholder="Moral" {...register('moral')} />
            <Collapse in={errors.moral ? true : false}>
              {errors.moral && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.moral.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
        </Flex>
        <Flex w="100%">
          {/* <Accordion w="inherit" allowMultiple mt="5">
            <AccordionData name="FAMILY COMPOSITION">
              <FormControl>
                <Input type="text" placeholder="Category" />
              </FormControl>
            </AccordionData>
            <AccordionData name="SOURCE OF INFORMATION">
              <FormControl>
                <Textarea placeholder="..." />
              </FormControl>
            </AccordionData>
            <AccordionData name="CIRCUMSTANCES OF REFERRAL">
              <FormControl>
                <Textarea placeholder="..." />
              </FormControl>
            </AccordionData>
            <AccordionData name="BACKGROUND INFORMATION">
              <FormControl>
                <Textarea placeholder="..." />
              </FormControl>
            </AccordionData>
          </Accordion> */}
        </Flex>
      </Stack>
    </>
  );
};
export default OrphanInfo;