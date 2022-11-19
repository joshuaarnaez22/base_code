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
import React, { useState } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import Pagination from '@/components/global/Pagination';
import AddUser from './AddUser';
import Delete from '@/components/global/Delete';
const TableAccounts = ({ users }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [userDeleteId, setUserDeleteId] = useState<string>('');
  const [selectedUpdate, setSelectedUpdate] = useState();
  const [type, setType] = useState('');
  //delete dialog
  const confirmDelete = (confirm: boolean) => {
    if (confirm) console.log(userDeleteId);
    else setUserDeleteId('');
  };

  //delete
  const deleteAccount = (objectId: string) => {
    setUserDeleteId(objectId);
    onOpenDelete();
  };

  //Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / 10);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % users.length;
    setItemOffset(newOffset);
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
      <AddUser {...{ isOpen, onClose, selectedUpdate, type }} />
      <Delete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        name="Delete User"
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
          {!users.length && <TableCaption>No Accounts</TableCaption>}
          <Thead
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize="12px"
            color="gray"
            fontStyle="normal"
            letterSpacing="0.2"
          >
            <Tr>
              <Th w="35%" fontWeight="bolder">
                Profile
              </Th>
              <Th fontWeight="bolder">Email </Th>
              <Th fontWeight="bolder">Date Added</Th>
              <Th fontWeight="bolder">Last Login</Th>
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
                      <Avatar src="" name={currentItem.email} />
                      <Box ml="3">
                        <Text fontWeight="bold">
                          {currentItem.username}
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
                          {currentItem.role}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td fontWeight="bold">{currentItem.email}</Td>
                  <Td fontWeight="bold">Nov 22, 2022</Td>
                  <Td fontWeight="bold">Nov 22, 2022</Td>
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
        {!!users.length && (
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        )}
      </TableContainer>
    </>
  );
};

export default TableAccounts;
