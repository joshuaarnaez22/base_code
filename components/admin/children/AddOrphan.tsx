import { thinnerScollbar } from '@/components/Scrollbar';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import Child from './Child';
import Family from './Family';
import OrphanInfo from './OrphanInfo';

function AddOrphan({ isOpen, onClose }: any) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent h="90vh" overflowY="auto" maxW="80%" sx={thinnerScollbar}>
          <ModalHeader>Add Orphan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs size="md" variant="enclosed">
              <TabList>
                <Tab>Orphan Info</Tab>
                <Tab>The Child</Tab>
                <Tab>The Family</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <OrphanInfo />
                </TabPanel>
                <TabPanel>
                  <Child />
                </TabPanel>
                <TabPanel>
                  <Family />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddOrphan;
