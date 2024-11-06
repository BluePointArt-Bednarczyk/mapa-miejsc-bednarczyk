// cleanGeoJSON.js

import fs from 'fs';

// Define the paths to your input and output GeoJSON files
const inputPath = './src/data/route.geojson';       // Path to your original GeoJSON file
const outputPath = './src/data/cleanRoute.geojson'; // Path to save the cleaned GeoJSON

// Function to clean the GeoJSON data
const cleanGeoJSON = (inputFile, outputFile) => {
  try {
    // Read the original GeoJSON file
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const data = JSON.parse(rawData);

    const cleanedFeatures = [];

    // Check if the GeoJSON is a FeatureCollection
    if (data.type === 'FeatureCollection' && Array.isArray(data.features)) {
      data.features.forEach((feature) => {
        // Process only LineString geometries (routes)
        if (feature.geometry && feature.geometry.type === 'LineString') {
          // Remove elevation (third coordinate) if present
          const cleanedCoordinates = feature.geometry.coordinates.map((coord) => {
            // Ensure the coordinate has at least two elements
            if (Array.isArray(coord) && coord.length >= 2) {
              return [coord[0], coord[1]];
            } else {
              console.warn('Invalid coordinate encountered:', coord);
              return coord;
            }
          });

          // Update the geometry with cleaned coordinates
          feature.geometry.coordinates = cleanedCoordinates;

          // Optionally, clean or retain specific properties
          // For example, retain only the 'name' property
          const { properties } = feature;
          feature.properties = {
            name: properties.name || 'Route', // Default name if not provided
            // Add other properties you want to keep here
          };

          // Add the cleaned feature to the array
          cleanedFeatures.push(feature);
        }
      });
    }
    // Handle cases where the root type is LineString (not a FeatureCollection)
    else if (data.type === 'LineString') {
      const cleanedCoordinates = data.coordinates.map((coord) => {
        if (Array.isArray(coord) && coord.length >= 2) {
          return [coord[0], coord[1]];
        } else {
          console.warn('Invalid coordinate encountered:', coord);
          return coord;
        }
      });

      const cleanedFeature = {
        type: 'Feature',
        properties: {
          name: 'Route', // Default name
          // Add other properties as needed
        },
        geometry: {
          type: 'LineString',
          coordinates: cleanedCoordinates,
        },
      };

      cleanedFeatures.push(cleanedFeature);
    } else {
      console.error('Unsupported GeoJSON structure. Expected FeatureCollection or LineString.');
      process.exit(1);
    }

    // Construct the cleaned GeoJSON FeatureCollection
    const cleanedGeoJSON = {
      type: 'FeatureCollection',
      features: cleanedFeatures,
    };

    // Write the cleaned GeoJSON to the output file with pretty formatting
    fs.writeFileSync(outputFile, JSON.stringify(cleanedGeoJSON, null, 2), 'utf8');

    console.log('✅ GeoJSON file cleaned and saved successfully at:', outputFile);
  } catch (error) {
    console.error('❌ Error processing GeoJSON file:', error);
    process.exit(1);
  }
};

// Execute the cleaning function
cleanGeoJSON(inputPath, outputPath);
