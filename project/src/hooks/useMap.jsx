import { useState, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, mapValue) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {

      const mapTemplate = leaflet.map(mapRef.current, {
        center: mapValue.cityCoordinates,
        zoom: mapValue.zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }).addTo(mapTemplate);

      setMap(mapTemplate);
    }
  }, [mapRef, map, mapValue]);

  return map;
}

export default useMap;
