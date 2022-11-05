import React, { useEffect, useState } from 'react';
import AddUser from './AddUser';
import {
  Flex,
  InputGroup,
  useDisclosure,
  InputLeftElement,
  Icon,
  Input,
  Button,
  Text,
  Box,
  Select,
} from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import Loader from '@/components/global/Loader';
import TableAccounts from './TableAccounts';
import CsvDownloader from 'react-csv-downloader';
import { FaFileCsv } from 'react-icons/fa';
import { UserHeaders } from '@/services/helpers';
import Pdf from '@/components/global/Pdf';

const Accounts = ({ users }: any) => {
  const [isClient, setIsClient] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setValue] = useState<string>('');
  const [pdfDownload, setPdfDownload] = useState<any>();
  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (value) setIsLoading(true);
    else setIsLoading(false);
    setValue(value);
  };
  // const update = async () => {
  //   const res = users.splice(0, 5);
  //   setPdfDownload(res);
  // };

  const selectionChanged = (e: any) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    setIsClient(true);
    setPdfDownload(users);
  }, []);
  return (
    <>
      <Box>
        <AddUser {...{ isOpen, onClose }} />
      </Box>
      <Flex justify="space-between">
        {/* <Text>Accounts</Text> */}
        <Flex>
          <Select variant="normal" w="130px" onChange={selectionChanged}>
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
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </Flex>

        <Button onClick={onOpen}>Add User</Button>
        {/* <Button onClick={update}>update User</Button> */}

        <CsvDownloader datas={users} filename="csv" columns={UserHeaders}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        {!isClient ? (
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Loading Document...
          </Button>
        ) : (
          <Pdf users={pdfDownload} />
        )}
      </Flex>
      {!isLoading ? (
        <TableAccounts users={users} />
      ) : (
        <Flex h="75vh" align="center" justify="center">
          <Loader size="24" color="gray" thickness="3px" />
        </Flex>
      )}
    </>
  );
};

export default Accounts;
