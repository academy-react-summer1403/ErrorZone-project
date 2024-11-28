import { Cancel01Icon, CommentAdd01Icon } from "hugeicons-react";
import React, { Fragment } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const AddCourseCommentCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fragment>
      <div
        onClick={onOpen}
        className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-blue dark:bg-white flex flex-col justify-center items-center gap-4 shadow-md cursor-pointer"
      >
        <div className="text-white text-center flex flex-col gap-2">
          <div>
            <CommentAdd01Icon className="mx-auto" size={32} />
          </div>
          <span className="text-lg font-DanaFaNum-600 text-center">
            نظر شما
          </span>
        </div>
        <div className="text-gray-100">برای نظر دادن کلیک کنید</div>
      </div>

      <Modal
        backdrop="blur"
        size="5xl"
        radius="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        closeButton={
          <Button
            variant="bordered"
            size="md"
            color="danger"
            className="px-4 py-2"
          >
            <Cancel01Icon color="red" size={20} />
            <span className="text-red text-lg">بستن</span>
          </Button>
        }
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-DanaFaNum-700 text-2xl">
                نظرات دانشجو ها و اساتید
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AddCourseCommentCard;
