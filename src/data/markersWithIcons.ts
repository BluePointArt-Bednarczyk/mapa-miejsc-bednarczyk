// src/data/markersWithIcons.ts

import { markers } from './markers';
import { createCustomIcon } from '../utils/createCustomIcon';

export const markersWithIcons = markers.map((marker) => ({
  ...marker,
  customIcon: createCustomIcon({
    iconUrl: marker.icon,
    iconSize: marker.iconSize,
    iconAnchor: marker.iconAnchor,
    popupAnchor: marker.popupAnchor,
  }),
}));
