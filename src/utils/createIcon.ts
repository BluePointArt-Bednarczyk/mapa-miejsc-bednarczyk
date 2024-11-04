// src/utils/createIcon.ts

import L from 'leaflet';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


export const createIcon = (iconUrl: string) => {
  return new L.Icon({
    iconUrl,
    iconSize: [25, 41], // Default size, adjust as needed
    iconAnchor: [12, 41], // Point of the icon which corresponds to marker's location
    popupAnchor: [1, -34],
    shadowUrl: markerShadow,
    shadowSize: [41, 41],
  });
};
