import { useState, useEffect } from "react";
import { PostSpeechButton } from "../styled";
import { Play, Pause, Stop } from "@phosphor-icons/react";

const Text2Speech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(true);
  const [utterance, setUtterance] = useState(null);

  console.error = () => {};
  useEffect(() => {
    const synth = window.speechSynthesis;

    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-br";

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlayPause = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
      synth.speak(utterance);
      setIsPaused(false);
    } else {
      synth.pause();
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();

    setIsPaused(true);
  };

  return (
    <PostSpeechButton>
      <button onClick={handlePlayPause} title={isPaused ? "Retomar" : "Tocar"}>
        {isPaused ? <Play /> : <Pause />}
      </button>
      <button onClick={handleStop} title="Parar">
        <Stop />
      </button>
    </PostSpeechButton>
  );
};

export default Text2Speech;
