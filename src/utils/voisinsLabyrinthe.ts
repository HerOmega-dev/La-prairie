import { carteLabyrinthe } from "../data/carteLabyrinthe"
import type { Labyrinthe } from "../types/graphe"

export type Position = {
  x: number
  y: number
}

export function getVoisinsLabyrinthe(
  labyrinthe: Labyrinthe,
  x: number,
  y: number
): Position[] {

  const voisins: Position[] = []

  // Haut
  if (
    y - 1 >= 0 &&
    labyrinthe.cases[y - 1][x] !== 0
  ) {
    voisins.push({ x: x, y: y - 1 })
  }

  // Bas
  if (
    y + 1 < labyrinthe.hauteur &&
    labyrinthe.cases[y + 1][x] !== 0
  ) {
    voisins.push({ x: x, y: y + 1 })
  }

  // Gauche
  if (
    x - 1 >= 0 &&
    labyrinthe.cases[y][x - 1] !== 0
  ) {
    voisins.push({ x: x - 1, y: y })
  }

  // Droite
  if (
    x + 1 < labyrinthe.largeur &&
    labyrinthe.cases[y][x + 1] !== 0
  ) {
    voisins.push({ x: x + 1, y: y })
  }

  return voisins
}

console.log(getVoisinsLabyrinthe(carteLabyrinthe, 18, 4))