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
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
        <span className="font-serif" style={{ fontSize: "2.5rem", color: "#fff", letterSpacing: "0.1em" }}>
          GLO
        </span>
        <span className="font-serif" style={{ fontSize: "2.5rem", color: "#c9a96e", letterSpacing: "0.1em" }}>
          INTERIO
        </span>
      </div>
      <span
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.65rem",
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        By Mamta Agarwal
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
            width: `${Math.min(progress, 100)}%`,
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}
