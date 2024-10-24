import { ArrowLeft01Icon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";

const ShowMore = ({link}) => {
  return (
    <Link to={link} className="flex flex-nowrap gap-1 w-fit text-blue font-DanaFaNum-600 text-sm">
      <span className="underline">مشاهده بیشتر</span>
      <ArrowLeft01Icon />
    </Link>
  );
};

export default ShowMore;
