import React, { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { MdSearch, MdPictureAsPdf } from 'react-icons/md';
import { UserHeaders } from '@/services/helpers';
import { FaFileCsv } from 'react-icons/fa';
import CsvDownloader from 'react-csv-downloader';
import MonitorTable from './MonitorTable';
import AddMonitor from '@/components/global/AddMonitor';

const Monitoring = (data: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setValue] = useState<string>('');
  const [selectSearch, setSelectSearch] = useState('date');
  const [monitor, setMonitor] = useState(data);

  useEffect(() => {
    setMonitor(data);
  }, [data]);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) {
      setValue('');
      setMonitor(data);
    }
    const filt = monitor.filter((orphan: any) => {
      return orphan[selectSearch].toLowerCase().startsWith(value);
    });
    setValue(value);
    setMonitor(filt);
  };

  const selectionChanged = (event: any) => {
    setSelectSearch(event.target.value);
  };

  return (
    <>
      <AddMonitor {...{ isOpen, onClose }} type="add" />
      <Flex justify="space-between">
        <Flex>
          <Select variant="normal" w="130px" onChange={selectionChanged}>
            <option value="date">Date</option>
            <option value="action">Action</option>
            <option value="createdBy">Added By</option>
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

        <Button onClick={onOpen} aria-label="Add">
          Add Monitoring
        </Button>
        <CsvDownloader datas={monitor} filename="csv" columns={UserHeaders}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        <Button bg="transparent" leftIcon={<MdPictureAsPdf />}>
          Download Pdf
        </Button>
      </Flex>
      <MonitorTable allMonitor={monitor.data.monitoring} search={search} />
    </>
  );
};

export default Monitoring;
