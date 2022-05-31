import {
  ModalOverlay,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

import { useDispatch } from "react-redux";
import { CloseModal } from "../../redux/reducer";

interface openModalProps {
  openModal: boolean;
}

export default function BackdropExample({ openModal }: openModalProps) {
  const dispatch = useDispatch();

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="40%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <>
      <Modal
        isCentered
        isOpen={openModal}
        onClose={() => dispatch(CloseModal())}
        size="xl"
      >
        {overlay}
        <ModalContent>
          <ModalHeader
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            fontSize="1rem"
            bgColor="#000"
          >
            Projeto ainda em Desenvolvimento
          </ModalHeader>
          <ModalCloseButton />
          <Button onClick={() => dispatch(CloseModal())} colorScheme="twitter">
            Close
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
}
