// Création du graphe Royaume

import type { Royaume } from "../types/graphe"

export const carteRoyaume: Royaume = {
  lieux: [
    {
      id: "versaille",
      nom: "Versaille (château)",
      type: "depart",
      x: 0,
      y: 0
    },
    {
      id: "dunequatre",
      nom: "Dunequatre",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "kaizen",
      nom: "Kaizen",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "antresmaug",
      nom: "L'antre de Smaug",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "pafrais",
      nom: "Pafrais",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "leauclear",
      nom: "Leauclear",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "plainespleines",
      nom: "Plainespleines",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "evidence",
      nom: "Evidence",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "incertitude",
      nom: "Incertitude",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "gobl1",
      nom: "Gobl1",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "middle",
      nom: "Middle",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "poudlard",
      nom: "Poudlard",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "flagrance",
      nom: "Flagrance",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "improbable",
      nom: "Improbable",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "boisdur",
      nom: "Boisdur",
      type: "passage",
      x: 0,
      y: 0
    },
    {
      id: "gobl2",
      nom: "Gobl2",
      type: "passage",
      x: 0,
      y: 0
    },{
      id: "deepdark",
      nom: "Deep Dark (labyrinthe)",
      type: "arrivee",
      x: 0,
      y: 0
    },
  ],

  chemins: [
    {
      depart: "versaille",
      arrivee: "dunequatre",
      poids: 1
    },
    {
      depart: "versaille",
      arrivee: "kaizen",
      poids: 1
    },
    {
      depart: "versaille",
      arrivee: "pafrais",
      poids: 1
    },
    {
      depart: "kaizen",
      arrivee: "antresmaug",
      poids: 1
    },
    {
      depart: "antresmaug",
      arrivee: "plainespleines",
      poids: 1
    },
    {
      depart: "pafrais",
      arrivee: "leauclear",
      poids: 1
    },
    {
      depart: "pafrais",
      arrivee: "plainespleines",
      poids: 1
    },
    {
      depart: "pafrais",
      arrivee: "evidence",
      poids: 1
    },
    {
      depart: "plainespleines",
      arrivee: "evidence",
      poids: 1
    },
    {
      depart: "plainespleines",
      arrivee: "incertitude",
      poids: 1
    },
    {
      depart: "incertitude",
      arrivee: "gobl1",
      poids: 1
    },
    {
      depart: "evidence",
      arrivee: "gobl1",
      poids: 1
    },
    {
      depart: "evidence",
      arrivee: "middle",
      poids: 1
    },
    {
      depart: "middle",
      arrivee: "flagrance",
      poids: 1
    },
    {
      depart: "middle",
      arrivee: "poudlard",
      poids: 1
    },
    {
      depart: "poudlard",
      arrivee: "improbable",
      poids: 1
    },
    {
      depart: "improbable",
      arrivee: "gobl2",
      poids: 1
    },
    {
      depart: "flagrance",
      arrivee: "gobl2",
      poids: 1
    },
    {
      depart: "flagrance",
      arrivee: "boisdur",
      poids: 1
    },
    {
      depart: "leauclear",
      arrivee: "boisdur",
      poids: 1
    },
    {
      depart: "boisdur",
      arrivee: "gobl2",
      poids: 1
    },
    {
      depart: "boisdur",
      arrivee: "deepdark",
      poids: 1
    },
    {
      depart: "gobl2",
      arrivee: "deepdark",
      poids: 1
    },
  ]
}