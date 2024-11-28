import React, { Fragment } from 'react'
import { FilterIcon, Sorting01Icon } from "hugeicons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ButtonSpecial from '../../../../common/ButtonSpecial';
import CourseSortPart from './CourseSortPart';

const SortMobile = ({pageNum}) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fragment>
    <ButtonSpecial
      innerHtml={
        <>
          <Sorting01Icon />
          <span>ترتیب</span>
        </>
      }
      onPress={onOpen}
      className="py-3 px-4 bg-black text-white dark:bg-white dark:text-black flex flex-nowrap gap-2 desktop:hidden"
    />
    {/*  */}

    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      backdrop="blur"
      className='p-2 block'
      placement='center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>

            <CourseSortPart pageNum={pageNum} />

            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>

    {/*  */}
  </Fragment>
  )
}

export default SortMobile