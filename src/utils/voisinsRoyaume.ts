import type { Royaume } from "../types/graphe"

export function getVoisinsRoyaume(
  royaume: Royaume,
  idLieu: string
): string[] {

  const voisins: string[] = []

  for (const chemin of royaume.chemins) {

    if (chemin.depart === idLieu) {
      voisins.push(chemin.arrivee)
    }

    if (chemin.arrivee === idLieu) {
      voisins.push(chemin.depart)
    }
  }

  return voisins
}