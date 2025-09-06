import React, { useRef, useEffect } from "react";

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const numStars = 500;
    const stars: { x: number; y: number; z: number }[] = [];
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * width,
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 1)";

      for (let star of stars) {
        const x = centerX + (star.x / star.z) * width;
        const y = centerY + (star.y / star.z) * height;
        const size = 1.5 * (1 - star.z / width);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        star.z -= 2;
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -5,
        willChange: "transform",
      }}
    />
  );
};

export default Starfield;
