import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../../core/services/common/storage.services";
import { InformationCircleIcon } from "hugeicons-react";

const LogoutModal = ({ isOpen, onOpenChange , path }) => {
  const navigate = useNavigate();

  const LogOut = () => {
    navigate(path);
    removeItem("Token");

  };

  return (
    <>
      <Modal
        backdrop="blur"
        size="1xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-6 py-8 font-DanaFaNum-600 ">
                <InformationCircleIcon color="red" size={80} />
                با من گهری؟ واقعا میخوای بری؟؟🥺
              </ModalHeader>
              <ModalBody>
                <p className=" "></p>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-evenly w-full pb-3">
                   <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  خب نمیرم، گریه نکن 😒
                </Button>
                <Button color="primary" onPress={LogOut}  >
                  اره داداش راه نداره!
                </Button> 
                </div>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default LogoutModal;
