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
  TableCaption,
} from '@chakra-ui/react';
import { SlOptionsVertical } from 'react-icons/sl';

import React, { useState } from 'react';
import Pagination from '@/components/global/Pagination';
import moment from 'moment';
import { Capitalize } from '@/services/helpers';
import Delete from '@/components/global/Delete';
import AddOrphan from './AddOrphan';

const ChildrenTable = ({ orphans }: any) => {
  const cancelRef = React.useRef();
  const [orphanDeleteId, setOrphanDeleteId] = useState<string>('');
  const [type, setType] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUpdate, setSelectedUpdate] = useState();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  //Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = orphans.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(orphans.length / 10);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % orphans.length;
    setItemOffset(newOffset);
  };

  //delete dialog
  const confirmDelete = (confirm: boolean) => {
    console.log(confirm);
    console.log(orphanDeleteId);
  };

  //delete
  const deleteAccount = (objectId: string) => {
    setOrphanDeleteId(objectId);
    onOpenDelete();
  };

  //update
  const handleUpdate = (data: any) => {
    setType('update');
    setSelectedUpdate(data);
    onOpen();
  };

  //view
  const handleView = (data: any) => {
    setType('view');
    setSelectedUpdate(data);
    onOpen();
  };
  return (
    <>
      <AddOrphan {...{ isOpen, onClose, selectedUpdate, type }} />
      <Delete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        name="Delete Orphan"
        {...{
          cancelRef,
          confirmDelete,
        }}
      />
      <TableContainer
        maxWidth="100%"
        p="30px"
        shadow="xl"
        borderRadius="md"
        mb="20px"
      >
        <Table variant="simple">
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
                        <MenuItem onClick={() => handleUpdate(currentItem)}>
                          Update
                        </MenuItem>
                        <MenuItem
                          onClick={() => deleteAccount(currentItem._id)}
                        >
                          Delete
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
        {!!orphans.length && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </TableContainer>
    </>
  );
};

export default ChildrenTable;
