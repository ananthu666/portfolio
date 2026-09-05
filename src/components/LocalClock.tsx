"use client";

import { useEffect, useState } from "react";

export default function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-signal-ai animate-blink" />
      Kochi, IN — {time} IST
    </span>
  );
}
