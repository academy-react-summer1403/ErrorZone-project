import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { ArrowLeft01Icon, Cancel01Icon } from "hugeicons-react";
import CommentsReplyCard from "../CommentsReplyCard";
import { data } from "autoprefixer";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../core/services/api/reactQuery/useQuery";

function CommentModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [OpenedTap, setOpenedTap] = useState("course");
  getQuery("myNewsComment" , "/SharePanel/GetMyNewsComments");
  const data = usequery("myNewsComment");
  return (
    <>
      <span
        className="flex flex-nowrap gap-1 w-fit underline text-blue font-DanaFaNum-600 text-sm cursor-pointer dark:text-gray-900"
        onClick={onOpen}
      >
        مشاهده بیشتر
        <ArrowLeft01Icon />
      </span>

      <Modal size="4xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex">
                <ModalHeader className=" flex justify-between w-full flex-wrap ">
                  <p className=" px-0  leading-[40px]"> نظرات شما</p>
                  <Tabs
                    size="lg"
                    className=""
                    onSelectionChange={setOpenedTap}
                    color="primary"
                    radius="full"
                  >
                    <Tab key="course" title="دوره ها" />
                    <Tab key="blog" title="بلاگ ها" />
                  </Tabs>
                  <Button
                    color="danger"
                    variant="light"
                    className="w-fit "
                    onPress={onClose}
                  >
                    بستن
                    <Cancel01Icon className="size-4" />
                  </Button>
                </ModalHeader>
              </div>
              <ModalBody>{OpenedTap == "course" ? "blog" : <CommentsReplyCard data={data ? data : []} />}</ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
  
}
export default CommentModal;
