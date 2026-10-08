// Affichage d'une carte
import { useEffect, useRef } from "react";
import { carteRoyaume } from "../../data/carteRoyaume";
import "./Map.css"

function Canvas() 
{
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Charger la map
    const img = new Image();
    img.src = "/assets/maps/Map_monde_Arthur.jpg"; // image dans public/
    // img.src = "/assets/maps/Map_dongeon_Grotte.jpg"; // image dans public/

    // Charger le personnage
    const playerImg = new Image();
    playerImg.src = "/assets/characters/Arthurine.png";

    img.onload = () => {
      // Ajuster le canvas à la taille de la map
      canvas.width = img.width;
      canvas.height = img.height;

      // Dessiner la map
      ctx.drawImage(img, 0, 0);

      // Dessiner le player
      const depart = carteRoyaume.lieux.find(lieu => lieu.type === "depart");
      if (depart) {
        ctx.drawImage(
          playerImg,
          depart.x -35.45,
          depart.y - 105,
          79,
          128
        );
      }

      carteRoyaume.lieux.forEach(lieu => {
        ctx.fillStyle =
        lieu.type === "depart" ? "green" :
        lieu.type === "arrivee" ? "red" :
        "yellow";

        ctx.beginPath();
        ctx.arc(lieu.x, lieu.y, 8, 0, Math.PI * 2);
        ctx.fill();
      });

    };
    
  }, []);
  
    // Plus tard : animatePlayer()

  return (
    <div className="map-wrapper">
        <canvas className="carte" ref={ref} />
    </div>
    );
}

export default Canvas