"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: diff <= 0,
  };
}

export function CountdownTimer({ target }: { target: string }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (time.expired) {
    return (
      <span className="text-xs uppercase tracking-[0.2em] text-gold" suppressHydrationWarning>
        Happening now
      </span>
    );
  }

  const units: { label: string; value: number }[] = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-3" suppressHydrationWarning>
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-display text-xl md:text-2xl text-gold tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-ivory/50">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
