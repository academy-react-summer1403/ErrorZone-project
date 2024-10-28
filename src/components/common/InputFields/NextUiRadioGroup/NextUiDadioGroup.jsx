import React from 'react'

import {RadioGroup, Radio} from "@nextui-org/react";

const NextUiDadioGroup = () => {
  return (
    <RadioGroup
      label="جنسیت خود را انتخاب کنید"
      orientation="horizontal"
    >
      <Radio value="buenos-aires">مرد</Radio>
      <Radio value="sydney">زن</Radio>
    </RadioGroup>
  );
}

export default NextUiDadioGroup