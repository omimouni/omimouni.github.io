"use client";

import { Bodies, Composite, Engine, Render, World, Mouse, MouseConstraint, Runner, Body } from "matter-js";
import { useEffect, useRef } from "react";
import { icons_urls } from './icons';
export default function Canvas() {
  // Refs for canvas element and physics engine
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create({
    gravity: { y: 0.2 },  // Gentle gravity for floating effect
    enableSleeping: true, // Better performance
    constraintIterations: 2
  }));

  useEffect(() => {
    // Setup canvas dimensions
    const width = canvasRef.current?.clientWidth || 1000;
    const height = canvasRef.current?.clientHeight || 800;

    // Create Matter.js renderer
    const render = Render.create({
      element: canvasRef.current || document.createElement('canvas'),
      engine: engineRef.current,
      options: {
        showSleeping: false,
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: Math.min(window.devicePixelRatio, 2), // Performance optimization
      }
    });

    Render.run(render);

    // Create invisible walls to contain the icons
    const boundaries = [
      // Bottom wall with bounce
      Bodies.rectangle(width / 2, height - 50, width, 10, {
        isStatic: true,
        restitution: 0.5,
        render: { visible: false }
      }),
      // Left wall
      Bodies.rectangle(-20, height / 2, 10, height, {
        isStatic: true,
        render: { visible: false }
      }),
      // Right wall
      Bodies.rectangle(width + 20, height / 2, 10, height, {
        isStatic: true,
        render: { visible: false }
      }),
    ];

    // Create physics bodies for tech stack icons
    const icons = icons_urls.map((url, i) => {
      // Distribute icons across the width
      const x = 100 + i * (width / icons_urls.length);
      const y = -50 - (i * 30); // Stagger the fall

      // Responsive icon sizing
      const scale = window.innerWidth > 1024 ? 0.5 : 0.4;
      
      return Bodies.rectangle(x, y, 60, 60, {
        restitution: 0.4,   // Bouncy but not too much
        friction: 0.05,     // Slippery
        frictionAir: 0.002, // Slight air resistance
        density: 0.005,     // Light weight
        slop: 0.1,         // Physics optimization
        render: {
          visible: true,
          sprite: {
            texture: url,
            xScale: scale,
            yScale: scale,
          }
        }
      });
    });

    // Add some initial rotation to make it more interesting
    icons.forEach(icon => {
      Body.rotate(icon, Math.random() * Math.PI / 4);
      Body.setAngularVelocity(icon, (Math.random() - 0.5) * 0.02);
    });

    // Add icons in batches to prevent overwhelming the physics engine
    const addIconsInBatches = () => {
      const batchSize = 10;
      let currentIndex = 0;

      const addBatch = () => {
        const batch = icons.slice(currentIndex, currentIndex + batchSize);
        if (batch.length > 0) {
          Composite.add(engineRef.current.world, batch);
          currentIndex += batchSize;
          
          if (currentIndex < icons.length) {
            setTimeout(addBatch, 2000); // Space out the batches
          }
        }
      };

      Composite.add(engineRef.current.world, boundaries);
      addBatch();
    };

    addIconsInBatches();

    // Add mouse interaction
    const mouseConstraint = MouseConstraint.create(engineRef.current, {
      mouse: Mouse.create(render.canvas),
      constraint: {
        render: { visible: false },
        stiffness: 0.1,
        damping: 0.1,
      }
    });

    World.add(engineRef.current.world, mouseConstraint);
    render.mouse = mouseConstraint.mouse;

    // Start the physics simulation
    const runner = Runner.create();
    Runner.run(runner, engineRef.current);

    // Cleanup on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engineRef.current.world, true);
      Engine.clear(engineRef.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
}
