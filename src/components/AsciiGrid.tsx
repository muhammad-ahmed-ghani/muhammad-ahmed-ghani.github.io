import React, { useEffect, useRef } from 'react';

// Characters to use in the grid — mix of binary, hex, symbols, block chars
const CHARS = '01アイウエカキ![]{}|/<>+=-_01ABCDEF01░▒▓01▪■□01<>{}[]01';

interface Cell {
  char: string;
  opacity: number;
  targetOpacity: number;
  cyan: boolean;
  cyanPulse: number;
}

interface Props {
  className?: string;
}

const AsciiGrid: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const CELL = 30; // px per grid cell
    let cols = 0;
    let rows = 0;
    let cells: Cell[] = [];

    const buildGrid = () => {
      cols = Math.ceil(canvas.offsetWidth / CELL) + 1;
      rows = Math.ceil(canvas.offsetHeight / CELL) + 1;
      cells = Array.from({ length: rows * cols }, () => ({
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        opacity: Math.random() * 0.055,
        targetOpacity: Math.random() * 0.055,
        cyan: Math.random() < 0.04,
        cyanPulse: 0,
      }));
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const FONT_SIZE = Math.floor(CELL * 0.52);
    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      cells.forEach((cell, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);

        // Slowly drift target opacity
        if (Math.random() < 0.003) {
          cell.targetOpacity = Math.random() * 0.07;
        }
        cell.opacity += (cell.targetOpacity - cell.opacity) * 0.025;

        // Occasionally swap char
        if (Math.random() < 0.002) {
          cell.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Cyan pulse cycle
        if (cell.cyan) {
          cell.cyanPulse = (cell.cyanPulse + 0.02) % (Math.PI * 2);
          const pulse = (Math.sin(cell.cyanPulse) * 0.5 + 0.5) * 0.12;
          ctx.globalAlpha = Math.max(cell.opacity, pulse);
          ctx.fillStyle = '#00C4FF';
        } else {
          ctx.globalAlpha = cell.opacity;
          ctx.fillStyle = '#ffffff';
        }

        ctx.fillText(
          cell.char,
          col * CELL + CELL * 0.1,
          row * CELL + CELL * 0.78
        );
      });

      frame++;
      // Throttle to ~20 fps to preserve GPU budget for Three.js
      animId = window.setTimeout(() => requestAnimationFrame(draw), 50);
    };

    draw();

    return () => {
      clearTimeout(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.65,
      }}
    />
  );
};

export default AsciiGrid;
