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
  // Text,
  Select,
} from '@chakra-ui/react';
import { MdSearch, MdPictureAsPdf } from 'react-icons/md';
import TableAccounts from './TableAccounts';
import CsvDownloader from 'react-csv-downloader';
import { FaFileCsv } from 'react-icons/fa';
import { UserHeaders } from '@/services/helpers';
import { pdfDownloader } from '@/services/pdfDownload';
import { useRouter } from 'next/router';

const Accounts = ({ users }: any) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allUser, setAllUsers] = useState(users);
  const [search, setValue] = useState<string>('');
  const [selectSearch, setSelectSearch] = useState('username');

  useEffect(() => {
    setAllUsers(users);
  }, [users]);

  const filteredUser = allUser.filter((user: any) => {
    return user[selectSearch].toLowerCase().startsWith(search.toLowerCase());
  });

  const selectionChanged = (e: any) => {
    setSelectSearch(e.target.value);
  };

  const download = () => {
    const outputData = [...allUser];
    const mappedData: any = [];
    outputData.forEach(({ email, username, role, status }) => {
      const data = {
        email,
        username,
        role,
        status,
      };
      mappedData.push({ ...data });
    });
    const header = [['Email', 'Username', 'Role', 'status']];
    const body = mappedData.map(Object.values);
    pdfDownloader(header, body);
    // router.replace(router.asPath);
    window.location.reload();
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
              onChange={(e) => setValue(e.target.value)}
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
      <TableAccounts users={filteredUser} search={search} />
    </>
  );
};

export default Accounts;
