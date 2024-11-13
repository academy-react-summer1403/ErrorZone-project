import React, { useState } from "react";
import { Rating } from "@mui/material";
import RateArticle from "../../../core/services/api/ArticlesDetail/RateArticle";
import { useParams } from "react-router";
import { SuccessToastify } from "../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../core/utils/Toastifies/ErrorToastify.Utils";
import http from "../../../core/services/interceptor";
import { useMutation } from "@tanstack/react-query";

const CourseDescribeRate = ({ data }) => {
  const [rate, setRate] = useState(0);

  const params = useParams();

  const courseId = params.id;

  const { mutate: Ratehandler } = useMutation({
    mutationFn: async () =>
      await http.post(
        `/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${rate}`
      ),
    onSuccess: () => SuccessToastify("امتیاز شما با موفقیت ثبت شد"),
    onError: (err) => ErrorToastify(err.response.data.ErrorMessage[0]),
  });

  return (
    <div className="flex justify-between items-center pt-10">
      <div className="flex items-center gap-2">
        <h1 className="text-blue font-DanaFaNum-600 text-base">
          {" "}
          امتیاز بدید{" "}
        </h1>
        <div className="rate flex gap-1" style={{ direction: "ltr" }}>
          <Rating
            name="half-rating"
            precision={1}
            defaultValue={rate}
            onChange={(value) => {
              setRate(value.target.value);
              Ratehandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDescribeRate;
