// Définir les éléments représentant les graphes

export type Lieu = {
  id: string
  nom: string
  type: "depart" | "passage" | "arrivee"
  x: number
  y: number
}

export type Chemin = {
  depart: string
  arrivee: string
  poids: number
}

export type Royaume = {
  lieux: Lieu[]
  chemins: Chemin[]
}

export type Case = 0 | 1 | 2 | 3 //"M" | "C" | "D" | "A"
  // 0 = M = mur, 1 = C = chemin, 2 = D = départ, 3 = A = arrivée

export type Labyrinthe = {
  largeur: number
  hauteur: number
  cases: Case[][]
  //Case[] = un tableau d'une ligne
  //Case[y][x] = un tableau de plusieurs lignes,
  // x: le tableau ligne, y: les index colonnes dans les tableaux
  // [
  //  [1, 2, 3],
  //  [4, 5, 6]
  //]
}