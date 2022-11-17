import React from 'react';
import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { MdSearch, MdPictureAsPdf } from 'react-icons/md';
import { UserHeaders } from '@/services/helpers';
import { FaFileCsv } from 'react-icons/fa';
import CsvDownloader from 'react-csv-downloader';

const History = ({ histories }: any) => {
  return (
    <>
      <Flex justify="space-between">
        <Flex>
          <Select variant="normal" w="130px">
            <option value="username">Username</option>
            <option value="role">Role</option>
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
            />
          </InputGroup>
        </Flex>
        <CsvDownloader datas={histories} filename="csv" columns={UserHeaders}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        <Button bg="transparent" leftIcon={<MdPictureAsPdf />}>
          Download Pdf
        </Button>
      </Flex>
    </>
  );
};

export default History;
