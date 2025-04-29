"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const LIGHT_COLOR = "#333333"
const LIGHT_HIT_COLOR = "#666666"
const LIGHT_BACKGROUND_COLOR = "#FFFFFF"
const LIGHT_BALL_COLOR = "#000000"
const LIGHT_PADDLE_COLOR = "#1a1a1a"

const DARK_COLOR = "#FFFFFF"
const DARK_HIT_COLOR = "#333333"
const DARK_BACKGROUND_COLOR = "#000000"
const DARK_BALL_COLOR = "#FFFFFF"
const DARK_PADDLE_COLOR = "#FFFFFF"

const LETTER_SPACING = 1
const WORD_SPACING = 3

const PIXEL_MAP = {
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  Z: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
}

interface Pixel {
  x: number
  y: number
  size: number
  hit: boolean
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
  targetY: number
  isVertical: boolean
}

export function AazainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
  const paddlesRef = useRef<Paddle[]>([])
  const scaleRef = useRef(1)
  const ballSpeedRef = useRef<number | null>(null)
  const { resolvedTheme } = useTheme()
  // Create a ref to store the current theme
  const themeRef = useRef(resolvedTheme)
  // Add a ref to track if the game has been initialized
  const gameInitializedRef = useRef(false)
  
  // Update themeRef when resolvedTheme changes
  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])
  
  // Setup game logic only once
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const previousWidth = canvas.width
      const previousHeight = canvas.height
      
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Calculate new scale
      const newScale = Math.min(canvas.width / 1000, canvas.height / 1000)
      const scaleRatio = newScale / scaleRef.current
      
      // Update the scale
      scaleRef.current = newScale
      
      // Only do a full init if game hasn't been initialized yet
      if (!gameInitializedRef.current) {
        initializeGame()
        gameInitializedRef.current = true
      } else {
        // Adjust existing game elements to the new dimensions instead of resetting
        adjustGameToNewDimensions(previousWidth, previousHeight, scaleRatio)
      }
    }
    
    // Function to adjust game elements to new screen dimensions
    const adjustGameToNewDimensions = (prevWidth: number, prevHeight: number, scaleRatio: number) => {
      const widthRatio = canvas.width / prevWidth
      const heightRatio = canvas.height / prevHeight
      
      // Adjust ball position and size
      const ball = ballRef.current
      ball.x *= widthRatio
      ball.y *= heightRatio
      ball.radius *= scaleRatio
      
      // Adjust ball speed to maintain relative speed
      if (ballSpeedRef.current !== null) {
        ballSpeedRef.current *= scaleRatio
        ball.dx = ball.dx > 0 ? ballSpeedRef.current : -ballSpeedRef.current
        ball.dy = ball.dy > 0 ? ballSpeedRef.current : -ballSpeedRef.current
      }
      
      // Adjust pixels
      pixelsRef.current.forEach(pixel => {
        pixel.x *= widthRatio
        pixel.y *= heightRatio
        pixel.size *= scaleRatio
      })
      
      // Adjust paddles
      paddlesRef.current.forEach(paddle => {
        if (paddle.isVertical) {
          paddle.x *= widthRatio
          paddle.y *= heightRatio
          paddle.width *= scaleRatio
          paddle.height *= scaleRatio
        } else {
          paddle.x *= widthRatio
          paddle.y *= heightRatio
          paddle.width *= scaleRatio
          paddle.height *= scaleRatio
        }
      })
      
      // Update top paddle position to match nav
      const navHeight = document.querySelector("nav")?.offsetHeight || 64
      if (paddlesRef.current[2]) {
        paddlesRef.current[2].y = navHeight
      }
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      const LARGE_PIXEL_SIZE = 8 * scale
      const BALL_SPEED = 6 * scale
      
      // Store initial ball speed if not already set
      if (ballSpeedRef.current === null) {
        ballSpeedRef.current = BALL_SPEED
      }
      
      pixelsRef.current = []
      const word = "AAZAIN"

      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }

      const totalWidth = calculateWordWidth(word, LARGE_PIXEL_SIZE)
      
      // Adjust scale factor based on screen width to make text smaller on larger screens
      let scaleFactor = (canvas.width * 0.8) / totalWidth
      
      // Apply additional reduction for wider screens
      const isDesktop = window.innerWidth > 1024
      if (isDesktop) {
        // Reduce the scale by 20% on desktop screens
        scaleFactor *= 0.8
      }

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor

      const textHeight = 5 * adjustedLargePixelSize
      const startY = (canvas.height - textHeight) / 2
      let startX = (canvas.width - totalWidth * scaleFactor) / 2

      word.split("").forEach((letter) => {
        const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
        if (!pixelMap) return

        for (let i = 0; i < pixelMap.length; i++) {
          for (let j = 0; j < pixelMap[i].length; j++) {
            if (pixelMap[i][j]) {
              const x = startX + j * adjustedLargePixelSize
              const y = startY + i * adjustedLargePixelSize
              pixelsRef.current.push({ x, y, size: adjustedLargePixelSize, hit: false })
            }
          }
        }
        startX += (pixelMap[0].length + LETTER_SPACING) * adjustedLargePixelSize
      })

      // Initialize ball position near the top right corner
      const ballStartX = canvas.width * 0.9
      const ballStartY = canvas.height * 0.1

      // Use the stored ball speed to maintain consistent speed across theme changes
      const currentSpeed = ballSpeedRef.current
      
      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -currentSpeed,
        dy: currentSpeed,
        radius: adjustedLargePixelSize / 2,
      }

      // Make paddles thinner
      const paddleWidth = adjustedLargePixelSize * 0.3 // Even thinner paddles
      const paddleLength = 10 * adjustedLargePixelSize

      // Get the nav height - this will be 0 initially but will be updated on first render
      const navHeight = document.querySelector("nav")?.offsetHeight || 64

      paddlesRef.current = [
        {
          x: 0,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width - paddleWidth,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: navHeight, // Position exactly at the bottom of nav
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: canvas.height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
      ]
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
      }

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx
          }
        } else {
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy
          }
        }
      })

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2
          paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
          paddle.y += (paddle.targetY - paddle.y) * 0.1
        } else {
          paddle.targetY = ball.x - paddle.width / 2
          paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
          paddle.x += (paddle.targetY - paddle.x) * 0.1
        }
      })

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true
          const centerX = pixel.x + pixel.size / 2
          const centerY = pixel.y + pixel.size / 2
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx
          } else {
            ball.dy = -ball.dy
          }
        }
      })
    }

    const drawGame = () => {
      if (!ctx) return

      // Get current theme colors using themeRef instead of captured resolvedTheme value
      const currentTheme = themeRef.current
      const currentBgColor = currentTheme === "dark" ? DARK_BACKGROUND_COLOR : LIGHT_BACKGROUND_COLOR
      const currentColor = currentTheme === "dark" ? DARK_COLOR : LIGHT_COLOR
      const currentHitColor = currentTheme === "dark" ? DARK_HIT_COLOR : LIGHT_HIT_COLOR
      const currentBallColor = currentTheme === "dark" ? DARK_BALL_COLOR : LIGHT_BALL_COLOR
      const currentPaddleColor = currentTheme === "dark" ? DARK_PADDLE_COLOR : LIGHT_PADDLE_COLOR

      ctx.fillStyle = currentBgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? currentHitColor : currentColor
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      ctx.fillStyle = currentBallColor
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = currentPaddleColor
      paddlesRef.current.forEach((paddle) => {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
      })
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      requestAnimationFrame(gameLoop)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Update top paddle position when nav height changes
    const observer = new ResizeObserver(() => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 64
      if (paddlesRef.current[2]) {
        paddlesRef.current[2].y = navHeight
      }
    })

    const nav = document.querySelector("nav")
    if (nav) {
      observer.observe(nav)
    }

    gameLoop()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      observer.disconnect()
    }
  }, []) // Remove resolvedTheme from dependencies

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      aria-label="Aazain: Fullscreen Pong game with pixel text"
    />
  )
}

export default AazainAnimation
