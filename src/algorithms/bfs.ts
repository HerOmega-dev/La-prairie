// Parcours en largeur
import { carteLabyrinthe } from "../data/carteLabyrinthe"
import type { Case, Labyrinthe } from "../types/graphe"
import {
  getVoisinsLabyrinthe,
  type Position
} from "../utils/voisinsLabyrinthe"

export type ResultatBFS = {
  trouve: boolean
  chemin: Position[]
  visites: Position[]
}

export function bfs(
  labyrinthe: Labyrinthe,
): ResultatBFS {
     // Recherche du départ et de l'arrivée dans la grille
  const depart = trouverCase(labyrinthe, 2)
  const arrivee = trouverCase(labyrinthe, 3)

  // Vérification
  if (!depart || !arrivee) {
    return {
      trouve: false,
      chemin: [],
      visites: []
    }
  }

  // File des cases à explorer
  const file: Position[] = [depart]

  // Cases déjà visitées
  const visites: Position[] = []

  // Permettra de reconstruire le chemin
  const parents = new Map<string, Position>()

  while (file.length > 0) {

    // On récupère la première case de la file
    const actuelle = file.shift()

    if (!actuelle) {
      break
    }

    // On vérifie si cette case a déjà été visitée
    const dejaVisitee = visites.some(
      position =>
        position.x === actuelle.x &&
        position.y === actuelle.y
    )

    if (dejaVisitee) {
      continue
    }

    // On marque la case comme visitée
    visites.push(actuelle)

    // Est-ce qu'on est arrivé ?
    if (
      actuelle.x === arrivee.x &&
      actuelle.y === arrivee.y
    ) {
      const chemin = reconstruireChemin(
        parents,
        depart,
        arrivee
      )

      return {
        trouve: true,
        chemin,
        visites
      }
    }

    // On récupère les voisins accessibles
    const voisins = getVoisinsLabyrinthe(
      labyrinthe,
      actuelle.x,
      actuelle.y
    )

    for (const voisin of voisins) {

      const dejaVisite = visites.some(
        position =>
          position.x === voisin.x &&
          position.y === voisin.y
      )

      const dejaDansFile = file.some(
        position =>
          position.x === voisin.x &&
          position.y === voisin.y
      )

      if (!dejaVisite && !dejaDansFile) {

        // On mémorise d'où vient cette case
        parents.set(
          `${voisin.x},${voisin.y}`,
          actuelle
        )

        // On ajoute le voisin à la fin de la file
        file.push(voisin)
      }
    }
  }

  // La file est vide : aucune solution
  return {
    trouve: false,
    chemin: [],
    visites
  }
}

function trouverCase(
  labyrinthe: Labyrinthe,
  type: Case
): Position | null {

  for (let y = 0; y < labyrinthe.hauteur; y++) {

    for (let x = 0; x < labyrinthe.largeur; x++) {

      if (labyrinthe.cases[y][x] === type) {
        return { x, y }
      }
    }
  }

  return null
}


function reconstruireChemin(
  parents: Map<string, Position>,
  depart: Position,
  arrivee: Position
): Position[] {

  const chemin: Position[] = []

  let actuelle = arrivee

  chemin.push(actuelle)

  while (
    actuelle.x !== depart.x ||
    actuelle.y !== depart.y
  ) {
    const parent = parents.get(
      `${actuelle.x},${actuelle.y}`
    )

    if (!parent) {
      return []
    }

    actuelle = parent
    chemin.push(actuelle)
  }

  // Pour obtenir départ → arrivée
  chemin.reverse()

  return chemin
}

const resultat = bfs(
  carteLabyrinthe,
)

console.log("Trouvé :", resultat.trouve)
console.log("Chemin :", resultat.chemin)
console.log("Nombre de déplacements :", resultat.chemin.length - 1)
console.log("Cases visitées :", resultat.visites.length)