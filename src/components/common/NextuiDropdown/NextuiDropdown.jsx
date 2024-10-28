import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MoreVerticalCircle02Icon } from "hugeicons-react";

const NextuiDropdown = ({ listDeleteImages, handleDeleteCheckbox, id }) => {
  console.log("id12345", id);
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className=" desktop:block relative top-10 left-4 z-50  text-red bg-transparent ">
          <MoreVerticalCircle02Icon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="delete" className="text-danger " color="danger">
          delete
          <input
            type="checkbox"
            checked={listDeleteImages.includes(id)}
            value={String(id)}
            onChange={handleDeleteCheckbox}
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NextuiDropdown;
