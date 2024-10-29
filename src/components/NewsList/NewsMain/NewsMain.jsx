import React, { Fragment } from "react";
import NewsNote from "../NewsNote/NewsNote";
import NewsFilter from "./NewsFilter/NewsFilter";
import NewsSort from "./NewsSort/NewsSort";
import NewsCardName from "./NewsCardName/NewsCardName";
import PaginationNews from "./PaginationNews/PaginationNews";
import SortMobile from "../../courseList/courseMain/CourseNames/CourseSortPart/SortMobile";
import NewsSortMobile from "./NewsSort/NewsSortMobile";
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
import ButtonSpecial from "../../common/ButtonSpecial";

const NewsMain = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div>
        <NewsNote />
      </div>
      <div className="grid grid-cols-12 gap-8 pt-16 ">
        <div className="desktop:flex border-2 border-gray-400 rounded-[32px] tablet:col-span-3 hidden  pt-4 pb-6 px-5 h-fit">
          <NewsFilter />
        </div>

        <div className="flex flex-col rounded-2xl gap-6 desktop:col-span-9 col-span-12  ">
          <NewsSort />
          {/* <SortMobile /> */}
          <div className="flex justify-between items-center">
            <NewsSortMobile />

            {/*  */}
            <Fragment>
              <ButtonSpecial
                innerHtml={
                  <>
                    <FilterIcon />
                    <span>فیلتر</span>
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
                        {/* <FilterSec /> */}
          <NewsFilter />

                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>

              {/*  */}
            </Fragment>
            {/*  */}
          </div>

          <NewsCardName />
          <PaginationNews />
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
