import React from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { usequery} from '../../../core/services/api/reactQuery/useQuery';


const AutoCompleteSpecial = ({queryKey, label, titleApi}) => {
    const data = usequery(queryKey);

  return (
    <div style={{direction:"rtl"}}>
    <Autocomplete 
      // allowsCustomValue
      size='sm'
      label={label + " " + "مورد نظر رو انتخاب کنید"} 
      variant="bordered"
      className="max-w-xs text-black bg-gray-200" 
      defaultItems={data.length > 0 ? data : [] }
    >
      {(items) => <AutocompleteItem key={items.id ? items.id : items.teacherId} textValue={items ? items[titleApi] : false}>{items ? items[titleApi] : false} </AutocompleteItem>}
    </Autocomplete>
    </div>
  )
}

export default AutoCompleteSpecial