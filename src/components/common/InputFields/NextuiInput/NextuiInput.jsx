import {Input} from "@nextui-org/react";

 const NextUi = ({type , label }) =>  {
  const placements = [
   
    "outside",
    
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
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

export default NextUi
