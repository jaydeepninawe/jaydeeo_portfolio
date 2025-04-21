import React, { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#ffffff", "#cbe8ff", "#b3caff", "#a0a0ff", "#e0e0ff"];
    const numStars = 300;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      delta: Math.random() * 0.01 + 0.005,
      vx: Math.random() * 0.3 - 0.15,
      vy: Math.random() * 0.3 - 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const shootingStars = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const offsetX = (mouse.current.x - width / 2) * 0.001;
      const offsetY = (mouse.current.y - height / 2) * 0.001;

      for (let star of stars) {
        // Twinkle
        star.alpha += star.delta;
        if (star.alpha <= 0.2 || star.alpha >= 1) star.delta = -star.delta;

        // Drift
        star.x += star.vx + offsetX;
        star.y += star.vy + offsetY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}0A`; // translucent glow
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(star.color)}, ${star.alpha})`;
        ctx.fill();
      }

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.01;

        if (s.alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 5, s.y - s.vy * 5);
        ctx.strokeStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    // Occasionally spawn shooting stars
    const shootInterval = setInterval(() => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        vx: Math.random() * 5 + 3,
        vy: Math.random() * 2 - 1,
        alpha: 1,
      });
    }, 3000); // every ~3 seconds

    // Handle mouse parallax
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    // Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearInterval(shootInterval);
    };
  }, []);

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
