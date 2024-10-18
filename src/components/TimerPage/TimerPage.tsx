import { useEffect, useState } from "react";

export default function TimerPage(): JSX.Element {
  const [timerState, setTimerState] = useState<number>(3);

  //! setTimeout
  useEffect(() => {
    console.log("UseEffect setTimeout");
    if (timerState > 0) {
      const timeoutId = setTimeout(() => {
        setTimerState((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [timerState]);

  //! setInterval
  // useEffect(() => {
  //   console.log("UseEffect setInterval");
  //   const intervalId = setInterval(() => {
  //     setTimerState((prevCount) => prevCount - 1);
  //   }, 1000);

  //   if (timerState === 0) {
  //     clearInterval(intervalId);
  //   }

  //   return () => clearInterval(intervalId);
  // }, [timerState]);

  console.log("RENDER TIMERPAGE");

  return <h1>{timerState > 0 ? timerState : "Time is up!"}</h1>;
}
