// src/data/markers.ts
import React from 'react'; // Add this import


import markerPosk from '/assets/markers/posk.png';
import markerDomBednarczykow from '/assets/markers/dom-bednarczykow.png';
import markerKrematorium from '/assets/markers/krematorium.png';
import markerDomPisarza from '/assets/markers/dom-pisarza.png';
import markerOficyna from '/assets/markers/oficyna-poetow-malarzy.png';
import markerTopolski from '/assets/markers/topolski-studio.png';
import markerAgenda from '/assets/markers/agenda.png';

// Import more marker icons as needed

import { MarkerData } from '../types/MarkerData';
import { createIcon } from '../utils/createIcon';


export const markers: MarkerData[] = [
    {
        id: 1,
        position: [51.49358748722099, -0.23736905922489726],
        icon: markerPosk,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: (
            <div>
            <h2>238-246 King St, W6 0RF</h2>
            <h1>THE POLISH SOCIAL AND CULTURAL ASSOCIATION</h1>
            <h4>
              the headquarters of the Union of Polish Writers Abroad,
              of which Krystyna Bednarczyk was the chair from 2005–2010.
            </h4>
            <br />
            <h1>POSK</h1>
            <h4>
              Związku Pisarzy Polskich na Obczyźnie, którego prezesem w latach
              2005–2010 była Krystyna Bednarczyk.
            </h4>
          </div>
      )  },
    {
        id: 2,
        position: [51.592558278018046, -0.2507332700293828],
        icon: markerDomBednarczykow,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `103 Colindeep Lane, NW9 6DD – BEDNARCZYKS’ HAUSE / DOM BEDNARCZYKÓW (1971–2011). Literary evenings were held there quite regularly. Meetings here included Czesław Miłosz, Zbigniew Herbert, Aleksander Wat, and Kazimierz Wierzyński. / Odbywały się w nim dość regularnie wieczory literackie. Mieli tutaj spotkania m.in. Miłosz, Herbert, Wat, Wierzyński.`,
    },
    {
        id: 3,
        position: [51.60323021837815, -0.21210188933885665],
        icon: markerKrematorium,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `Holders Hill Road, NW7 1NB – HENDON CREMATORIUM. The burial place of Krystyna and Czesław Bednarczyk. / Miejsce pochówku Krystyny i Czesława Bednarczyków.`,
    },
    {
        id: 4,
        position: [51.556490254129386, -0.19422511504655884],
        icon: markerDomPisarza,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `312 Finchley Road, NW3 7AG – WRITER'S HOUSE / DOM PISARZA. Owned by the Union of Polish Writers (1947–1971). For many years the headquarters of the Union. The following people lived there at various times Krystyna and Czesław Bednarczyk, Stanisław Gliwa, Gustaw Herling-Grudziński. The administrator of the house was the poet Tadeusz Sułkowski. / Własność ZPPnO (1947–1971). Przez wiele lat siedziba Związku. W różnych okresach mieszkali tam, m.in.: Bednarczykowie, Gliwa, Herling‑Grudziński. Administratorem domu był poeta Sułkowski. `,
    },
    {
        id: 5,
        position: [51.504462979032674, -0.11467611426668353],
        icon: markerOficyna,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `146 Bridge Arch Sutton Walk, SE1 7ND – POETS AND PAINTERS' PRESS / OFICYNA POETÓW I MALARZY  (1954–1991). The residence of the Bednarczyks’ Press; called often “Press under the Arcades” or “under the Bridge". /Siedziba  wydawnictwa Bednarczyków, zwanego często “Drukarnią pod arkadami” lub “Drukarnią pod mostem”. `,
    },
    {
        id: 6,
        position: [51.505140821601614, -0.11673971504813643],
        icon: markerTopolski,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `Arch 158, Hungerford Arches, Belvedere Rd, SE1 8XX – TOPOLSKI STUDIO (1951–1989). The artist's studio, Feliks Topolski, a longtime friend and collaborator of the Bednarczyks. / Pracownia artysty, Feliksa Topolskiego, wieloletniego przyjaciela i współpracownika Bednarczyków.`,
    },
    {
        id: 7,
        position: [51.480591751613595, -0.16651458078247539],
        icon: markerAgenda,
        iconSize: [60, 60], // Adjust size as needed
        iconAnchor: [30, 10], // Adjust anchor as needed
        popupAnchor: [1, -34],
        popup: `5 Cranbourne Court, Albert Bridge Road, SW11 4PE – “AGENDA” (1959-1991). The site of William Cookson's poetry magazine “AGENDA”, with which Bednarczyks 'Press' collaborates. / Siedziba redakcji anglojęzycznego pisma poetyckiego “AGENDA” redagowanego przez W. Cooksona, z którym “Oficyna” współpracowała.`,
    },
    // Add more markers as needed
];

// Create a map of marker IDs to their corresponding L.Icon instances
export const markerIcons = markers.reduce((acc, marker) => {
    acc[marker.id] = createIcon(marker.icon);
    return acc;
}, {} as Record<number, L.Icon>);