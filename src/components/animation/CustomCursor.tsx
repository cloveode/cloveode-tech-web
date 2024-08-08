"use client";
import React, { useEffect, useRef, useState } from "react";

// Define cursor colors
const CURSOR_COLORS: Record<string, string> = {
  default: "black-500",
};

// Main CustomCursor component
const CustomCursor: React.FC = () => {
  // Reference to the cursor element
  const cursorRef = useRef<HTMLDivElement>(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State to track cursor color
  const [cursorColor, setCursorColor] = useState("sky-500");
  // State to track click event
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      // Reset click state after 800 milliseconds
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    // Event listener for mouseover (hover) on HTML elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target?.tagName.toLowerCase();
      // Set cursor color based on the tag, default to "sky-500"
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []); // useEffect runs only once on mount

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 rounded-full w-3 h-3 bg-gray-500`}
      />
      <div
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 rounded-full w-8 h-8 border border-gray-500`}
      >
        <div
          className={`w-8 h-8 ${
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
          } -translate-x-[1px] -translate-y-[1px] rounded-full bg-gray-500 ease-in transition-all duration-150 -z-10`}
        />
        {/* Sphere element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
