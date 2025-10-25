import { useEffect, useState } from "react"

// id, size, x, y, opacity, color1, color2, blur

export const BlobBackground = () => {
  const [blobs, setBlobs] = useState([])

  useEffect(() => {
    generateBlobs()

    const handleResize = () => {
      generateBlobs()
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const generateBlobs = () => {
    const numberOfBlobs = Math.floor((window.innerWidth * window.innerHeight) / 60000)
    const newBlobs = []

    for (let i = 0; i < numberOfBlobs; i++) {
      newBlobs.push({
        id: i,
        size: Math.random() * 200 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.2,
        color1: `hsl(${Math.random() * 360}, 70%, 60%)`,
        color2: `hsl(${Math.random() * 360}, 70%, 50%)`,
        blur: Math.random() * 50 + 20
      })
    }
    setBlobs(newBlobs)
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map(blob => (
        <div
          key={blob.id}
          className="absolute rounded-full"
          style={{
            height: blob.size + "px",
            width: blob.size + "px",
            left: blob.x + "%",
            top: blob.y + "%",
            background: `radial-gradient(circle, ${blob.color1}, ${blob.color2})`,
            opacity: blob.opacity,
            filter: `blur(${blob.blur}px)`
          }}
        />
      ))}
    </div>
  )
}
