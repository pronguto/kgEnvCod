import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { NavMenuBox } from "./NavMenuBox";

export const ModalLink = ({ onClose, isOpen, actualPage }) => {
  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent position="absolute" right="0" width="200px">
        <ModalHeader>
          Páginas
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <VStack>
            <NavMenuBox />
          </VStack>
        </ModalBody>
        {/* <ModalFooter justifyContent="flex-start" p="24px 16px">
          <HStack>
            <Center
              fontSize="50px"
              h="60px"
              w="50px"
              borderRadius="8px"
              bgColor="#e4605e"
              color="white"
              cursor="pointer"
            >
            </Center>
            <Text>Sair agora</Text>
          </HStack>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
