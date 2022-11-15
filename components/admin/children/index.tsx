import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MdSearch, MdPictureAsPdf } from 'react-icons/md';
import CsvDownloader from 'react-csv-downloader';
import { FaFileCsv } from 'react-icons/fa';
import { UserHeaders } from '@/services/helpers';
import { pdfDownloader } from '@/services/pdfDownload';
import AddOrphan from './AddOrphan';
import ChildrenTable from './ChildrenTable';

const Childrens = ({ orphans }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const children: any = [{ name: 'josh', age: 39 }];
  const headers = [
    {
      id: 'name',
      displayName: 'name',
    },
    {
      id: 'age',
      displayName: 'age',
    },
  ];
  return (
    <>
      <AddOrphan {...{ isOpen, onClose }} />
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
        <Button onClick={onOpen}>Add Orphan</Button>
        {/* <Button onClick={update}>update User</Button> */}

        <CsvDownloader datas={children} filename="csv" columns={headers}>
          <Button bg="transparent" leftIcon={<FaFileCsv />}>
            Download Csv
          </Button>
        </CsvDownloader>
        <Button
          bg="transparent"
          //   onClick={download}
          //   disabled={!users.length}
          leftIcon={<MdPictureAsPdf />}
        >
          Download Pdf
        </Button>
      </Flex>
      <ChildrenTable orphans={orphans} />
    </>
  );
};

export default Childrens;
