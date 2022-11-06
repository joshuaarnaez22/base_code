import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import AddVisit from './AddVisit';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <AddVisit {...{ isOpen, onClose }} />
      <Button bg="transparent" leftIcon={<FaClock />} onClick={onOpen}>
        Setup a visit
      </Button>
    </Flex>
  );
};

export default Index;
