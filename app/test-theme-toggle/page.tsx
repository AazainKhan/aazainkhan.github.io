import { ThemeToggle } from "@/components/ThemeToggle"

export default function TestThemeTogglePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-6">
      <h1 className="text-2xl font-bold">Theme Toggle Test</h1>
      <div className="p-6 border rounded-lg dark:border-gray-700">
        <ThemeToggle />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Toggle between light and dark theme using the switch above
      </p>
    </div>
  )
} 