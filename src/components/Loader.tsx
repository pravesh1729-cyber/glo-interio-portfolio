"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 4;
      });
    }, 30);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t1 = setTimeout(() => setExiting(true), 300);
      return () => clearTimeout(t1);
    }
  }, [progress]);

  useEffect(() => {
    if (exiting) {
      const t2 = setTimeout(() => setDone(true), 700);
      return () => clearTimeout(t2);
    }
  }, [exiting]);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#2d2a26",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
        transform: exiting ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <span className="font-serif text-4xl md:text-5xl text-white tracking-wider mb-2">
        MAMTA
        <span style={{ color: "#c9a96e" }}>.</span>
      </span>
      <span
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.7rem",
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        Interior Designer
      </span>

      <div
        style={{
          width: "12rem",
          height: "1px",
          background: "rgba(255,255,255,0.1)",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#c9a96e",
            width: `${progress}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>
      <span
        style={{
          color: "rgba(255,255,255,0.2)",
          fontSize: "0.7rem",
          letterSpacing: "3px",
          marginTop: "1rem",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {Math.min(progress, 100)}%
      </span>
    </div>
  );
}
