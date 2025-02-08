"use client";

import useSound from "use-sound";

import { Moon, Sun, Volume2, Volume } from "lucide-react";
import { useTheme } from "next-themes";

import { useState } from "react";

const switchUrl = `https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6X1JMEACXMV4CY8ZSHTC0D.m4a`;

const musicUrl =
  "https://nomadmethod-api-dev-assetsbucket-2u2iqsv5nizc.s3.us-east-1.amazonaws.com/learnuidev@gmail.com/01JH6XXBGT3NXBE50425NY5YNY.mp3";

export const ControlButtons = () => {
  const { setTheme, theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const [playMusic, { pause }] = useSound(musicUrl);
  const [playSwitch] = useSound(switchUrl);

  return (
    <div className="space-x-4 flex items-center justify-center dark:bg-[rgb(11,15,18)] w-auto py-4 z-50">
      <button
        onClick={() => {
          if (isPlaying) {
            pause();
            setIsPlaying(false);
          } else {
            playMusic();
            setIsPlaying(true);
          }
        }}
      >
        {isPlaying ? <Volume2 /> : <Volume />}
      </button>
      <button
        onClick={() => {
          setTheme((prev) => {
            playSwitch();
            if (prev === "light") {
              return "dark";
            }
            return "light";
          });
        }}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};
