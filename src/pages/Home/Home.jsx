import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const techNodes = [
  {
    id: 'software',
    label: 'Software Development',
    x: 32,
    y: 20,
    offsetX: -75,
    offsetY: 0,
    color: '#FF1E3C', // Pink/Red
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    label: 'Cloud Services',
    x: 68,
    y: 20,
    offsetX: 70,
    offsetY: 0,
    color: '#FF1E3C', // Pink/Red
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'devops',
    label: 'DevOps Automation',
    x: 22,
    y: 50,
    offsetX: -75,
    offsetY: 0,
    color: '#FF1E3C', // Pink/Red
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
      </svg>
    ),
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    x: 78,
    y: 50,
    offsetX: 70,
    offsetY: 0,
    color: '#8B5CF6', // Purple
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"/>
      </svg>
    ),
  },
  {
    id: 'infrastructure',
    label: 'IT Infrastructure & Support',
    x: 32,
    y: 80,
    offsetX: -75,
    offsetY: 0,
    color: '#3B82F6', // Blue
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    id: 'security',
    label: 'Cybersecurity',
    x: 68,
    y: 80,
    offsetX: 70,
    offsetY: 0,
    color: '#8B5CF6', // Purple
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Gyroscopic 3D Rotations with distinct velocities
      gsap.to('.gyro-ring-x', {
        rotateX: 360,
        rotateY: 180,
        duration: 12,
        repeat: -1,
        ease: 'none',
      });
      gsap.to('.gyro-ring-y', {
        rotateY: 360,
        rotateX: 180,
        duration: 16,
        repeat: -1,
        ease: 'none',
      });
      gsap.to('.gyro-ring-z', {
        rotateZ: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });

      // 2. Nucleus slow hover elevation
      gsap.to('.gyro-nucleus', {
        y: -12,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 3. Heartbeat pulsing on the glowing core (Salesforce-like cloud)
      gsap.to('.gyro-salesforce-cloud', {
        scale: 1.25,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 4. Floating orbit nodes connections (Staggered path offset)
      gsap.to('.connection-path', {
        strokeDashoffset: -120,
        duration: 4.5,
        repeat: -1,
        ease: 'none',
      });

      // 5. Individual Technology node float oscillations (Random organic feeling)
      gsap.utils.toArray('.tech-node-container').forEach((node, index) => {
        gsap.to(node, {
          y: '+=14',
          x: '+=6',
          duration: 3 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.12,
        });
      });

      // 6. Pedestal rings rotation speeds
      gsap.to('.pedestal-ring-outer', {
        rotate: 360,
        duration: 22,
        repeat: -1,
        ease: 'none',
      });
      gsap.to('.pedestal-ring-middle', {
        rotate: -360,
        duration: 16,
        repeat: -1,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-globe-wrapper" ref={containerRef}>
      {/* Curved glowing neon projector platform underneath the globe */}
      <div className="hologram-pedestal">
        <div className="pedestal-ring-outer"></div>
        <div className="pedestal-ring-middle"></div>
        <div className="pedestal-ring-inner"></div>
        <div className="pedestal-glow"></div>
      </div>

      {/* Outer Connection mesh network overlay */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 2,
        }}
        viewBox="0 0 500 500"
      >
        <defs>
          <linearGradient id="line-grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1E3C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B2E8A" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="line-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B2E8A" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Pulsing mesh orbits and nodes connections */}
        {techNodes.map((node) => {
          // Center of the canvas is (250, 250), corresponding to center of absolute positioning
          const targetX = (node.x / 100) * 500;
          const targetY = (node.y / 100) * 500;

          return (
            <path
              key={node.id}
              className="connection-path"
              d={`M250,230 Q${(250 + targetX) / 2},${(230 + targetY) / 2 - 20} ${targetX},${targetY}`}
              fill="none"
              stroke={node.color === '#FF1E3C' || node.color === '#8B5CF6' ? 'url(#line-grad-red)' : 'url(#line-grad-blue)'}
              strokeWidth="1.5"
              strokeDasharray="6 6"
              style={{ strokeDashoffset: 120 }}
            />
          );
        })}
      </svg>

      {/* Orbit Rings backdrops */}
      <div className="globe-orbit-outer"></div>
      <div className="globe-orbit-inner"></div>

      {/* 3D Holographic Gyroscopic Core */}
      <div className="gyro-core-container">
        <div className="gyro-ring gyro-ring-x"></div>
        <div className="gyro-ring gyro-ring-y"></div>
        <div className="gyro-ring gyro-ring-z"></div>
        <div className="gyro-nucleus">
          <svg
            viewBox="0 0 24 24"
            className="gyro-salesforce-cloud"
            style={{
              width: '55%',
              height: '55%',
              fill: '#00A1E0',
              filter: 'drop-shadow(0 0 10px rgba(0, 161, 224, 0.85))',
            }}
          >
            <path d="M19.2,9.6 C19.2,6.5 16.7,4 13.6,4 C11.3,4 9.3,5.4 8.5,7.4 C8.2,7.1 7.8,7 7.4,7 C6.1,7 5,8.1 5,9.4 C5,9.7 5.1,10 5.2,10.2 C3.9,10.7 3,12 3,13.4 C3,15.4 4.6,17 6.6,17 H18.6 C20.5,17 22,15.5 22,13.6 C22,11.8 20.6,10.2 19.2,9.6 Z" />
          </svg>
        </div>
      </div>

      {/* Orbiting Technology Nodes */}
      {techNodes.map((node) => {
        return (
          <div
            key={node.id}
            className="tech-node-container"
            style={{
              position: 'absolute',
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              zIndex: 10,
            }}
          >
            {/* The Node Icon Circle Container */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(2, 11, 45, 0.9)',
                border: `1.5px solid ${node.color}`,
                boxShadow: `0 0 15px 1px ${node.color}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: node.color,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = node.color;
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = `0 0 25px 4px ${node.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(2, 11, 45, 0.9)';
                e.currentTarget.style.color = node.color;
                e.currentTarget.style.boxShadow = `0 0 15px 1px ${node.color}33`;
              }}
            >
              {node.icon}
            </div>

            {/* Glowing Category Label */}
            <div
              style={{
                position: 'absolute',
                left: node.offsetX > 0 ? '56px' : 'auto',
                right: node.offsetX < 0 ? '56px' : 'auto',
                whiteSpace: 'nowrap',
                backgroundColor: 'rgba(2, 11, 45, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '0.35rem 0.65rem',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                pointerEvents: 'none',
              }}
            >
              {node.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
