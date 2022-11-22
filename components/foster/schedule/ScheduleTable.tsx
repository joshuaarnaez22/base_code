import React, { useEffect, useState } from 'react';
import { Capitalize } from '@/services/helpers';
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Flex,
  Avatar,
  Box,
  Badge,
  Td,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Text,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import { SlOptionsVertical } from 'react-icons/sl';
import Pagination from '@/components/global/Pagination';
import AddOrphan from '@/components/admin/children/AddOrphan';

const ScheduleTable = ({ orphans, search }: any) => {
  const [type, setType] = useState('');
  const [selectedUpdate, setSelectedUpdate] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = orphans.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(orphans.length / 10);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % orphans.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [orphans]);

  const scheduleUpdate = (id: string) => {
    console.log(id);
  };

  const handleView = (data: any) => {
    setType('view');
    setSelectedUpdate(data);
    onOpen();
  };
  return (
    <>
      <AddOrphan {...{ isOpen, onClose, selectedUpdate, type }} />
      <TableContainer
        maxWidth="100%"
        p="30px"
        shadow="xl"
        borderRadius="md"
        mb="20px"
      >
        <Table variant="striped">
          {!orphans.length && <TableCaption>No Accounts</TableCaption>}
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
            {currentItems.map((currentItem: any) => {
              return (
                <Tr
                  key={currentItem._id}
                  fontSize="12px"
                  color="gray"
                  fontStyle="normal"
                  letterSpacing="0.2"
                >
                  <Td>
                    <Flex>
                      <Avatar src="" name={currentItem.firstname} />
                      <Box ml="3">
                        <Text fontWeight="bold">
                          {`${Capitalize(currentItem.firstname)} ${Capitalize(
                            currentItem.lastname,
                          )}`}
                          <Badge
                            ml="1"
                            colorScheme={
                              currentItem.status === 'active' ? 'green' : 'red'
                            }
                            fontSize="10px"
                          >
                            {currentItem.status === 'active'
                              ? 'active'
                              : 'inactive'}
                          </Badge>
                        </Text>
                        <Text fontSize="sm" fontWeight="bold">
                          {` ${currentItem.age} ${
                            currentItem.age <= 1 ? 'year' : 'years'
                          } old`}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td fontWeight="bold">
                    {currentItem.gender ? currentItem.gender : ''}
                  </Td>
                  <Td fontWeight="bold">
                    {currentItem.dob
                      ? moment(currentItem.dob).format('MMM DD YYYY')
                      : ''}
                  </Td>
                  <Td fontWeight="bold">
                    {currentItem.dob
                      ? moment(currentItem.date_admission).format('MMM DD YYYY')
                      : ''}
                  </Td>
                  <Td fontWeight="bold">
                    {currentItem.dob
                      ? moment(currentItem.date_surrendered).format(
                          'MMM DD YYYY',
                        )
                      : ''}
                  </Td>
                  <Td>
                    <Menu>
                      <MenuButton
                        _hover={{
                          cursor: 'pointer',
                          shadow: 'md',
                          bg: 'main',
                          transition: 'all .5s ease',
                        }}
                        transition="all .5s ease"
                        bg="transparent"
                        borderRadius="full"
                        as={IconButton}
                        aria-label="Options"
                        icon={<SlOptionsVertical />}
                      ></MenuButton>
                      <MenuList minWidth="180px">
                        <MenuItem
                          onClick={() => scheduleUpdate(currentItem._id)}
                        >
                          Schedule Visit
                        </MenuItem>
                        <MenuItem onClick={() => handleView(currentItem)}>
                          View Profile
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <Box mt="4" />
        {/* Pagination */}
        {!!orphans.length && !search && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
        {!!orphans.length && search && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </TableContainer>
    </>
  );
};

export default ScheduleTable;
