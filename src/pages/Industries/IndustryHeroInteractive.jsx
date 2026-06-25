import React, { useState } from "react";

// Common SVG props
const iconProps = {
  viewBox: "0 0 24 24",
  width: "28",
  height: "28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function IndustryHeroInteractive() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Outer nodes representing the 6 key industries
  const outerNodes = [
    {
      id: "retail",
      title: "Retail & E-Commerce",
      left: 85,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: "banking",
      title: "Banking & Finance",
      left: 67.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
        </svg>
      ),
    },
    {
      id: "healthcare",
      title: "Healthcare",
      left: 32.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M6 12h3.5l1.5-3 2 6 1.5-3H18" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "education",
      title: "Education",
      left: 15,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      left: 32.5,
      top: 80.3,
      icon: (
        <svg {...iconProps}>
          <path d="M2 20h20M20 20V8l-6 5V8l-6 5V8L2 13v7" />
        </svg>
      ),
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      left: 67.5,
      top: 80.3,
      icon: (
        <svg {...iconProps}>
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  // 4 Inner decorative nodes representing capabilities
  const innerNodes = [
    {
      id: "security",
      left: 50,
      top: 32,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "growth",
      left: 68,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20V14" />
          <path d="M3 20h18" />
          <path d="m5 15 6-6 4 3 5-8" />
        </svg>
      ),
    },
    {
      id: "automation",
      left: 50,
      top: 68,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: "users",
      left: 32,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <div className="interactive-hero-container">
      {/* Background Dot Grid */}
      <div className="hero-dot-grid"></div>

      {/* SVG Connections & Rings */}
      <svg className="interactive-svg-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Main pink-to-blue gradient for paths */}
          <linearGradient id="active-path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec008c" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* Central cloud gradient */}
          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec008c" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>

        {/* Concentric Decorative Rings */}
        <circle cx="50" cy="50" r="10" className="svg-ring ring-1" />
        <circle cx="50" cy="50" r="18" className="svg-ring ring-2 dashed" />
        <circle cx="50" cy="50" r="28" className="svg-ring ring-3 dotted" />
        <circle cx="50" cy="50" r="35" className="svg-ring ring-4 dashed" />

        {/* Radial Connection Lines */}
        {outerNodes.map((node) => {
          const isActive = hoveredNode === node.id;
          return (
            <g key={node.id}>
              {/* Underlay base line */}
              <line
                x1="50"
                y1="50"
                x2={node.left}
                y2={node.top}
                className="radial-line-base"
              />
              {/* Animated overlay active line */}
              <line
                x1="50"
                y1="50"
                x2={node.left}
                y2={node.top}
                className={`radial-line-active ${isActive ? "active" : ""}`}
                stroke="url(#active-path-grad)"
              />
            </g>
          );
        })}
      </svg>

      {/* Center Cloud Node */}
      <div className="node-center">
        <div className="node-center-inner">
          <svg viewBox="0 0 24 24" className="cloud-icon" stroke="url(#cloud-grad)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        </div>
      </div>

      {/* 4 Inner Decorative Nodes */}
      {innerNodes.map((node) => (
        <div
          key={node.id}
          className="node-inner"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
          }}
        >
          <div className="node-inner-icon-wrapper">
            {node.icon}
          </div>
        </div>
      ))}

      {/* 6 Outer Industry Nodes */}
      {outerNodes.map((node) => {
        const isHovered = hoveredNode === node.id;
        const isSomeHovered = hoveredNode !== null;
        const fadeClass = isSomeHovered && !isHovered ? "node-fade" : "";

        return (
          <div
            key={node.id}
            className={`node-outer-wrapper ${fadeClass} ${isHovered ? "node-hovered" : ""}`}
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="node-outer-circle">
              <div className="node-outer-icon-wrap">
                {node.icon}
              </div>
            </div>
            <div className="node-outer-label">
              {node.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
