import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  Text,
  Box
} from "@chakra-ui/react"


export const Index = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <div className="h-24 flex flex-wrap justify-center ...">
        <button onClick={() => { onOpen(); new Audio('audio.mp3').play(); }} className="inline-block px-7 py-3 rounded-md text-white dark:text-white bg-blue-600 hover:bg-blue-700 hover:text-white dark:hover:text-white"
        > Dá uma Apertadinha no pai kaka</button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Feliz dia do bolo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box boxSize="sm">
              <Image src="https://preview.redd.it/1z9j5h7bv6u41.jpg?auto=webp&s=01664de6912b53dac51a1ef89b68a76985eae01a" alt="SACI" />
            </Box>
            <Text fontSize="3xl">Parabéns Júlio (Me dá meu Aerofólio do Pálio) 😳🥵🎉</Text>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
};



export default Index;
