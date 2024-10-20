import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSpecial from "../ButtonSpecial";

const ViewMoreBtn = ({ link }) => {
  const navigate = useNavigate();
  return (
    <ButtonSpecial
      className="w-fit block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-center rounded-full"
      onClick={() => navigate(link)}
      innerHtml="مشاهده بیشتر"
    />
  );
};

export default ViewMoreBtn;
