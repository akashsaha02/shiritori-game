// import { useEffect, useState } from "react";

// interface GameTimerProps {
//   duration: number;
//   isActive: boolean;
//   onTimeUp: () => void;
//   playerColor: "player-1" | "player-2";
// }

// export const GameTimer = ({
//   duration,
//   isActive,
//   onTimeUp,
//   playerColor,
// }: GameTimerProps) => {
//   const [timeLeft, setTimeLeft] = useState(duration);

//   useEffect(() => {
//     setTimeLeft(duration);
//   }, [duration, isActive]);

//   useEffect(() => {
//     if (!isActive || timeLeft <= 0) return;

//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           onTimeUp();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [isActive, timeLeft, onTimeUp]);

//   const percentage = (timeLeft / duration) * 100;
//   const circumference = 2 * Math.PI * 45;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   const getTimerColor = () => {
//     if (timeLeft <= 5) return "hsl(var(--destructive))";
//     if (timeLeft <= 10) return "hsl(var(--warning))";
//     return `hsl(var(--${playerColor}))`;
//   };

//   return (
//     <div className="relative w-24 h-24 flex items-center justify-center">
//       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke="hsl(var(--timer-bg))"
//           strokeWidth="8"
//           fill="none"
//         />
//         <circle
//           cx="50"
//           cy="50"
//           r="45"
//           stroke={getTimerColor()}
//           strokeWidth="8"
//           fill="none"
//           strokeLinecap="round"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           className="transition-all duration-1000 ease-linear"
//           style={{
//             filter:
//               timeLeft <= 5 ? "drop-shadow(0 0 8px currentColor)" : "none",
//           }}
//         />
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span
//           className={`text-2xl font-bold transition-colors duration-300 ${
//             timeLeft <= 5
//               ? "animate-pulse text-destructive"
//               : timeLeft <= 10
//               ? "text-warning"
//               : `text-${playerColor === "player-1" ? "primary" : "secondary"}`
//           }`}
//         >
//           {timeLeft}
//         </span>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react"

interface GameTimerProps {
  duration: number
  isActive: boolean
  onTimeUp: () => void
  playerColor: "player-1" | "player-2"
}

export const GameTimer = ({
  duration,
  isActive,
  onTimeUp,
  playerColor,
}: GameTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration)

  // Reset when duration or active state changes
  useEffect(() => {
    setTimeLeft(duration)
  }, [duration, isActive])

  // Countdown logic
  useEffect(() => {
    if (!isActive || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isActive, timeLeft, onTimeUp])

  // SVG circle animation
  const percentage = (timeLeft / duration) * 100
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  // Dynamic color logic
  const getTimerColor = () => {
    if (timeLeft <= 5) return "hsl(var(--destructive))"
    if (timeLeft <= 10) return "hsl(var(--warning))"
    return `hsl(var(--${playerColor}))`
  }

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Outer glowing ring */}
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-40 transition-colors duration-500`}
        style={{ backgroundColor: getTimerColor() }}
      />

      {/* Circular progress */}
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={getTimerColor()}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
          style={{
            filter: timeLeft <= 5 ? "drop-shadow(0 0 10px currentColor)" : "none",
          }}
        />
      </svg>

      {/* Timer number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
            timeLeft <= 5
              ? "animate-bounce text-destructive"
              : timeLeft <= 10
              ? "text-warning"
              : playerColor === "player-1"
              ? "text-primary"
              : "text-secondary"
          }`}
        >
          {timeLeft}
        </span>
        <span className="text-xs uppercase text-muted-foreground">
          {playerColor === "player-1" ? "Player 1" : "Player 2"}
        </span>
      </div>
    </div>
  )
}
