// src/data/markers.ts

import markerPosk from '../assets/markers/posk.png';
import markerDomBednarczykow from '../assets/markers/dom-bednarczykow.png';
import markerKrematorium from '../assets/markers/krematorium.png';
import markerDomPisarza from '../assets/markers/dom-pisarza.png';
import markerOficyna from '../assets/markers/oficyna-poetow-malarzy.png';
import markerTopolski from '../assets/markers/topolski-studio.png';
import markerAgenda from '../assets/markers/agenda.png';

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
    popup: 'Marker 1: London',
  },
  {
    id: 2,
    position: [51.592558278018046, -0.2507332700293828],
    icon: markerDomBednarczykow,
    iconSize: [60, 60], // Adjust size as needed
    iconAnchor: [30, 10], // Adjust anchor as needed
    popupAnchor: [1, -34],
    popup: 'Marker 2: Paris',
  },
  {
    id: 3,
    position: [51.60323021837815, -0.21210188933885665],
    icon: markerKrematorium,
    iconSize: [60, 60], // Adjust size as needed
    iconAnchor: [30, 10], // Adjust anchor as needed
    popupAnchor: [1, -34],
    popup: 'Marker 3: New York',
  },
  {
    id: 1,
    position: [51.556490254129386, -0.19422511504655884],
    icon: markerDomPisarza,
    iconSize: [60, 60], // Adjust size as needed
    iconAnchor: [30, 10], // Adjust anchor as needed
    popupAnchor: [1, -34],
    popup: 'Marker 1: London',
  },
  {
    id: 2,
    position: [51.504462979032674, -0.11467611426668353],
    icon: markerOficyna,
    iconSize: [60, 60], // Adjust size as needed
    iconAnchor: [30, 10], // Adjust anchor as needed
    popupAnchor: [1, -34],
    popup: `146 Bridge Arch Sutton Walk, SE1 7ND – POETS AND PAINTERS' PRESS / OFICYNA POETÓW I MALARZY  (1954–1991). The residence of the Bednarczyks’ Press; called often “Press under the Arcades” or “under the Bridge". /Siedziba  wydawnictwa Bednarczyków, zwanego często “Drukarnią pod arkadami” lub “Drukarnią pod mostem”. `,
  },
  {
    id: 3,
    position: [51.505140821601614, -0.11673971504813643],
    icon: markerTopolski,
    iconSize: [60, 60], // Adjust size as needed
    iconAnchor: [30, 10], // Adjust anchor as needed
    popupAnchor: [1, -34],
    popup: `Arch 158, Hungerford Arches, Belvedere Rd, SE1 8XX – TOPOLSKI STUDIO (1951–1989). The artist's studio, Feliks Topolski, a longtime friend and collaborator of the Bednarczyks. / Pracownia artysty, Feliksa Topolskiego, wieloletniego przyjaciela i współpracownika Bednarczyków.`,
  },
  {
    id: 3,
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