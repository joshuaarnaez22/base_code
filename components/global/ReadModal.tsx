import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

const ReadModal = ({ isOpen, onClose, messageData, setMessageToRead }: any) => {
  useEffect(() => {
    if (messageData) setMessageToRead(messageData.id);
  }, [messageData]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="250px">
        <ModalHeader>Inquery</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Read</Text>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReadModal;
