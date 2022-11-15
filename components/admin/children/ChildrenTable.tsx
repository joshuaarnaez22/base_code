// import Pagination from '@/components/global/Pagination';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Menu,
  MenuItem,
  MenuButton,
  IconButton,
  MenuList,
  useDisclosure,
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Pagination from '@/components/global/Pagination';
import moment from 'moment';
import { Capitalize } from '@/services/helpers';

const ChildrenTable = ({ orphans }: any) => {
  //Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = orphans.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(orphans.length / 10);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % orphans.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <TableContainer
        maxWidth="100%"
        p="30px"
        shadow="xl"
        borderRadius="md"
        mb="20px"
      >
        <Table variant="simple">
          <Thead
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize="12px"
            color="gray"
            fontStyle="normal"
            letterSpacing="0.2"
          >
            <Tr>
              <Th w="45%" fontWeight="bolder">
                Profile
              </Th>
              <Th fontWeight="bolder">Gender</Th>
              <Th fontWeight="bolder">Date of birth</Th>
              <Th fontWeight="bolder">Date of Admission</Th>
              <Th fontWeight="bolder">Date surrendered</Th>

              <Th w="5%"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map(
              ({
                _id,
                firstname,
                lastname,
                age,
                gender,
                dob,
                status,
                date_admission,
                date_surrendered,
              }: any) => {
                return (
                  <Tr
                    key={_id}
                    fontSize="12px"
                    color="gray"
                    fontStyle="normal"
                    letterSpacing="0.2"
                  >
                    <Td>
                      <Flex>
                        <Avatar src="" name={firstname} />
                        <Box ml="3">
                          <Text fontWeight="bold">
                            {`${Capitalize(firstname)} ${Capitalize(lastname)}`}
                            <Badge
                              ml="1"
                              colorScheme={
                                status === 'active' ? 'green' : 'red'
                              }
                              fontSize="10px"
                            >
                              {status === 'active' ? 'active' : 'inactive'}
                            </Badge>
                          </Text>
                          <Text fontSize="sm" fontWeight="bold">
                            {` ${age} ${age <= 1 ? 'year' : 'years'} old`}
                          </Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td fontWeight="bold">{gender ? gender : ''}</Td>
                    <Td fontWeight="bold">
                      {dob ? moment(dob).format('MMM DD YYYY') : ''}
                    </Td>
                    <Td fontWeight="bold">
                      {dob ? moment(date_admission).format('MMM DD YYYY') : ''}
                    </Td>
                    <Td fontWeight="bold">
                      {dob
                        ? moment(date_surrendered).format('MMM DD YYYY')
                        : ''}
                    </Td>
                    <Td>Actions</Td>
                  </Tr>
                );
              },
            )}
          </Tbody>
        </Table>
        <Box mt="4" />
        {/* Pagination */}
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </TableContainer>
    </>
  );
};

export default ChildrenTable;
