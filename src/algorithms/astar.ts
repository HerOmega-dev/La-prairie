import { carteRoyaume } from "../data/carteRoyaume";
import type { Royaume } from "../types/graphe";

export function astar(carte: Royaume) {
  const depart = carte.lieux.find(l => l.type === "depart");
  const arrivee = carte.lieux.find(l => l.type === "arrivee");

  if (!depart || !arrivee) {
    return { trouve: false, chemin: [], visites: [] };
  }

  const open = [depart.id];
  const visites: string[] = [];
  const parents = new Map<string, string>();

  while (open.length > 0) {
    open.sort((a, b) => {
      const A = carte.lieux.find(l => l.id === a)!;
      const B = carte.lieux.find(l => l.id === b)!;
      return heuristique(A, arrivee) - heuristique(B, arrivee);
    });

    const actuelle = open.shift()!;
    visites.push(actuelle);

    if (actuelle === arrivee.id) {
      return {
        trouve: true,
        chemin: reconstruireChemin(parents, depart.id, arrivee.id),
        visites
      };
    }

    const voisins = carte.chemins
      .filter(c => c.depart === actuelle || c.arrivee === actuelle)
      .map(c => c.depart === actuelle ? c.arrivee : c.depart);

    for (const voisin of voisins) {
      if (!visites.includes(voisin) && !open.includes(voisin)) {
        parents.set(voisin, actuelle);
        open.push(voisin);
      }
    }
  }

  return { trouve: false, chemin: [], visites };
}

function heuristique(a: any, b: any) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function reconstruireChemin(parents: Map<string, string>, depart: string, arrivee: string) {
  const chemin = [];
  let actuelle = arrivee;

  while (actuelle !== depart) {
    chemin.push(actuelle);
    actuelle = parents.get(actuelle)!;
  }

  chemin.push(depart);
  chemin.reverse();
  return chemin;
}

console.log(astar(carteRoyaume));