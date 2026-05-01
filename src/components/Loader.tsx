"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        return p + 3;
      });
    }, 25);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === "loading") {
      setTimeout(() => setPhase("exiting"), 200);
    }
  }, [progress, phase]);

  useEffect(() => {
    if (phase === "exiting") {
      setTimeout(() => setPhase("done"), 800);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#1a1815",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
        clipPath: phase === "exiting" ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "4px", overflow: "hidden" }}>
          <span
            className="font-serif"
            style={{
              display: "inline-block",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "white",
              letterSpacing: "0.2em",
              fontWeight: 400,
            }}
          >
            GLO
          </span>
          <span style={{ display: "inline-block", width: "0.5em" }} />
          <span
            className="font-serif"
            style={{
              display: "inline-block",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#b8976a",
              letterSpacing: "0.2em",
              fontWeight: 400,
            }}
          >
            INTERIO
          </span>
        </div>
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            color: "rgba(255,255,255,0.25)",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          By Mamta Agarwal
        </div>
        <div style={{ width: "160px", height: "1px", background: "rgba(255,255,255,0.08)", margin: "0 auto" }}>
          <div
            style={{
              height: "100%",
              width: `${Math.min(progress, 100)}%`,
              background: "#b8976a",
              transition: "width 0.08s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
}
