import React, { Fragment } from "react";
import { postQuery } from "../../../../../core/services/api/reactQuery/postQuery";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { BookDownloadIcon } from "hugeicons-react";

export const ReservCourseModal = ({ courseId, courseTitle }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Fragment>
      <div onClick={onOpen}>
        <Tooltip content="رزرو">
          <span className="text-lg text-gray-800 cursor-pointer active:opacity-50">
            <BookDownloadIcon />
          </span>
        </Tooltip>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">
                {`آیا دوره ی "${courseTitle}" رزرو شود؟`}
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  لغو رزرو
                </Button>
                <Button
                  onClick={postQuery(
                    "myReservesCourses",
                    "/CourseReserve/ReserveAdd",
                    {
                      "courseId": courseId
                    }
                  )}
                  color="primary"
                  onPress={onClose}
                >
                  رزرو کردن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};
