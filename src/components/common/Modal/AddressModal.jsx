import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

const AddressModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">    مشخصات  </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">  ادرس و ایمیل خود را وارد کنید </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                //   label="Email"
                  placeholder="ایمیل خود را وارد کنید"
                  variant="bordered"
                />
                <Input  
                //   label="HomeAdderess"
                  placeholder="ادرس محل سکونت خود را وارد کنید"
                  type="text"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddressModal