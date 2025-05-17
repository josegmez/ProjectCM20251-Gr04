import { useState, useEffect } from "react";
import type { CountdownProps } from "./types";
import { cn } from "@/utils/cn";

export const Countdown = ({
  seconds,
  className,
  onComplete,
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onComplete?.();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const percentage = (timeLeft / seconds) * 100;

  const radius = 240;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg className="w-full h-full" viewBox="0 0 600 600">
        <circle
          cx="300"
          cy="300"
          r={radius}
          fill="currentColor"
          className="stroke-none text-primary-950"
        />

        {/* Gray track circle */}
        <circle
          className="text-primary-950"
          cx="300"
          cy="300"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeDasharray={circumference}
          strokeDashoffset="0"
        />

        {/* Progress circle */}
        <circle
          cx="300"
          cy="300"
          r={radius - 30}
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-linear transform rotate-90 -scale-x-100 origin-center text-primary-300"
        />

        {/* Text in the middle */}
        <text
          x="300"
          y="340"
          textAnchor="middle"
          className="text-[120px] font-bold fill-white"
        >
          {timeLeft}s
        </text>
      </svg>
    </div>
  );
};
