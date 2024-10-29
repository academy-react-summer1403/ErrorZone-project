import React, { Fragment, useState } from "react";
import HamMenuBtn from "./HamMenuBtn";
import HamMenuContainer from "./HamMenuContainer";
// import { useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { menuItems } from "../menuItems";
import { Link } from "react-router-dom";
import {
  Cancel01Icon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "hugeicons-react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Fragment>
      <HamMenuBtn onPress={onOpen} />
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
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
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex flex-nowrap items-center justify-start">
                  <img src="../../../../public/Logo.svg" alt="logo" />
                  <img src="../../../../public/LogoTypegraphy.svg" alt="logo" />
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="space-y-6 mt-40 mb-28">
                  {menuItems?.map((value, index) => (
                    <div
                      key={index}
                      className="ham-menu-item w-full border-b border-black dark:border-white text-4xl"
                      onClick={onClose}
                    >
                      <Link to={value.path} className="block">
                        <span>{value.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <div className=" w-full border-t border-white pt-4 flex justify-center items-center gap-6">
                  <TwitterIcon className="cursor-pointer" />
                  <YoutubeIcon className="cursor-pointer" />
                  <TelegramIcon className="cursor-pointer" />
                  <InstagramIcon className="cursor-pointer" />
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default HamburgerMenu;
