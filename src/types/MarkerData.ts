export interface MarkerData {
    id: number; // Unique identifier
    position: [number, number]; // [latitude, longitude]
    icon: string; // Path to the marker image
    iconSize?: [number, number]; // Adjust size as needed
    iconAnchor?: [number, number]; // Adjust anchor as needed
    popupAnchor?: [number, number];
    popup?: React.ReactNode;
}