"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AmazingBg() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonalLines" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="80" stroke="white" strokeWidth="1" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="white" strokeWidth="1" />
          </pattern>
          <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="25%" stopColor="#00ff00" stopOpacity="0">
              <animate
                attributeName="offset"
                values="-0.75;1.25"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <mask id="flowMask">
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        <rect width="100%" height="100%" fill="url(#flowingGradient)" mask="url(#flowMask)" />
      </svg>

      {/* Animated particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill="#FFA500"
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
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
            Start
          </button>
          <button className="px-8 py-3 bg-green-800 text-white rounded-full font-medium  transition-colors">
            Explore 
          </button>
          
        </motion.div>
      </div>
    </div>
  )
}
