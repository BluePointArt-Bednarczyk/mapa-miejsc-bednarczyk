import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, MapContainerProps, Marker, Popup, GeoJSON } from 'react-leaflet';
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

  const position: [number, number] = [51.49354740842114, -0.2372724997073291];

  const [geoData, setGeoData] = useState<any>(null);

  // Fetch the GeoJSON data from the public folder
  useEffect(() => {
    fetch('src/data/mydata.geojson') // Path to your external GeoJSON file
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => setGeoData(data))     // Set the data in state
      .catch((error) => console.error('Error loading GeoJSON:', error)); // Handle errors
  }, []);

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

        {geoData && (
          <GeoJSON
            data={geoData}
            style={{
              color: '#BD60A5',   // Line color set to #BD60A5
              weight: 8,           // Line thickness
              opacity: 0.5         // Line opacity
            }}
          />
        )}

      </MapContainer>
    </div>
  );
};

export default App;
