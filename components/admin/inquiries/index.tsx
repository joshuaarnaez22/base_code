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
import AddInquery from '@/components/global/AddInquery';
import InqueryTable from '@/components/global/InqueryTable';

const Inquiries = ({ inquery }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setValue] = useState<string>('');
  const [selectSearch, setSelectSearch] = useState('date');
  const [inqueries, setInqueries] = useState(inquery);

  useEffect(() => {
    setInqueries(inquery);
  }, [inquery]);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) {
      setValue('');
      setInqueries(inquery);
    }
    const filt = inqueries.filter((inquery: any) => {
      return inquery[selectSearch].toLowerCase().startsWith(value);
    });
    setValue(value);
    setInqueries(filt);
  };

  const selectionChanged = (event: any) => {
    setSelectSearch(event.target.value);
  };

  return (
    <>
      {/* <AddInquery {...{ isOpen, onClose }} type="add" /> */}
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

        <Button aria-label="Mark all as read">Mark all as read</Button>
        <CsvDownloader datas={inqueries} filename="csv" columns={UserHeaders}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        <Button bg="transparent" leftIcon={<MdPictureAsPdf />}>
          Download Pdf
        </Button>
      </Flex>
      <InqueryTable allInquery={inqueries} search={search} />
    </>
  );
};

export default Inquiries;
