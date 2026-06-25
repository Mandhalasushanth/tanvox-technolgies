import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    // Hide default cursor across the entire document
    document.documentElement.style.cursor = 'none';

    // Track mouse position
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Move inner dot instantly
      gsap.set(cursorDotRef.current, {
        x: clientX,
        y: clientY,
      });

      // Move outer outline with a smooth trailing effect
      gsap.to(cursorOutlineRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // Add interaction logic for links/buttons
    const onMouseEnterLink = () => {
      gsap.to(cursorOutlineRef.current, {
        scale: 1.5,
        backgroundColor: "rgba(255, 30, 60, 0.15)", // Soft red glow inside the ring
        borderColor: "rgba(255, 30, 60, 0.5)",
        duration: 0.3,
      });
      gsap.to(cursorDotRef.current, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorOutlineRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 30, 60, 1)", // Solid red border
        duration: 0.3,
      });
      gsap.to(cursorDotRef.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // MutationObserver to attach events to dynamic links
    const observeLinks = () => {
      const interactables = document.querySelectorAll("a, button, input, textarea, select, [role='button']");
      interactables.forEach((el) => {
        // Prevent adding multiple listeners
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
        
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
        // Ensure interactive elements hide the default cursor as well
        el.style.cursor = 'none';
      });
    };

    // Run initially
    observeLinks();

    // Re-run when DOM changes (e.g. routing or dynamic rendering)
    const observer = new MutationObserver(() => {
      observeLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = 'auto';
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  // Using inline styles matching your project colors (red: #FF1E3C) to ensure it works without TailwindCSS
  return (
    <>
      <div
        ref={cursorOutlineRef}
        className="custom-cursor-outline"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "24px",
          height: "24px",
          border: "1.5px solid #FF1E3C",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)"
        }}
      ></div>
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "#FF1E3C",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)"
        }}
      ></div>
    </>
  );
};

export default Cursor;
