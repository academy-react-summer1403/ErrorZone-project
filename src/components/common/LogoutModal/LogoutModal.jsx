import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { removeItem } from "../../../core/services/common/storage.services";
import { useNavigate } from "react-router-dom";
import { InformationCircleIcon } from "hugeicons-react";
import { logout } from "../../../core/utils/MultiAccount/logout";

const LogoutModal = ({ isOpen, onOpenChange, to }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    const result = logout();
    result === "EMPTY" && navigate("/");
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-60",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                <InformationCircleIcon className="flex" color="red" size={75} />
              </ModalHeader>
              <ModalBody>
                <p className="mb-6 font-DanaFaNum-700 text-xl flex justify-center">
                  با من گهری؟ واقعا میخوای بری؟🥺
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-evenly">
                <Button
                  color="danger"
                  variant="light"
                  size="lg"
                  onPress={onClose}
                  className="font-DanaFaNum-700 "
                >
                  باشه گریه نکن ؛نمیرم😒
                </Button>
                <Button
                  color="primary"
                  size="lg"
                  onPress={onLogout}
                  className="font-DanaFaNum-700"
                >
                  اره داداش ؛ راه نداره واقعا 🫡
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default LogoutModal;
