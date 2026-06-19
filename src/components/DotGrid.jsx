import { useEffect, useRef } from "react";

export default function DotGrid() {
  const ref = useRef(null);
  const dataRef = useRef({ dots: [], animationId: null });

  useEffect(() => {
    const canvas = ref.current;
    const animationState = dataRef.current;
    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const spacing = 6;
    const radius = 1;

    // Create dot objects with position and opacity
    const dots = [];
    for (let x = spacing / 2; x < W; x += spacing) {
      for (let y = spacing / 2; y < H; y += spacing) {
        dots.push({
          x,
          y,
          alpha: Math.random() * 0.7,
          targetAlpha: Math.random() * 0.7,
          speed: Math.random() * 0.08 + 0.2, // How fast opacity changes
        });
      }
    }

    animationState.dots = dots;

    // Animation loop
    const animate = () => {
      // Update opacity values
      dots.forEach((dot) => {
        // Move current alpha toward target alpha
        dot.alpha += (dot.targetAlpha - dot.alpha) * dot.speed;

        // Randomly pick new target occasionally
        if (Math.random() < 0.08) {
          dot.targetAlpha = Math.random() * 0.7;
        }
      });

      // Clear and redraw
      ctx.clearRect(0, 0, W, H);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 211, 20, ${dot.alpha.toFixed(2)})`;
        ctx.fill();
      });

      animationState.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationState.animationId) {
        cancelAnimationFrame(animationState.animationId);
      }
    };
  }, []);

  return (
      <canvas
        ref={ref}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100px",
          pointerEvents: "none",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40px, rgba(0,0,0,0) 100px)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40px, rgba(0,0,0,0) 100px)",
        }}
      />
  );
}
