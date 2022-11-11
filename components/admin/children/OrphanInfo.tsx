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
} from '@chakra-ui/react';

import CalendarModal from './CalendarModal';

const OrphanInfo = () => {
  const [birthDate, setBirthDate] = useState('');
  const [admissionDate, setAddmissionDate] = useState('');
  const [dateSurrendered, setDateSurrendered] = useState('');

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
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Name" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
          <FormControl maxW="150px">
            <FormLabel>Age</FormLabel>
            <Input type="text" placeholder="Age" />
            {/* <FormHelperText></FormHelperText> */}
          </FormControl>
          <FormControl maxW="200px">
            <FormLabel>Gender</FormLabel>
            <Select placeholder="Gender" variant="normal">
              <option value="Female">Male</option>
              <option value="Male">Female</option>
            </Select>
            {/* <FormHelperText></FormHelperText> */}
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
          <Accordion w="inherit" defaultIndex={[0]} allowMultiple mt="5">
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
