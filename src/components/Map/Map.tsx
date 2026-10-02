// Affichage d'une carte
import { useEffect, useRef } from "react";

function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Plus tard : drawMap(ctx)
    // Plus tard : drawGraph(ctx)
    // Plus tard : drawPlayer(ctx)
    // Plus tard : animatePlayer()

  }, []);

  return <canvas ref={ref} width={2048} height={1536} />;
}

export default Canvas