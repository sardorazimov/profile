"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Component() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1">
              <animate
                attributeName="stroke"
                values="white;#00ff00;white"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="1;2;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          </pattern>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00ff00" stopOpacity="0.5">
              <animate
                attributeName="offset"
                values="-1;2"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="25%" stopColor="#00ff00" stopOpacity="0">
              <animate
                attributeName="offset"
                values="-0.75;2.25"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        <rect width="100%" height="100%" fill="url(#greenGradient)" />
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
            Buy now
          </button>
          <button className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors">
            Explore beams
          </button>
        </motion.div>
      </div>
    </div>
  )
}