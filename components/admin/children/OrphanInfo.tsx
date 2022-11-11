import React, { useState } from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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

import CalendarModal from './CalendarModal';
import { useFormContext } from 'react-hook-form';

const OrphanInfo = () => {
  const [birthDate, setBirthDate] = useState('');
  const [admissionDate, setAddmissionDate] = useState('');
  const [dateSurrendered, setDateSurrendered] = useState('');
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const AccordionData = ({ name, children }: any) => {
    return (
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{children}</AccordionPanel>
      </AccordionItem>
    );
  };

  return (
    <>
      <Stack spacing="5">
        <Flex gap="3" pt="5">
          <FormControl isInvalid={errors.name ? true : false}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Name" {...register('name')} />
            <Collapse in={errors.name ? true : false}>
              {errors.name && (
                <FormHelperText fontSize="SubHeader.md" color="red">
                  {errors.name.message as string}
                </FormHelperText>
              )}
            </Collapse>
          </FormControl>
          <FormControl maxW="150px" isInvalid={errors.age ? true : false}>
            <FormLabel>Age</FormLabel>
            <NumberInput>
              <NumberInputField {...register('age')} />
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
          <FormControl maxW="200px" isInvalid={errors.gender ? true : false}>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Gender"
              variant="normal"
              {...register('gender')}
              _invalid={{
                border: '2px solid red',
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
            date={birthDate}
            name="Date of Birth"
            setDateFunc={setBirthDate}
          />
        </Flex>
        <Flex gap="3">
          <CalendarModal
            date={admissionDate}
            name="Date of Admission"
            setDateFunc={setAddmissionDate}
          />
          <FormControl>
            <FormLabel>Birth Status</FormLabel>
            <Input type="text" placeholder="Birth Status" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Input type="text" placeholder="Category" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
        </Flex>
        <Flex w="60%" gap="3">
          <CalendarModal
            date={dateSurrendered}
            name="Date Surrendered "
            setDateFunc={setDateSurrendered}
          />
          <FormControl>
            <FormLabel>Present Whereabouts</FormLabel>
            <Input type="text" placeholder="Present Whereabouts" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
        </Flex>
        <Flex w="100%">
          <Accordion w="inherit" allowMultiple mt="5">
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
          </Accordion>
        </Flex>
      </Stack>
    </>
  );
};
export default OrphanInfo;
