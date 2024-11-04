import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS first
import './App.css'; // Then your custom CSS


import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { markersWithIcons } from './data/markersWithIcons';


// Default icon fix for markersmmm
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const App: React.FC = () => {
  const position: [number, number] = [51.49354740842114, -0.2372724997073291];//51.49354740842114, -0.2372724997073291

  return (
    <div className="App" style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap
          </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markersWithIcons.map((marker) => (
          <Marker key={marker.id} position={marker.position} icon={marker.customIcon}>
            {marker.popup && <Popup>{marker.popup}</Popup>}
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
};

export default App;
