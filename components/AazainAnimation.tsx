"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const LIGHT_COLOR = "#333333"
const LIGHT_HIT_COLOR = "#666666"
const LIGHT_BACKGROUND_COLOR = "#FFFFFF"
const LIGHT_BALL_COLOR = "#000000"
const LIGHT_PADDLE_COLOR = "#1a1a1a"

const DARK_COLOR = "#FFFFFF"
const DARK_HIT_COLOR = "green"
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

interface AazainAnimationProps {
  isGameMode?: boolean
}

export function AazainAnimation({ isGameMode = false }: AazainAnimationProps) {
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
  // Ref to track game mode changes
  const isGameModeRef = useRef(isGameMode)
  // Refs for paddle movement in game mode
  const keyPressedRef = useRef<{ [key: string]: boolean }>({})
  const touchStartXRef = useRef<number | null>(null)
  const userPaddleWidthRef = useRef(0)
  const instructionsRef = useRef<string>("")
  const instructionsOpacityRef = useRef<number>(1)
  const instructionsFadeTimerRef = useRef<number | null>(null)
  const mousePositionRef = useRef<number | null>(null)
  const isMouseDownRef = useRef(false)
  
  // Function to reinitialize the game - declared outside effects to be available in all effects
  const reinitializeGame = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    // Reinitialize the game state
    gameInitializedRef.current = false
    
    // Force resize which will trigger full game reinitialization
    const resizeEvent = new Event('resize')
    window.dispatchEvent(resizeEvent)
  }
  
  // Update themeRef when resolvedTheme changes
  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  // Update game mode ref when prop changes
  useEffect(() => {
    if (isGameMode !== isGameModeRef.current) {
      isGameModeRef.current = isGameMode
      reinitializeGame()
    }
  }, [isGameMode])
  
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
      
      // Use a more reliable way to get the viewport height on mobile
      // This addresses issues with mobile browsers where the address bar affects viewport height
      const getViewportHeight = () => {
        // For modern browsers, we can use window.visualViewport
        if (window.visualViewport) {
          return window.visualViewport.height;
        }
        // Fallback to window.innerHeight
        return window.innerHeight;
      };
      
      canvas.height = getViewportHeight();
      
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

      // Update user paddle width reference in game mode
      if (isGameModeRef.current && paddlesRef.current.length > 0) {
        userPaddleWidthRef.current = paddlesRef.current[0].width
      }
      
      // Update top paddle position to match nav
      const navHeight = document.querySelector("nav")?.offsetHeight || 64
      if (paddlesRef.current[2]) {
        paddlesRef.current[2].y = navHeight
      }
    }

    // Create random pixels for game mode
    const createRandomPixels = () => {
      const scale = scaleRef.current
      const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window)
      // Make random pixels even bigger on mobile
      const pixelSize = isMobile ? 10 * scale * 1.8 : 8 * scale * 1.5 // Significantly bigger on mobile
      const randomPixels: Pixel[] = []
      
      // Create 20-30 random pixels - reduced count to make room for name
      const pixelCount = Math.floor(Math.random() * 11) + 20
      
      for (let i = 0; i < pixelCount; i++) {
        const x = Math.random() * (canvas.width - pixelSize)
        // Position pixels in top 60% of screen to avoid paddle area and make room for name
        const y = Math.random() * (canvas.height * 0.6)
        randomPixels.push({ x, y, size: pixelSize, hit: false })
      }
      
      // Add "AAZAIN" in pixels in game mode for the player to break down
      const word = "AAZAIN"
      
      // Calculate pixel size for the name - significantly larger than random pixels
      // Make name pixels even larger on mobile
      const namePixelSize = isMobile ? pixelSize * 1.8 : pixelSize * 1.5 // Extra large on mobile
      
      // Calculate the word width to center it
      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }
      
      const totalWidth = calculateWordWidth(word, namePixelSize)
      // Position in the middle of the screen, but lower to accommodate the larger size
      const startY = canvas.height * 0.25
      let startX = (canvas.width - totalWidth) / 2
      
      word.split("").forEach((letter) => {
        const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
        if (!pixelMap) return
        
        for (let i = 0; i < pixelMap.length; i++) {
          for (let j = 0; j < pixelMap[i].length; j++) {
            if (pixelMap[i][j]) {
              const x = startX + j * namePixelSize
              const y = startY + i * namePixelSize
              randomPixels.push({ x, y, size: namePixelSize, hit: false })
            }
          }
        }
        startX += (pixelMap[0].length + LETTER_SPACING) * namePixelSize
      })
      
      return randomPixels
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      // Increase base pixel size, especially for mobile
      const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window)
      const LARGE_PIXEL_SIZE = isMobile ? 12 * scale : 8 * scale
      const BALL_SPEED = 6 * scale
      
      // Store initial ball speed if not already set
      if (ballSpeedRef.current === null) {
        ballSpeedRef.current = BALL_SPEED
      }
      
      if (isGameModeRef.current) {
        // Game mode - create random pixels
        pixelsRef.current = createRandomPixels()
      } else {
        // Normal mode - create AAZAIN text
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
      }

      // Ball starting position based on game mode
      let ballStartX, ballStartY
      
      if (isGameModeRef.current) {
        // In game mode, start ball from center top
        ballStartX = canvas.width * 0.5
        ballStartY = canvas.height * 0.2
      } else {
        // In normal mode, start from top right corner
        ballStartX = canvas.width * 0.9
        ballStartY = canvas.height * 0.1
      }

      // Use the stored ball speed to maintain consistent speed across theme changes
      const currentSpeed = ballSpeedRef.current
      
      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: isGameModeRef.current ? 0 : -currentSpeed, // In game mode, start with no horizontal movement
        dy: currentSpeed,
        // Make ball bigger on mobile
        radius: isMobile ? LARGE_PIXEL_SIZE * 0.8 : LARGE_PIXEL_SIZE / 2,
      }

      // Make paddles thicker
      const paddleWidth = LARGE_PIXEL_SIZE * 0.3 // Even thicker paddles
      const paddleLength = isMobile ? 15 * LARGE_PIXEL_SIZE : 20 * LARGE_PIXEL_SIZE // Significantly longer paddles

      // Get the nav height - this will be 0 initially but will be updated on first render
      const navHeight = document.querySelector("nav")?.offsetHeight || 64

      if (isGameModeRef.current) {
        // In game mode, only bottom paddle for player control - now less wide
        const bottomPaddleWidth = paddleLength * 1 // Reduced from 3 to make it less wide
        
        // Adjust paddle thickness based on device type
        const paddleThickness = isMobile ? paddleWidth * 16 : paddleWidth * 5 // Thicker on mobile
        
        paddlesRef.current = [
          {
            x: canvas.width / 2 - bottomPaddleWidth / 2,
            // Move the paddle higher up from the bottom for better visibility on mobile
            // Using a percentage of the height rather than a fixed offset ensures it scales well
            y: canvas.height - (canvas.height * 0.15) - paddleThickness, // Position paddle 15% from bottom
            width: bottomPaddleWidth,
            height: paddleThickness, // Use the variable for thickness
            targetY: canvas.width / 2 - bottomPaddleWidth / 2,
            isVertical: false,
          }
        ]
        
        // Store paddle width for movement calculations
        userPaddleWidthRef.current = bottomPaddleWidth
        
        // Reset instructions opacity when entering game mode
        instructionsOpacityRef.current = 1
        
        // Clear any existing fade timer
        if (instructionsFadeTimerRef.current !== null) {
          window.clearTimeout(instructionsFadeTimerRef.current)
        }
        
        // Set timer to start fading instructions after 5 seconds
        instructionsFadeTimerRef.current = window.setTimeout(() => {
          // Start the fade process
          startInstructionsFade()
        }, 5000) // 5 seconds
      } else {
        // Normal mode with all paddles
        paddlesRef.current = [
          {
            x: 0,
            // Position left paddle closer to where ball will be initially
            y: canvas.height * 0.3 - paddleLength / 2,
            width: paddleWidth,
            height: paddleLength,
            targetY: canvas.height / 2 - paddleLength / 2,
            isVertical: true,
          },
          {
            x: canvas.width - paddleWidth,
            // Position right paddle closer to where ball will be initially
            y: canvas.height * 0.3 - paddleLength / 2,
            width: paddleWidth,
            height: paddleLength,
            targetY: canvas.height / 2 - paddleLength / 2,
            isVertical: true,
          },
          {
            // Position top paddle closer to where ball will be initially
            x: canvas.width * 0.7 - paddleLength / 2,
            y: navHeight, // Position exactly at the bottom of nav
            width: paddleLength,
            height: paddleWidth,
            targetY: canvas.width / 2 - paddleLength / 2,
            isVertical: false,
          },
          {
            // Position bottom paddle closer to where ball will be initially
            x: canvas.width * 0.7 - paddleLength / 2,
            // Move the bottom paddle higher up for better visibility on mobile
            y: canvas.height - (canvas.height * 0.1), // Position paddle 10% from bottom
            width: paddleLength,
            height: paddleWidth,
            targetY: canvas.width / 2 - paddleLength / 2,
            isVertical: false,
          },
        ]
      }

      // Set instructions based on device type
      instructionsRef.current = isMobile 
        ? "Drag paddle left and right to play" 
        : "Use ← → arrow keys or drag with mouse to move paddle"
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      // Ball boundaries - in game mode, losing the ball resets it
      if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy
      }
      
      if (isGameModeRef.current && ball.y + ball.radius > canvas.height) {
        // In game mode, if ball goes past bottom, reset position and keep score
        ball.x = canvas.width / 2
        ball.y = canvas.height * 0.2
        ball.dx = (Math.random() * 2 - 1) * ballSpeedRef.current! // Random horizontal direction
        ball.dy = ballSpeedRef.current!
      } else if (!isGameModeRef.current && (ball.y + ball.radius > canvas.height)) {
        // In regular mode, just bounce
        ball.dy = -ball.dy
      }
      
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
      }

      // Paddle collision
      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          // Vertical paddle logic (side paddles)
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx
          }
        } else {
          // Horizontal paddle logic (top and bottom paddles)
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy
            
            // In game mode, add some horizontal velocity based on where the ball hits the paddle
            if (isGameModeRef.current) {
              // Calculate position on paddle (0 = left edge, 1 = right edge)
              const hitPosition = (ball.x - paddle.x) / paddle.width
              // Map to a value between -1 and 1, with center being 0
              const angleMultiplier = (hitPosition * 2 - 1) * 0.7 // 0.7 limits the maximum angle
              // Adjust horizontal velocity
              ball.dx = angleMultiplier * ballSpeedRef.current!
            }
          }
        }
      })

      // Paddle movement based on game mode
      if (isGameModeRef.current) {
        // In game mode, the bottom paddle is controlled by keyboard/touch
        handleGamePaddleMovement()
      } else {
        // In normal mode, paddles follow the ball automatically
        paddles.forEach((paddle) => {
          if (paddle.isVertical) {
            paddle.targetY = ball.y - paddle.height / 2
            paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
            // Increase movement speed for more responsive tracking
            paddle.y += (paddle.targetY - paddle.y) * 0.15
          } else {
            paddle.targetY = ball.x - paddle.width / 2
            paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
            // Increase movement speed for more responsive tracking
            paddle.x += (paddle.targetY - paddle.x) * 0.15
          }
        })
      }

      // Pixel collision logic
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
    
    // Handle keyboard and touch controls for the game paddle
    const handleGamePaddleMovement = () => {
      if (!isGameModeRef.current || paddlesRef.current.length === 0) return
      
      const paddle = paddlesRef.current[0]
      const paddleSpeed = 10 * scaleRef.current

      // Handle keyboard movement
      if (keyPressedRef.current.ArrowLeft) {
        paddle.x = Math.max(0, paddle.x - paddleSpeed)
      }
      if (keyPressedRef.current.ArrowRight) {
        paddle.x = Math.min(canvas.width - paddle.width, paddle.x + paddleSpeed)
      }

      // Handle mouse movement
      if (isMouseDownRef.current && mousePositionRef.current !== null) {
        // Center the paddle on the mouse position
        const newX = mousePositionRef.current - (paddle.width / 2)
        paddle.x = Math.max(0, Math.min(canvas.width - paddle.width, newX))
      }
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

      // Draw game instructions in game mode
      if (isGameModeRef.current && instructionsOpacityRef.current > 0) {
        ctx.globalAlpha = instructionsOpacityRef.current
        const fontSize = Math.max(16, Math.floor(18 * scaleRef.current))
        ctx.font = `bold ${fontSize}px sans-serif`
        ctx.fillStyle = currentTheme === "dark" 
          ? `rgba(255, 255, 255, ${instructionsOpacityRef.current * 0.8})` 
          : `rgba(0, 0, 0, ${instructionsOpacityRef.current * 0.8})`
        ctx.textAlign = "center"
        // Position text higher up for better visibility on mobile
        ctx.fillText(instructionsRef.current, canvas.width / 2, canvas.height * 0.7)
        ctx.globalAlpha = 1
      }
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      requestAnimationFrame(gameLoop)
    }

    // Handle keyboard input for game mode
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGameModeRef.current) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          keyPressedRef.current[e.key] = true
        }
      }
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (isGameModeRef.current) {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          keyPressedRef.current[e.key] = false
        }
      }
    }

    // Handle touch input for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (isGameModeRef.current && paddlesRef.current.length > 0) {
        touchStartXRef.current = e.touches[0].clientX
      }
    }
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isGameModeRef.current && touchStartXRef.current !== null && paddlesRef.current.length > 0) {
        e.preventDefault() // Prevent scrolling when playing
        const paddle = paddlesRef.current[0]
        const touchX = e.touches[0].clientX
        const deltaX = touchX - touchStartXRef.current
        
        // Update paddle position based on touch movement
        let newX = paddle.x + deltaX
        newX = Math.max(0, Math.min(canvas.width - paddle.width, newX))
        paddle.x = newX
        
        // Update touch reference for next move
        touchStartXRef.current = touchX
      }
    }
    
    const handleTouchEnd = () => {
      touchStartXRef.current = null
    }

    const handleMouseDown = (e: MouseEvent) => {
      if (isGameModeRef.current && paddlesRef.current.length > 0) {
        isMouseDownRef.current = true
        mousePositionRef.current = e.clientX
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isGameModeRef.current && isMouseDownRef.current) {
        mousePositionRef.current = e.clientX
      }
    }

    const handleMouseUp = () => {
      isMouseDownRef.current = false
    }

    // Set up event listeners
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchmove", handleTouchMove)
    canvas.addEventListener("touchend", handleTouchEnd)
    window.addEventListener("resize", resizeCanvas)

    // Add mouse event listeners
    canvas.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    resizeCanvas()

    // Update top paddle position when nav height changes
    const observer = new ResizeObserver(() => {
      const navHeight = document.querySelector("nav")?.offsetHeight || 64
      if (!isGameModeRef.current && paddlesRef.current[2]) {
        paddlesRef.current[2].y = navHeight
      }
    })

    const nav = document.querySelector("nav")
    if (nav) {
      observer.observe(nav)
    }

    gameLoop()

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("resize", resizeCanvas)
      
      // Remove mouse event listeners
      canvas.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      
      if (nav) {
        observer.disconnect()
      }
      
      if (instructionsFadeTimerRef.current !== null) {
        window.clearTimeout(instructionsFadeTimerRef.current)
      }
    }
  }, [])

  // Function to handle the gradual fading of instructions
  const startInstructionsFade = () => {
    const fadeInterval = window.setInterval(() => {
      // Reduce opacity gradually
      instructionsOpacityRef.current -= 0.05
      
      // Stop when fully transparent
      if (instructionsOpacityRef.current <= 0) {
        instructionsOpacityRef.current = 0
        window.clearInterval(fadeInterval)
      }
    }, 100) // Update every 100ms for a smooth 2-second fade
    
    // Store the interval ID to clear it if needed
    return fadeInterval
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      aria-label={isGameMode ? "Interactive Pong game" : "Aazain: Fullscreen Pong game with pixel text"}
    />
  )
}

export default AazainAnimation
