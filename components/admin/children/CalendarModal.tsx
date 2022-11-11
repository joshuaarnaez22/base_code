import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CgCalendarDates } from 'react-icons/cg';

const CalendarModal = ({ date, name, setDateFunc }: any) => {
  //   const [date, setDate] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();

  const calendarChange = (date: any) => {
    setDateFunc(date);
    const ISOFormat = moment(date).toDate().toISOString();
    onClose();
  };

  const ModalCalendar = ({ isOpen: open, onClose: close }: any) => {
    return (
      <Modal isOpen={open} onClose={close}>
        <ModalOverlay />
        <ModalContent pb="5">
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Calendar
                onChange={calendarChange}
                value={date ? date : new Date()}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <>
      <ModalCalendar {...{ isOpen, onClose }} />
      <FormControl>
        <FormLabel>{name}</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={CgCalendarDates} color="gray.300" />
          </InputLeftElement>
          <Input
            value={date ? moment(date).format('MMM Do YYYY') : ''}
            type="text"
            placeholder={name}
            onClick={onOpen}
            readOnly
          />
        </InputGroup>
        {/* <FormHelperText></FormHelperText> */}
      </FormControl>
    </>
  );
};

export default CalendarModal;
