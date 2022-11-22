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
  Box,
  Select,
} from '@chakra-ui/react';
import { MdSearch, MdPictureAsPdf } from 'react-icons/md';
// import Loader from '@/components/global/Loader';
import TableAccounts from './TableAccounts';
import CsvDownloader from 'react-csv-downloader';
import { FaFileCsv } from 'react-icons/fa';
import { UserHeaders } from '@/services/helpers';
import { pdfDownloader } from '@/services/pdfDownload';

const Accounts = ({ users }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allUser, setAllUsers] = useState(users);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setValue] = useState<string>('');
  const [selectSearch, setSelectSearch] = useState('username');

  useEffect(() => {
    setAllUsers(users);
  }, [users]);

  const handleSearch = (e: any) => {
    const { value } = e.target;
    if (!value) {
      setValue('');
      setAllUsers(users);
    }
    const filt = users.filter((user: any) => {
      return user[selectSearch].toLowerCase().startsWith(value);
    });
    setValue(value);
    setAllUsers(filt);
  };
  const selectionChanged = (e: any) => {
    setSelectSearch(e.target.value);
  };

  const download = () => {
    const outputData = [...allUser];
    outputData.forEach((out: any) => {
      delete out.id;
      delete out._id;
    });
    const header = [['Email', 'Username', 'Role', 'status']];
    const body = outputData.map(Object.values);
    pdfDownloader(header, body);
  };

  return (
    <>
      <AddUser {...{ isOpen, onClose }} type="add" />
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

        <Button onClick={onOpen} aria-label="Add">
          Add Account
        </Button>
        {/* <Button onClick={update}>update User</Button> */}

        <CsvDownloader datas={allUser} filename="csv" columns={UserHeaders}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        <Button
          bg="transparent"
          onClick={download}
          disabled={!users.length}
          leftIcon={<MdPictureAsPdf />}
        >
          Download Pdf
        </Button>
      </Flex>

      {/* {!isLoading ? ( */}
      <TableAccounts users={allUser} search={search} />
      {/* ) : (
        <Flex h="75vh" align="center" justify="center">
          <Loader size="24" color="gray" thickness="3px" />
        </Flex>
      )} */}
    </>
  );
};

export default Accounts;
