import React, { useEffect, useRef } from "react";

function Ripple() {
  const canvasRef = useRef(null);
  const backgroundCanvasRef = useRef(null);
  const trailCanvasRef = useRef(null);
  const animationRef = useRef();
  const mouseTrail = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const backgroundImage = useRef(null);
  const lastUpdate = useRef(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const backgroundCanvas = backgroundCanvasRef.current;
    const trailCanvas = trailCanvasRef.current;
    if (!canvas || !backgroundCanvas || !trailCanvas) return;

    const ctx = canvas.getContext("2d");
    const bgCtx = backgroundCanvas.getContext("2d");
    const trailCtx = trailCanvas.getContext("2d");

    // Load background image from Unsplash
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src =
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop&crop=center";

    img.onload = () => {
      backgroundImage.current = img;
      updateCanvasSize();
    };

    img.onerror = () => {
      // Fallback to gradient if image fails to load
      console.log("Image failed to load, using gradient fallback");
      updateCanvasSize();
    };

    // Set canvas size and draw background
    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      backgroundCanvas.width = width;
      backgroundCanvas.height = height;
      trailCanvas.width = width;
      trailCanvas.height = height;

      if (backgroundImage.current) {
        // Draw the Unsplash image to fit the canvas
        bgCtx.drawImage(backgroundImage.current, 0, 0, width, height);
        bgCtx.globalCompositeOperation = "overlay";
        bgCtx.fillStyle = "rgba(0, 20, 40, 0.2)";
        bgCtx.fillRect(0, 0, width, height);
        bgCtx.globalCompositeOperation = "source-over";
      } else {
        // Fallback gradient
        const gradient = bgCtx.createRadialGradient(
          width * 0.3,
          height * 0.2,
          0,
          width * 0.7,
          height * 0.8,
          width
        );
        gradient.addColorStop(0, "#667eea");
        gradient.addColorStop(0.3, "#764ba2");
        gradient.addColorStop(0.6, "#f093fb");
        gradient.addColorStop(1, "#f5576c");
        bgCtx.fillStyle = gradient;
        bgCtx.fillRect(0, 0, width, height);
      }

      // Clear trail canvas with black background
      trailCtx.fillStyle = "black";
      trailCtx.fillRect(0, 0, width, height);
    };

    // Trail point class similar to your reference
    class TrailPoint {
      constructor(x, y, force = 1) {
        this.x = x;
        this.y = y;
        this.age = 0;
        this.maxAge = 750; // milliseconds
        this.force = force;
        this.timestamp = performance.now();
      }

      update(delta) {
        this.age += delta;
        return this.age < this.maxAge;
      }

      getIntensity() {
        const normalizedAge = this.age / this.maxAge;
        if (normalizedAge < 0.3) {
          return this.easeCircleOut(normalizedAge / 0.3);
        } else {
          return this.easeCircleOut(1 - (normalizedAge - 0.3) / 0.7);
        }
      }

      easeCircleOut(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
      }
    }

    // Clear trail canvas
    const clearTrail = () => {
      trailCtx.globalCompositeOperation = "source-over";
      trailCtx.fillStyle = "black";
      trailCtx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw organic trail blobs
    const drawTrailPoint = (point) => {
      const intensity = point.getIntensity();
      if (intensity <= 0) return;

      const time = point.age * 0.001;
      const baseRadius = 30 * intensity * point.force;

      trailCtx.globalCompositeOperation = "screen";

      // Create multiple organic blobs for fluid effect
      for (let blob = 0; blob < 3; blob++) {
        const offset = blob * 2.1;
        const radiusVariation = 0.7 + 0.3 * Math.sin(time * 2 + offset);
        const xDistortion = Math.sin(time * 1.5 + offset) * baseRadius * 0.3;
        const yDistortion = Math.cos(time * 1.8 + offset) * baseRadius * 0.2;

        const blobRadius = baseRadius * radiusVariation;
        const blobX = point.x + xDistortion;
        const blobY = point.y + yDistortion;

        // Create flowing gradient
        const grd = trailCtx.createRadialGradient(
          blobX,
          blobY,
          blobRadius * 0.1,
          blobX,
          blobY,
          blobRadius
        );

        const alpha = 0.3 * intensity * (1 - blob * 0.2);
        grd.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        grd.addColorStop(0.3, `rgba(255, 255, 255, ${alpha * 0.7})`);
        grd.addColorStop(0.7, `rgba(255, 255, 255, ${alpha * 0.3})`);
        grd.addColorStop(1, `rgba(255, 255, 255, 0)`);

        trailCtx.fillStyle = grd;
        trailCtx.beginPath();

        // Draw organic shape
        const points = 8;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const noise = Math.sin(angle * 3 + time * 2) * 0.2;
          const radius = blobRadius * (1 + noise);
          const x = blobX + Math.cos(angle) * radius;
          const y = blobY + Math.sin(angle) * radius;

          if (i === 0) {
            trailCtx.moveTo(x, y);
          } else {
            trailCtx.lineTo(x, y);
          }
        }

        trailCtx.closePath();
        trailCtx.fill();
      }
    };

    // Mouse event handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const newPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const lastPos = mousePos.current;
      const distance = Math.sqrt(
        (newPos.x - lastPos.x) ** 2 + (newPos.y - lastPos.y) ** 2
      );

      if (distance > 3) {
        const force = Math.max(0.3, Math.min(distance * 0.01, 1));
        mouseTrail.current.push(new TrailPoint(newPos.x, newPos.y, force));

        // Limit trail length
        if (mouseTrail.current.length > 50) {
          mouseTrail.current.shift();
        }
      }

      mousePos.current = newPos;
    };

    // Animation loop
    const animate = () => {
      const now = performance.now();
      const delta = now - lastUpdate.current;
      lastUpdate.current = now;

      // Clear main canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update trail points
      mouseTrail.current = mouseTrail.current.filter((point) =>
        point.update(delta)
      );

      // Clear and redraw trail
      clearTrail();
      mouseTrail.current.forEach((point) => drawTrailPoint(point));

      // Composite background with trail as displacement map
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(backgroundCanvas, 0, 0);

      // Apply trail as distortion overlay
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(trailCanvas, 0, 0);

      // Add bright trail overlay
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.4;
      ctx.drawImage(trailCanvas, 0, 0);
      ctx.globalAlpha = 1;

      // Draw current mouse cursor
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.arc(mousePos.current.x, mousePos.current.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCanvasSize);

    setTimeout(() => {
      animate();
    }, 100);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden cursor-none bg-black">
      {/* Hidden background canvas */}
      <canvas ref={backgroundCanvasRef} className="absolute inset-0 hidden" />

      {/* Hidden trail canvas */}
      <canvas ref={trailCanvasRef} className="absolute inset-0 hidden" />

      {/* Main display canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Instructions overlay */}
      <div className="absolute top-8 left-8 text-white text-lg font-medium pointer-events-none select-none z-10">
        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg backdrop-blur-sm">
          <p>Move mouse to create fluid trail</p>
          <p className="text-sm opacity-75">Organic morphing effect</p>
        </div>
      </div>
    </div>
  );
}

export default Ripple;
