import { Button, Tooltip } from "@nextui-org/react";
import { Mic01Icon } from "hugeicons-react";
import React, { useEffect, useRef, useState } from "react";


const useSpeechToText = (options) => {

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState(false);
  const reconitionRef = useRef(null)

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error("web speech api is not support");
      return;
    }
  
    reconitionRef.current = new window.webkitSpeechRecognition();
    const recognition = reconitionRef.current;
    recognition.interimResult = options.interimResult || true;
    recognition.lang = options.lang || "en-US";
    recognition.continuous = options.continuous || false ;

    if ("webkitSpeechGrammarList" in window) {
      const grammar = "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;"
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList
    }

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript
      }
      setTranscript(text)
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error: ", event.error)
    }


    recognition.onend = () => {
      setIsListening(false);
      setTranscript("")
    }


    return () => {
      recognition.stop()
    }
  }, []);

  const startListening = () => {
    if (reconitionRef.current && !isListening) {
      reconitionRef.current.start();
      setIsListening(true);
    }
  }
  
  const stopListening = () => {
    if (reconitionRef.current && isListening) {
      reconitionRef.current.stop();
      setIsListening(false);
    }
  }

  return {
    isListening,
    transcript,
    stopListening,
    startListening,
  }
};

export default useSpeechToText;
