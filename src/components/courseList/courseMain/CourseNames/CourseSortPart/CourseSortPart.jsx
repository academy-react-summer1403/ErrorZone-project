import React, { useState } from "react";
import {RadioGroup, Radio} from "@nextui-org/react";
import SortBtn from "./SortBtn/SortBtn";

const CourseSortPart = () => {

  const [selected, setSelected] = useState("");

  return (
    <div className=" flex flex-nowrap gap-4 items-center text-lg">  
      <p> ترتیب</p>
    <RadioGroup
    value={selected}
    onValueChange={setSelected}
      orientation="horizontal"
    >
          <SortBtn value="costUp">
          گران ترین
         </SortBtn>
          <SortBtn value="costDown">
          محبوب ترین
          </SortBtn> 
          <SortBtn value="cost">
          ارزان ترین
          </SortBtn>  
           <SortBtn>
          جدید ترین
           </SortBtn> 

    </RadioGroup>

    </div>
  );
};

export default CourseSortPart;
