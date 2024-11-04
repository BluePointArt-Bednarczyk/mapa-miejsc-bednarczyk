// src/utils/createCustomIcon.ts

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import shadow image
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

interface IconOptions {
    iconUrl: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
    popupAnchor?: [number, number];
}

export const createCustomIcon = ({
    iconUrl,
    iconSize = [60, 60],
    iconAnchor = [30, 10],
    popupAnchor = [1, -34],
}: IconOptions): L.Icon => {
    return new L.Icon({
        iconUrl,
        iconRetinaUrl: iconUrl, // Assuming retina version is the same; modify if different
        iconSize,
        iconAnchor,
        popupAnchor,
        shadowUrl: markerShadow,
        shadowSize: [60, 60],
    });
};
