// Affichage d'une carte
import { useEffect, useRef } from "react";
import { carteRoyaume } from "../../data/carteRoyaume";
import { astar } from "../../algorithms/astar";
import "./Map.css"

function Canvas() 
{
  const ref = useRef<HTMLCanvasElement>(null);
  const startAnimationRef = useRef<(() => void) | null>(null);
  useEffect(() => {
    const resultat = astar(carteRoyaume);
    console.log("chemin A* :", resultat.chemin);

    const rawPath = resultat.chemin.map(id => carteRoyaume.lieux.find(l => l.id === id));

    const path = rawPath.filter(l => l !== undefined) as { x: number; y: number }[];

    
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
      const arrivee = carteRoyaume.lieux.find(l => l.type === "arrivee");

      if (depart) 
      {
        ctx.drawImage(
          playerImg,
          depart.x -35.45,
          depart.y - 105,
          79,
          128
        );
      }

      if (!depart || !arrivee) 
      {
        console.error("Départ ou arrivée introuvable !");
        return;
      }
      
      function animatePath(path: { x: number; y: number }[]) 
      {
        let index = 0;

        // Position initiale = premier point du chemin
        let playerX = path[0].x;
        let playerY = path[0].y;

        const speed = 1; // vitesse du glissement

        function step() 
        {
          if (index >= path.length - 1) return;

          const cible = path[index + 1];

          const dx = cible.x - playerX;
          const dy = cible.y - playerY;
          const dist = Math.hypot(dx, dy);

          if (dist < speed) 
          {
            // Arrivé au point suivant
            playerX = cible.x;
            playerY = cible.y;
            index++;
          } 
          else 
          {
            // Déplacement fluide
            playerX += (dx / dist) * speed;
            playerY += (dy / dist) * speed;
          }

          // Effacer le canvas
          ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

          // Redessiner la map
          ctx!.drawImage(img, 0, 0);

          // 🔥 Dessiner le trajet A*
          ctx!.beginPath();
          ctx!.strokeStyle = "yellow";   // couleur du trajet
          ctx!.lineWidth = 3;            // épaisseur de la ligne

          ctx!.moveTo(path[0].x, path[0].y);

          for (let i = 1; i < path.length; i++) {
            ctx!.lineTo(path[i].x, path[i].y);
          }

          ctx!.stroke();


          // Dessiner le joueur
          ctx!.drawImage(playerImg, playerX - 35, playerY - 105, 79, 128);

          requestAnimationFrame(step);
        }

        step();
      }

      startAnimationRef.current = () => animatePath(path);
    };
    
  }, []);

  return (
    <div className="map-wrapper">
      <canvas className="carte" ref={ref} />

      <button className="button" onClick={() => startAnimationRef.current?.()}>
        Depart
      </button>
    </div>
    );
}

export default Canvas