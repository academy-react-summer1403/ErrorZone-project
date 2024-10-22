import React from 'react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import { usequery} from '../../../core/services/api/reactQuery/useQuery';
import { useDispatch } from 'react-redux';
import { coursSortFilDataSlice } from '../../../redux/coursSortFilDataSlice';


const AutoCompleteSpecial = ({queryKey, label, titleApi, submit}) => {
  const dispatch = useDispatch();
    const data = usequery(queryKey);

  return (
    <div style={{direction:"rtl"}}>
    <Autocomplete 
      // allowsCustomValue
      size='sm'
      label={label + " " + "مورد نظر رو انتخاب کنید"} 
      variant="bordered"
      className="max-w-xs text-black bg-gray-200" 
      defaultItems={data ? data : [] }
      onSelectionChange={submit}
    >
      {(items) => <AutocompleteItem key={items.id ? items.id : items.teacherId} textValue={items ? items[titleApi] : false}>{items ? items[titleApi] : false} </AutocompleteItem>}
    </Autocomplete>
    </div>
  )
}

export default AutoCompleteSpecial