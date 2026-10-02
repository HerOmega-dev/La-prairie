// Affichage d'une carte
import { useEffect, useRef } from "react";
import { carteRoyaume } from "../../data/carteRoyaume";

function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Charger la map
    const img = new Image();
    img.src = "/assets/maps/Map_monde_Arthur.jpg"; // image dans public/

    img.onload = () => {
      // Ajuster le canvas à la taille de la map
      canvas.width = img.width;
      canvas.height = img.height;

      // Dessiner la map
      ctx.drawImage(img, 0, 0);
      
      // Dessiner les lieux
        carteRoyaume.lieux.forEach(lieu => {
        ctx.fillStyle =
          lieu.type === "depart" ? "green" :
          lieu.type === "arrivee" ? "red" :
          "yellow";

        ctx.beginPath();
        ctx.arc(lieu.x, lieu.y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Nom du lieu
        ctx.fillStyle = "white";
        ctx.font = "14px Arial";
        ctx.fillText(lieu.nom, lieu.x + 12, lieu.y - 12);
      });
    };
  }, []);
    // Plus tard : drawMap(ctx)
    // Plus tard : drawGraph(ctx)
    // Plus tard : drawPlayer(ctx)
    // Plus tard : animatePlayer()

  return <canvas ref={ref} width={2048} height={1536} />;
}

export default Canvas