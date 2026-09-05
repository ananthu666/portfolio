"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { accentColor } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  stage: 1 | 2 | 3 | 4;
  accent: keyof typeof accentColor;
  reveals?: string[];
};

const NODES: Node[] = [
  { id: "core", label: "AI ENGINE", x: 400, y: 280, stage: 1, accent: "ai", reveals: ["LLM", "AGENTS", "RAG", "REASONING"] },
  { id: "llm", label: "LLM", x: 400, y: 140, stage: 1, accent: "ai" },
  { id: "agents", label: "AGENTS", x: 260, y: 190, stage: 1, accent: "ai" },
  { id: "odoo", label: "ODOO", x: 540, y: 190, stage: 2, accent: "erp", reveals: ["ERP", "CRM", "SALES", "INVENTORY"] },
  { id: "crm", label: "CRM", x: 640, y: 260, stage: 2, accent: "erp" },
  { id: "sales", label: "SALES", x: 640, y: 340, stage: 2, accent: "erp" },
  { id: "automation", label: "AUTOMATION", x: 400, y: 430, stage: 3, accent: "automation", reveals: ["TRIGGERS", "WORKFLOWS", "JOBS"] },
  { id: "apis", label: "APIs", x: 260, y: 380, stage: 3, accent: "automation" },
  { id: "workflows", label: "WORKFLOWS", x: 540, y: 400, stage: 3, accent: "automation" },
  { id: "database", label: "DATABASE", x: 220, y: 300, stage: 3, accent: "automation" },
];

const EDGES: [string, string][] = [
  ["core", "llm"],
  ["core", "agents"],
  ["core", "odoo"],
  ["odoo", "crm"],
  ["odoo", "sales"],
  ["core", "automation"],
  ["automation", "apis"],
  ["automation", "workflows"],
  ["core", "database"],
];

const STAGE_LABELS: Record<number, string> = {
  1: "AI",
  2: "AI + ODOO",
  3: "AI + ODOO + AUTOMATION",
  4: "INTELLIGENT ENTERPRISE SYSTEM",
};

export default function ArchitectureDiagram({
  bindScroll = true,
}: {
  bindScroll?: boolean;
}) {
  const [stage, setStage] = useState(1);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bindScroll) return;
    const el = containerRef.current?.closest("section");
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
      if (progress < 0.15) setStage(1);
      else if (progress < 0.45) setStage(2);
      else if (progress < 0.75) setStage(3);
      else setStage(4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [bindScroll]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const visibleNodes = NODES.filter((n) => n.stage <= stage);
  const visibleIds = new Set(visibleNodes.map((n) => n.id));
  const visibleEdges = EDGES.filter(([a, b]) => visibleIds.has(a) && visibleIds.has(b));

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative w-full select-none"
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400">
          system architecture
        </span>
        <motion.span
          key={STAGE_LABELS[stage]}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-[11px] uppercase tracking-wider text-signal-ai"
        >
          {STAGE_LABELS[stage]}
        </motion.span>
      </div>

      <motion.svg
        viewBox="0 0 800 560"
        className="h-auto w-full"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <defs>
          <radialGradient id="coreglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentColor.ai} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accentColor.ai} stopOpacity="0" />
          </radialGradient>
        </defs>

        {visibleEdges.map(([a, b]) => {
          const from = NODES.find((n) => n.id === a)!;
          const to = NODES.find((n) => n.id === b)!;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#3A4552"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          );
        })}

        {visibleNodes.map((node) => {
          const isCore = node.id === "core";
          const isHovered = hovered === node.id;
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {isCore && <circle cx={node.x} cy={node.y} r={90} fill="url(#coreglow)" />}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isCore ? 34 : 24}
                fill={isHovered ? accentColor[node.accent] : "#10151C"}
                stroke={accentColor[node.accent]}
                strokeWidth={isCore ? 1.5 : 1}
                animate={{ r: isHovered ? (isCore ? 40 : 30) : isCore ? 34 : 24 }}
                transition={{ duration: 0.2 }}
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-mono"
                style={{
                  fontSize: isCore ? 11 : 9,
                  fill: isHovered ? "#07090C" : "#D9DCE2",
                  letterSpacing: "0.03em",
                  pointerEvents: "none",
                }}
              >
                {node.label}
              </text>

              {isHovered && node.reveals && (
                <foreignObject x={node.x - 70} y={node.y + 30} width={140} height={70}>
                  <div className="flex flex-wrap justify-center gap-1">
                    {node.reveals.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-ink-600 bg-ink-900/90 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wide text-ink-300"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </foreignObject>
              )}
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
}
