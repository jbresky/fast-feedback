import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  FormControl,
  FormLabel,
  useDisclosure
} from '@chakra-ui/react'

function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();

  const { handleSubmit, register } = useForm();
  // const onSubmit = values => console.log(values);

  return (
    <>
      <Button mt={1} variant="solid" size="md" onClick={onOpen}>
        Add your First Site
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as='form' onSubmit={handleSubmit(createSite)}>
          <ModalHeader fontWeight='bold'>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder='My site'
                name='site'
                // ref={register({
                //   required: 'Required'
                // })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder='https://website.com'
                name='url'
                // ref={register({
                //   required: 'Required'
                // })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>Cancel</Button>
            <Button
              backgroundColor='#99FFFE'
              color='#194d4c'
              fontWeight='medium'
              type='submit'
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddSiteModal