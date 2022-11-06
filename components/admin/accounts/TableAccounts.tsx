import ConfirmationModal from '@/components/global/ConfirmationModal';
import {
  TableContainer,
  Table,
  Thead,
  TableCaption,
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
import { SlOptionsVertical } from 'react-icons/sl';
import UserProfile from './UserProfile';

const TableAccounts = ({ users }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [userDeleteId, setUserDeleteId] = useState<string>('');
  const confirmDelete = (confirm: boolean) => {
    if (confirm) console.log(userDeleteId);
    else setUserDeleteId('');
  };

  const openDelete = (objectId: string) => {
    setUserDeleteId(objectId);
    onOpenDelete();
  };

  return (
    <>
      <UserProfile {...{ isOpen, onClose }} />
      <ConfirmationModal {...{ isOpenDelete, onCloseDelete, confirmDelete }} />
      <TableContainer
        maxWidth="100%"
        p="30px"
        shadow="xl"
        borderRadius="md"
        mb="20px"
      >
        <Table variant="simple">
          <TableCaption>List of users</TableCaption>
          <Thead
            fontWeight="bold"
            fontFamily="montserrat"
            fontSize="12px"
            color="gray"
            fontStyle="normal"
            letterSpacing="0.2"
          >
            <Tr>
              <Th w="45%">Profile</Th>
              <Th>Date Added</Th>
              <Th>Last Login</Th>
              <Th w="5%"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map(({ _id, email, role, status }: any) => {
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
                      <Avatar src="" name={email} />
                      <Box ml="3">
                        <Text fontWeight="bold">
                          {email}
                          <Badge
                            ml="1"
                            colorScheme={status === 'active' ? 'green' : 'red'}
                          >
                            {status === 'active' ? 'active' : 'inactive'}
                          </Badge>
                        </Text>
                        <Text fontSize="sm">{role}</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>Nov 22, 2022</Td>
                  <Td>Nov 22, 2022</Td>
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
                        <MenuItem>Update</MenuItem>
                        <MenuItem onClick={() => openDelete(_id)}>
                          Delete
                        </MenuItem>
                        <MenuItem onClick={onOpen}>View Profile</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableAccounts;
