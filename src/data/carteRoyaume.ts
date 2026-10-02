// Création du graphe Royaume

import type { Royaume } from "../types/graphe"

export const carteRoyaume: Royaume = {
  lieux: [
    {
      id: "versaille",
      nom: "Versaille (château)",
      type: "depart",
      x: 1294,
      y: 345
    },
    {
      id: "dunequatre",
      nom: "Dunequatre",
      type: "passage",
      x: 1249,
      y: 101
    },
    {
      id: "kaizen",
      nom: "Kaizen",
      type: "passage",
      x: 1592,
      y: 186
    },
    {
      id: "antresmaug",
      nom: "L'antre de Smaug",
      type: "passage",
      x: 1877,
      y: 394
    },
    {
      id: "pafrais",
      nom: "Pafrais",
      type: "passage",
      x: 1304,
      y: 575
    },
    {
      id: "leauclear",
      nom: "Leauclear",
      type: "passage",
      x: 892,
      y: 556
    },
    {
      id: "plainespleines",
      nom: "Plainespleines",
      type: "passage",
      x: 1750,
      y: 734
    },
    {
      id: "evidence",
      nom: "Evidence",
      type: "passage",
      x: 1591,
      y: 847
    },
    {
      id: "incertitude",
      nom: "Incertitude",
      type: "passage",
      x: 1872,
      y: 966
    },
    {
      id: "gobl1",
      nom: "Gobl1",
      type: "passage",
      x: 1818,
      y: 1135
    },
    {
      id: "middle",
      nom: "Middle",
      type: "passage",
      x: 1369,
      y: 1006
    },
    {
      id: "poudlard",
      nom: "Poudlard",
      type: "passage",
      x: 1616,
      y: 1392
    },
    {
      id: "flagrance",
      nom: "Flagrance",
      type: "passage",
      x: 1209,
      y: 1190
    },
    {
      id: "improbable",
      nom: "Improbable",
      type: "passage",
      x: 1287,
      y: 1429
    },
    {
      id: "boisdur",
      nom: "Boisdur",
      type: "passage",
      x: 996,
      y: 1090
    },
    {
      id: "gobl2",
      nom: "Gobl2",
      type: "passage",
      x: 911,
      y: 1397
    },{
      id: "deepdark",
      nom: "Deep Dark (labyrinthe)",
      type: "arrivee",
      x: 495,
      y: 1291
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