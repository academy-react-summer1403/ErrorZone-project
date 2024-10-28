import {DatePicker} from "@nextui-org/react";

const NextUiDatePicker = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <DatePicker 
          label="تاریخ تولد"
          className="max-w-ful"
          isRequired
        />
    </div>
  );
}

export default NextUiDatePicker