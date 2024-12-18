import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './App.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import { markersWithIcons } from './data/markersWithIcons';

delete (L.Icon.Default.prototype as any)._getIconUrl;



L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const App: React.FC = () => {
  const position: [number, number] = [51.53564440121904, -0.21102823597520384];
  const [geoData, setGeoData] = useState<any>(null);

  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  useEffect(() => {
    fetch('/route.geojson')
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error('Error loading GeoJSON:', error));
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <h1>UNVEILING THE HERITAGE:
          KRYSTYNA BEDNARCZYK
          (1923–2011)</h1>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>
     

      {/* Map Frame */}
      <div className="map-frame">
        <MapContainer
          center={position}
          zoom={12.5}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
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
                color: '#BD60A5',
                weight: 10,
                opacity: 0.8,
              }}
            />
          )}
        </MapContainer>
      </div>

      {/* Footer Section */}
      <footer className="app-footer">
        <div className="footer-logos">
          <img src="/assets/logo/logo_heritage_fund.png" alt="Logo 1" className="logo-primary" />
          <div className="footer-logos-row">
            <img src="/assets/logo/logo_oficyna_biale.png" alt="Logo 2" />
            <img src="/assets/logo/logo_ZPPnO_London.png" alt="Logo 3" />
          </div>
        </div>
        <p>&copy; 2023 BLUE POINT ART (NOT FOR PROFIT) LTD. All rights reserved.</p>

        {/* Footer links <nav className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#support">Support</a>
        </nav> */}

      </footer>


    </div>
  );
};

export default App;
