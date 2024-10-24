import {Input} from "@nextui-org/react";

const NextuiInput = ({type , label }) => {
  const placements = [
  
    "outside",
 
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-[398px] h-[48px]">
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
          {placements.map((placement) => (
            <Input
              key={placement}
              type={type}
              label={label}
              labelPlacement={placement}

            />
          ))}
        </div>
      </div>  
    </div>  
  );
}

export default NextuiInput
