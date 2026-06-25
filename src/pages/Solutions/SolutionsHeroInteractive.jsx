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

export default function SolutionsHeroInteractive() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Outer nodes representing the 6 primary enterprise solutions
  const outerNodes = [
    {
      id: "dx",
      title: "Digital Trans.",
      left: 85,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      id: "security",
      title: "Cybersecurity",
      left: 67.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      left: 32.5,
      top: 19.7,
      icon: (
        <svg {...iconProps}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      ),
    },
    {
      id: "ai",
      title: "AI & Automation",
      left: 15,
      top: 50,
      icon: (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
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
      id: "erp",
      title: "Enterprise ERP",
      left: 67.5,
      top: 80.3,
      icon: (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
  ];

  // 4 Inner capability nodes
  const innerNodes = [
    {
      id: "bulb-security",
      left: 50,
      top: 32,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "bulb-growth",
      left: 68,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20V14" />
        </svg>
      ),
    },
    {
      id: "bulb-cog",
      left: 50,
      top: 68,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: "bulb-users",
      left: 32,
      top: 50,
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="interactive-hero-container solutions-version">
      {/* Background Dot Grid */}
      <div className="hero-dot-grid"></div>

      {/* SVG Connections & Rings */}
      <svg className="interactive-svg-bg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Main blue-to-pink gradient for paths */}
          <linearGradient id="active-solutions-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec008c" />
          </linearGradient>

          {/* Central server gradient */}
          <linearGradient id="bulb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                stroke="url(#active-solutions-grad)"
              />
            </g>
          );
        })}
      </svg>

      {/* Center Server Core Node */}
      <div className="node-center">
        <div className="node-center-inner">
          <svg viewBox="0 0 24 24" className="cloud-icon" stroke="url(#bulb-grad)" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6M10 22h4" />
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
