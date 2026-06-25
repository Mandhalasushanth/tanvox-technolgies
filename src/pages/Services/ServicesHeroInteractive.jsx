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

export default function ServicesHeroInteractive() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Outer nodes representing the 6 primary core service categories
  const outerNodes = [
    {
      id: "security",
      title: "Cybersecurity",
      left: 85,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "ai",
      title: "AI & Automation",
      left: 67.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      ),
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      left: 32.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      id: "software",
      title: "Software Dev",
      left: 15,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "Data Analytics",
      left: 32.5,
      top: 80.3,
      icon: (
        <svg {...iconProps}>
          <path d="M18 20V10M12 20V4M6 20V14" />
          <path d="M3 20h18" />
          <path d="m5 15 6-6 4 3 5-8" />
        </svg>
      ),
    },
    {
      id: "bpo",
      title: "Business BPO",
      left: 67.5,
      top: 80.3,
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  // 4 Inner capability nodes
  const innerNodes = [
    {
      id: "database",
      left: 50,
      top: 32,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
    },
    {
      id: "network",
      left: 68,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      ),
    },
    {
      id: "terminal",
      left: 50,
      top: 68,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      ),
    },
    {
      id: "collaboration",
      left: 32,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="interactive-hero-container services-version">
      {/* Background Dot Grid */}
      <div className="hero-dot-grid"></div>

      {/* SVG Connections & Rings */}
      <svg className="interactive-svg-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Main blue-to-pink gradient for paths */}
          <linearGradient id="active-services-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec008c" />
          </linearGradient>

          {/* Central server gradient */}
          <linearGradient id="server-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#ec008c" />
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
                stroke="url(#active-services-grad)"
              />
            </g>
          );
        })}
      </svg>

      {/* Center Server Core Node */}
      <div className="node-center">
        <div className="node-center-inner">
          <svg viewBox="0 0 24 24" className="cloud-icon" stroke="url(#server-grad)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="5" rx="1" />
            <rect x="2" y="11" width="20" height="5" rx="1" />
            <rect x="2" y="19" width="20" height="5" rx="1" />
            <circle cx="6" cy="5.5" r="1" />
            <circle cx="6" cy="13.5" r="1" />
            <circle cx="6" cy="21.5" r="1" />
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

      {/* 6 Outer Service Nodes */}
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
