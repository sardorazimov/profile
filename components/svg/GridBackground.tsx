"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import StickyHeader from "../Headers/Header"

const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]

export default function GridBackground() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      <StickyHeader />
     <div className=" h-screen w-full bg-black overflow-hidden">
      {/* Animated square pattern with rounded corners */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="squarePattern" width="400" height="400" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="200" height="200" fill="none" stroke="white" strokeWidth="2" />
            <rect x="200" y="0" width="200" height="200" fill="none" stroke="white" strokeWidth="2" />
            <rect x="0" y="200" width="200" height="200" fill="none" stroke="white" strokeWidth="2" />
            <rect x="200" y="200" width="200" height="200" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="200" r="10" fill="white" />
            <circle cx="0" cy="0" r="10" fill="white" />
            <circle cx="400" cy="0" r="10" fill="white" />
            <circle cx="0" cy="400" r="10" fill="white" />
            <circle cx="400" cy="400" r="10" fill="white" />
          </pattern>
          <linearGradient id="flowingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" stopOpacity="1">
              <animate attributeName="offset" values="-1;1" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#ff0000" stopOpacity="0">
              <animate attributeName="offset" values="-0.75;1.25" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="flowingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="1">
              <animate attributeName="offset" values="-1;1" dur="6s" begin="1.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#00ff00" stopOpacity="0">
              <animate attributeName="offset" values="-0.75;1.25" dur="6s" begin="1.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="flowingGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0000ff" stopOpacity="1">
              <animate attributeName="offset" values="-1;1" dur="6s" begin="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#0000ff" stopOpacity="0">
              <animate attributeName="offset" values="-0.75;1.25" dur="6s" begin="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <linearGradient id="flowingGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffff00" stopOpacity="1">
              <animate attributeName="offset" values="-1;1" dur="6s" begin="4.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#ffff00" stopOpacity="0">
              <animate attributeName="offset" values="-0.75;1.25" dur="6s" begin="4.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          <mask id="squareMask">
            <rect width="100%" height="100%" fill="url(#squarePattern)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#squarePattern)" />
        <g mask="url(#squareMask)">
          <rect width="100%" height="100%" fill="url(#flowingGradient1)" />
          <rect width="100%" height="100%" fill="url(#flowingGradient2)" />
          <rect width="100%" height="100%" fill="url(#flowingGradient3)" />
          <rect width="100%" height="100%" fill="url(#flowingGradient4)" />
        </g>
      </svg>

      {/* Animated multi-colored particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particle.color}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>

      {/* Content */}
      <div className=" z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl"
        >
          Idea to website in minutes, not hours.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
        >
          Get the best beam tracking services in the world with our state of the art, cutting edge beam detection
          technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
            Buy now
          </button>
          <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors">
            Explore beams
          </button>
        </motion.div>
      </div>
    </div>
    </>
  
  )
}