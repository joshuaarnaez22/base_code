import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Navbar from '@/components/styles/Navbar';
import AdminSideMenu from '@/components/styles/admin/AdminSideMenu';
import FosterSideMenu from '@/components/styles/foster/FosterSideMenu';

export default function Layout({ type, children }: any) {
  return (
    <>
      <Container
        p="0"
        m="0"
        maxW="none"
        h="100vh"
        overflowX="hidden"
        overflowY="hidden"
      >
        <Navbar />
        <Flex p={0} h="100vh" maxW="100%">
          {type === 'admin' && <AdminSideMenu />}
          {type === 'foster' && <FosterSideMenu />}
          <Flex h="90vh" w="100%">
            {children}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
