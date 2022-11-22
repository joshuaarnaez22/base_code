import {
  Flex,
  // Select,
  // InputGroup,
  // InputLeftElement,
  // Icon,
  // Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import AddVisit from './AddVisit';
// import ScheduleTable from './ScheduleTable';
// import { MdSearch } from 'react-icons/md';

const Index = ({ orphans }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [search, setValue] = useState<string>('');
  // const [selectSearch, setSelectSearch] = useState('firstname');
  // const [allOrphans, setAllOrphans] = useState(orphans);

  // const handleSearch = (e: any) => {
  //   const { value } = e.target;
  //   if (!value) {
  //     setValue('');
  //     setAllOrphans(orphans);
  //   }
  //   const filt = orphans.filter((orphan: any) => {
  //     return orphan[selectSearch].toLowerCase().startsWith(value);
  //   });
  //   setValue(value);
  //   setAllOrphans(filt);
  // };

  // const selectionChanged = (event: any) => {
  //   setSelectSearch(event.target.value);
  // };
  return (
    <Flex direction="column">
      <AddVisit {...{ isOpen, onClose }} />
      <Button bg="transparent" leftIcon={<FaClock />} onClick={onOpen}>
        Setup a visit
      </Button>
      {/* <Flex justify="space-between">
        <Flex>
          <Select variant="normal" w="130px" onChange={selectionChanged}>
            <option value="firstname">Firstname</option>
            <option value="lastname">Lastname</option>
            <option value="status">Status</option>
          </Select>
          <InputGroup w="300px">
            <InputLeftElement pointerEvents="none">
              <Icon as={MdSearch} color="gray.300" />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search"
              shadow="sm"
              variant="search"
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </Flex>
      </Flex> */}
      {/* <ScheduleTable orphans={allOrphans} search={search} /> */}
    </Flex>
  );
};

export default Index;
