// countDownContext.tsx
import { createContext, useEffect, useState } from "react";

interface CountDownContextProps {
  minutes: string;
  seconds: string;
  start(): void;
}

export const CountDownContext = createContext({} as CountDownContextProps);

export function CountDownProvider({ children }: any) {
  const [startTimer, setStartTimer] = useState(0);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function diffInSeconds(startDate: Date): number {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - startDate.getTime();
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    return diffInSeconds;
  }

  useEffect(() => {
    let interval: number;

    if (startTimer != 0) {
      const startDate = new Date();
      interval = setInterval(() => {
        const totalSeconds = startTimer ? startTimer * 60 : 0;
        const diff = diffInSeconds(startDate);
        const currentSeconds = totalSeconds - diff;
        const minutesAmount = Math.floor(currentSeconds / 60);
        const secondsAmount = currentSeconds % 60;

        if (diff > totalSeconds) {
          clearInterval(interval);
        } else {
          setMinutes(String(minutesAmount).padStart(2, "0"));
          setSeconds(String(secondsAmount).padStart(2, "0"));
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTimer]);

  function start() {
    setStartTimer(10);
  }

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        start,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}