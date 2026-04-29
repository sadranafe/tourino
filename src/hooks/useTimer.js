import { useState, useRef, useCallback, useEffect } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const startTimer = useCallback( (sec = 120) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimer(sec);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  return { timer, startTimer };
};