import { Button, Tooltip } from "@nextui-org/react";
import { Mic01Icon } from "hugeicons-react";
import React, { useEffect, useState } from "react";
import useSpeechToText from "../../../core/utils/useSpeechToText/useSpeechToText";
import { useNavigate } from "react-router-dom";

const VoiceAssistance = () => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");
  const { isListening, startListening, stopListening, transcript } =
    useSpeechToText({ continuous: true });

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  useEffect(() => {
    if (transcript == "go home" || transcript == "home") {
      navigate("/");
      stopVoiceInput();
    } else if (transcript == "go course" || transcript == "course") {
      navigate("/courses");
      stopVoiceInput();
    } else if (transcript == "go news" || transcript == "news") {
      navigate("/articles");
      stopVoiceInput();
    } else if (transcript == "go dashboard" || transcript == "dashboard") {
      navigate("/StudentPanel");
      stopVoiceInput();
    } else {
      stopVoiceInput();
    }
    return () => {};
  }, [transcript]);

  const stopVoiceInput = () => {
    setTextInput(
      (prevVal) =>
        prevVal +
        (transcript.length ? (prevVal.length ? " " : "") + transcript : "")
    );
    stopListening();
  };

  return (
    <>
      <Tooltip showArrow={true}   content={
        <div className="mx-3 py-3 rounded-lg ">
          <div className=""> 
          <div className="text-lg font-bold mb-4 mr-2 text-blue "> (  راهنمای دستیار صوتی )   </div>
          <div className="text-tiny flex justify-between gap-3 mb-2 ">
            <p> 1- go Home یا Home</p>
            <p> رفتن به صفحه ی اصلی </p>
          </div>
          <div className="text-tiny flex  justify-between gap-3 mb-2">
            <p>2- go course یا course</p>
            <p> رفتن به صفحه ی دوره ها </p>
          </div>
          <div className="text-tiny flex justify-between gap-3 mb-2 ">
            <p>3- go news یا news </p>
            <p> رفتن به صفحه ی اخبار </p>
          </div>
          <div className="text-tiny flex justify-between gap-3 mb-1 ">
            <p>4- go dashboard یا dashboard</p>
            <p> رفتن به پنل کاربر </p>
          </div>
</div>

        </div>
      } placement="right-start">
        <Button
          isIconOnly
          color={isListening ? "success" : ""}
          variant="faded"
          aria-label="Take a photo"
          className="fixed left-5 bottom-5 my-last-step"
          radius="full"
          size="md"
          onPress={() => {
            startStopListening();
          }}
        >
          <Mic01Icon />
          {/* transcript : { } */}
        </Button>
      </Tooltip>
    </>
  );
};

export default VoiceAssistance;
