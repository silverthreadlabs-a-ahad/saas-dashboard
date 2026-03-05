"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedNumber({
  value,
  durationMs = 600,
  prefix,
  suffix,
  decimals,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimestampRef = useRef<number | null>(null);
  const fromValueRef = useRef(0);
  const targetValueRef = useRef(value);

  useEffect(() => {
    fromValueRef.current = displayValue;
    targetValueRef.current = value;
    startTimestampRef.current = null;

    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (startTimestampRef.current === null) {
        startTimestampRef.current = timestamp;
      }

      const elapsed = timestamp - startTimestampRef.current;
      const progress = Math.min(elapsed / durationMs, 1);

      const nextValue =
        fromValueRef.current +
        (targetValueRef.current - fromValueRef.current) * progress;

      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [value, durationMs]);

  const safeValue = Number.isFinite(displayValue) ? displayValue : 0;
  const fractionDigits = typeof decimals === "number" ? decimals : 0;
  const numericPortion = safeValue.toLocaleString(undefined, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  const formatted = `${prefix ?? ""}${numericPortion}${suffix ?? ""}`;

  return (
    <span className="tabular-nums leading-none text-text" aria-live="off">
      {formatted}
    </span>
  );
}

