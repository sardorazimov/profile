'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

export interface SvgGridProps{
  className?: string;
  containerRef: RefObject<HTMLElement>; 
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

const SvgGrid = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, 
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  
}:SvgGridProps) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
 
  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ["90%", "-10%"],
        x2: ["100%", "0%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      }
    : {
        x1: ["10%", "110%"],
        x2: ["0%", "100%"],
        y1: ["0%", "0%"],
        y2: ["0%", "0%"],
      };
 
  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
 
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
 
        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
 
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };
 
    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (let entry of entries) {
        updatePath();
      }
    });
 
    // Observe the container element
     if (containerRef.current) {
       resizeObserver.observe(containerRef.current);
     }
 
    // Call the updatePath initially to set the initial path
    updatePath();
 
    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);
  return(
    <div className="flex px-24">
    <svg width="1210" height="810" viewBox="0 0 1210 810" fill="none" xmlns="http://www.w3.org/2000/svg"
     className={cn(
      'pointer-events-none absolute left-0 top-0 transform-gpu stroke-2',
      className
     )} id="grad1">
      <rect opacity="0.2" x="4.5" y="4.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" className="" />
      <circle cx="305" cy="205" r="5" fill="#D9D9D9" className="animated-border" />
      <circle cx="305" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="604.5" y="4.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="905" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="4.5" y="404.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="305" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="604.5" y="404.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="905" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="304.5" y="4.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="605" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="904.5" y="4.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="1205" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="1205" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="5" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="1205" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="1205" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="5" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="304.5" y="404.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="605" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="605" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <rect opacity="0.2" x="904.5" y="404.5" width="301" height="201" stroke="#262626" stroke-opacity="0.4" />
      <circle cx="1205" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="1205" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="605" r="5" fill="#D9D9D9" />
      <circle cx="1205" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="1205" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="605" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="905" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <g opacity="0.2">
        <mask id="path-73-outside-1_4_264" maskUnits="userSpaceOnUse" x="4" y="205" width="302" height="201" fill="black">
          <rect fill="white" x="4" y="205" width="302" height="201" />
          <path d="M5 205H305V405H5V205Z" />
        </mask>
        <path d="M305 405V406H306V405H305ZM5 405H4V406H5V405ZM304 205V405H306V205H304ZM305 404H5V406H305V404ZM6 405V205H4V405H6Z" fill="#262626" fill-opacity="0.4" mask="url(#path-73-outside-1_4_264)" />
      </g>
      <circle cx="305" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="5" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="305" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="305" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="405" r="2" fill="#262626" fill-opacity="0.564706" />
      <circle cx="5" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <g opacity="0.2">
        <mask id="path-83-outside-2_4_264" maskUnits="userSpaceOnUse" x="604" y="205" width="302" height="201" fill="black">
          <rect fill="white" x="604" y="205" width="302" height="201" />
          <path d="M605 205H905V405H605V205Z"     stroke="url(#grad1)"/>
        </mask>
        <path d="M905 405V406H906V405H905ZM605 405H604V406H605V405ZM904 205V405H906V205H904ZM905 404H605V406H905V404ZM606 405V205H604V405H606Z" fill="#262626" fill-opacity="0.4" mask="url(#path-83-outside-2_4_264)" />
      </g>
      <circle cx="905" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="205" r="5" fill="#D9D9D9" />
      <circle cx="605" cy="405" r="5" fill="#D9D9D9" />
      <circle cx="905" cy="205" r="2" fill="#262626" fill-opacity="0.564706" />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
    
  </div>

  )
}
 

export default SvgGrid;
