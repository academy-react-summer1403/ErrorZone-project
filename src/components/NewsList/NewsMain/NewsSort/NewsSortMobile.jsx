import React, { Fragment, useEffect, useState } from 'react'
import { FilterIcon, FilterRemoveIcon, Sorting01Icon } from "hugeicons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ButtonSpecial from '../../../common/ButtonSpecial';
import NewsSort from './NewsSort';
import { useDispatch } from 'react-redux';
import RadiosGroup from '../../../courseList/courseMain/CourseNames/CourseSortPart/SortBtn/RadiosGroup';
import { giveSortKey, giveSortType } from '../../../../redux/newsSortFilDataSlice';

const NewsSortMobile = ({pageNum}) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState({
      id: 0,
      label: "فعال ها",
      value: { key: "Active", order: "DESC" },
    });
  
    useEffect(() => {
      dispatch(giveSortKey(selectedOption.value.key));
      dispatch(giveSortType(selectedOption.value.order));
    }, [selectedOption]);
  
    const options = [
      {
        id: 1,
        label: "محبوب ترین",
        value: { key: "currentRate", order: "DESC" },
      },
      { id: 2, label: "جدید ترین", value: { key: "InsertDate", order: "DESC" } },
    ];


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
      className="py-3 px-4 w-fit bg-black text-white dark:bg-white dark:text-black flex flex-nowrap gap-2 desktop:hidden"
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

            {/* <CourseSortPart pageNum={pageNum} /> */}

            <Fragment>
          <div className="flex flex-nowrap gap-4 items-center text-lg ">
      <p> ترتیب</p>
      <div className="flex flex-nowrap gap-4 items-center">
        <RadiosGroup
          options={options}
          name="myRadioGroup"
          selectedValue={selectedOption}
          onChange={setSelectedOption} // set the selected object
        />
      </div>
      <div className=" box2 w-px h-1/2 bg-gray-400"></div>
      <>
        <input
          type="radio"
          name="myRadioGroup"
          id="deletSort"
          value={{
            id: 0,
            label: "فعال ها",
            value: { key: "Active", order: "DESC" },
          }}
          onChange={() =>
            setSelectedOption({
              id: 0,
              label: "فعال ها",
              value: { key: "Active", order: "DESC" },
            })
          }
          className="hidden"
        />
        <label
          className="box2 cursor-pointer px-4 py-2 rounded-3xl bg-red border-0 text-white ring-1 text-lg flex items-center justify-between gap-1"
          key={0}
          htmlFor="deletSort"
        >
          {/* <Cancel01Icon /> */}
          <FilterRemoveIcon />
          حذف
        </label>
      </>
    </div>

    </Fragment>

            

            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>

    {/*  */}
  </Fragment>
  )
}

export default NewsSortMobile