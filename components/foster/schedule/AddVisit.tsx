import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  useDisclosure,
  Collapse,
  Box,
  Text,
  Textarea,
  Stack,
} from '@chakra-ui/react';
import { thinnerScollbar } from '@/components/Scrollbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CgCalendarDates } from 'react-icons/cg';
import moment from 'moment';
const AddVisit = ({ isOpen, onClose }: any) => {
  const [date, setDate] = useState(new Date());
  const { isOpen: CollapseOpen, onToggle } = useDisclosure();

  const dateFocus = () => {
    onToggle();
  };

  const calendarChange = (date: any) => {
    setDate(date);
    onToggle();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <ModalOverlay />
      <ModalContent h="90vh" overflowY="auto" sx={thinnerScollbar} maxW="400px">
        <ModalHeader>Setup Visitation Date</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap="5">
            <Box>
              <Text>Date:</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={CgCalendarDates} color="gray.300" />
                </InputLeftElement>
                <Input
                  value={moment(date).format('MMM Do YY')}
                  type="text"
                  placeholder="Date"
                  onClick={dateFocus}
                  readOnly
                />
              </InputGroup>
              <Collapse in={CollapseOpen} animateOpacity>
                <Calendar
                  onChange={calendarChange}
                  value={date}
                  minDate={new Date()}
                />
              </Collapse>
            </Box>
            <Box h="150px">
              <Text>Note:</Text>
              <Textarea placeholder="Enter note here..." h="100%" />
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Create User</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddVisit;
