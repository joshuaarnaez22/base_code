import { getAllActiveChild } from '@/services/user.service';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Input,
  Box,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Select } from 'chakra-react-select';
import Calendar from 'react-calendar';
import moment from 'moment';

const ReportModal = ({ isOpenReport, onCloseReport }: any) => {
  const [orphans, setOrphans] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [show, setShow] = useState(false);
  const [range, setRange] = useState();

  useEffect(() => {
    getAllOrphans();
  }, [isOpenReport]);

  const getAllOrphans = async () => {
    const res = await getAllActiveChild();
    res.data.map((orphan: any) => {
      orphan.label = orphan.orphans;
      orphan.value = orphan.id;
    });
    setOrphans(res.data);
  };

  const onChange = (range: any) => {
    setStartDate(range[0]);
    setEndDate(range[1]);
    const sDate = moment(startDate).format('YYYY-MM-DD');
    const eDate = moment(endDate).format('YYYY-MM-DD');

    console.log(sDate);
    console.log(eDate);

    setShow(!show);
  };

  const orphanChange = (e: any) => {
    console.log(e);
  };
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Modal isOpen={isOpenReport} onClose={onCloseReport} isCentered>
      <ModalOverlay />
      <ModalContent maxW="70%">
        <ModalHeader>Generate Report</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Box w="50%">
              <Select
                name="orphan_id"
                onChange={orphanChange}
                isMulti
                colorScheme="blue"
                options={orphans}
                // defaultValue={mealOptions[0]}
              />
            </Box>

            <Box w="50%">
              <Input
                placeholder="Date Range"
                shadow="sm"
                readOnly
                onClick={handleClick}
              />
              {show && (
                <Calendar
                  selectRange={true}
                  onChange={onChange}
                  value={[startDate, endDate]}
                />
              )}
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReportModal;
