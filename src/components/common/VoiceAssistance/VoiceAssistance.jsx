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
      <Tooltip showArrow={true} content="دستیار صوتی">
        <Button
          isIconOnly
          color={isListening ? "success" : ""}
          variant="faded"
          aria-label="Take a photo"
          className="fixed left-5 bottom-5"
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
