"use client"

import { useCallback, useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const GRID_SIZE = 12
const CELL_SIZE = 60 // pixels per grid cell

interface Frame {
  id: number
  tag: string // Tag for categorization
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  corner: string
  edgeHorizontal: string
  edgeVertical: string
  mediaSize: number
  borderThickness: number
  borderSize: number
  autoplayMode: "all" | "hover"
  isHovered: boolean
  lastPlaybackPosition?: number // Store the last playback position
}

const initialFrames: Frame[] = [
  {
    id: 1,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 2,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 3,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 4,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 5,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 6,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 7,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 8,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
  {
    id: 9,
    tag: "Merch",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
    mediaSize: 1,
    borderThickness: 0,
    borderSize: 80,
    autoplayMode: "all",
    isHovered: false,
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>([])
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(4)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [showFrames, setShowFrames] = useState(true)
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all")
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Detect mobile device and set showFrames accordingly
  useEffect(() => {
    if (isMounted) {
      const isMobile = window.innerWidth <= 768 || ('ontouchstart' in window)
      setShowFrames(!isMobile) // Disable frames on mobile, enable on desktop
    }
  }, [isMounted])

  // Load frames immediately but in batches
  useEffect(() => {
    if (!isInitialized) {
      // Load all frames immediately
      setFrames(initialFrames);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Memoize row and column sizing functions
  const getRowSizes = useCallback(() => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }, [hovered, hoverSize])

  const getColSizes = useCallback(() => {
    if (hovered === null) {
      return "4fr 4fr 4fr"
    }
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }, [hovered, hoverSize])

  const getTransformOrigin = useCallback((x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }, [])

  const updateFrameProperty = useCallback((id: number, property: keyof Frame, value: number) => {
    setFrames(frames => frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }, [])

  const toggleControls = useCallback(() => {
    setShowControls(prev => !prev)
  }, [])

  const toggleCleanInterface = useCallback(() => {
    setCleanInterface(prev => !prev)
    if (cleanInterface) {
      setShowControls(false)
    }
  }, [cleanInterface])

  // Grid styles
  const gridStyle = useMemo(() => ({
    display: "grid",
    gridTemplateRows: getRowSizes(),
    gridTemplateColumns: getColSizes(),
    gap: `${gapSize}px`,
    transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
  }), [getRowSizes, getColSizes, gapSize])

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch id="frame-toggle" checked={showFrames} onCheckedChange={setShowFrames} />
            <label htmlFor="frame-toggle" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {showFrames ? "Hide Frames" : "Show Frames"}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) => setAutoplayMode(checked ? "all" : "hover")}
            />
            <label htmlFor="autoplay-toggle" className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dynamic Frame Layout</h2>
          <div className="space-x-2">
            <Button onClick={toggleControls}>{showControls ? "Hide Controls" : "Show Controls"}</Button>
            <Button onClick={toggleCleanInterface}>{cleanInterface ? "Show UI" : "Hide UI"}</Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className="relative w-full h-full"
        style={gridStyle}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 4)
          const col = Math.floor(frame.defaultPos.x / 4)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)
          const isFrameHovered = hovered?.row === row && hovered?.col === col;

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                video={frame.video}
                width="100%"
                height="100%"
                className="absolute inset-0"
                corner={frame.corner}
                edgeHorizontal={frame.edgeHorizontal}
                edgeVertical={frame.edgeVertical}
                mediaSize={frame.mediaSize}
                borderThickness={frame.borderThickness}
                borderSize={frame.borderSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                onBorderThicknessChange={(value) => updateFrameProperty(frame.id, "borderThickness", value)}
                onBorderSizeChange={(value) => updateFrameProperty(frame.id, "borderSize", value)}
                showControls={showControls && !cleanInterface}
                label={`Frame ${frame.id}`}
                showFrame={showFrames}
                autoplayMode={autoplayMode}
                isHovered={isFrameHovered}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
