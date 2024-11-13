import React, { Fragment } from "react";
import CourseSortPart from "./CourseSortPart/CourseSortPart";
import CourseCardSec from "./CourseCardSec/CourseCardSec";
import ButtonSpecial from "../../../common/ButtonSpecial";
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
import FilterSec from "../courseFilter/filterSec";
import SortMobile from "./CourseSortPart/SortMobile";

const CourseNames = ({ pageNum }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="w-fit hidden desktop:block">
          <CourseSortPart pageNum={pageNum} />
        </div>
        <SortMobile  pageNum={pageNum}/>
        <Fragment>
          <ButtonSpecial 
            innerHtml={
              <>
                <FilterIcon />
                <span >فیلتر</span>
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
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                  <ModalBody>
                    <FilterSec />
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

          {/*  */}
        </Fragment>
      </div>

      <CourseCardSec pageNum={pageNum} />
    </div>
  );
};

export default CourseNames;
