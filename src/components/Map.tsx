import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { MapPin } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // BUGnBULL office coordinates (Jaipur, Rajasthan)
  const officeLocation = {
    lng: 75.762,
    lat: 26.893,
    address: "Vishvakarma Colony, 1-B, Kalwar Rd, near Jhotwara Road, Krishna Colony, Jhotwara, Jaipur, Rajasthan 302012, India"
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        zoom: 15,
        center: [officeLocation.lng, officeLocation.lat],
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for office location
      const marker = new mapboxgl.Marker({ color: '#3B82F6' })
        .setLngLat([officeLocation.lng, officeLocation.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2">
              <h3 class="font-bold text-sm mb-1">BUGnBULL</h3>
              <p class="text-xs text-gray-600">${officeLocation.address}</p>
            </div>`
          )
        )
        .addTo(map.current);

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeLocation.address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="w-full">
      {!isMapLoaded && (
        <Card className="glass-card p-6 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Enter Mapbox Token</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            To display the interactive map, please enter your Mapbox public token. 
            Get one free at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGl..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={initializeMap}
              disabled={!mapboxToken.trim()}
            >
              Load Map
            </Button>
          </div>
        </Card>
      )}

      <div className="relative">
        <div 
          ref={mapContainer} 
          className={`w-full h-96 rounded-lg shadow-lg ${!isMapLoaded ? 'hidden' : ''}`}
        />
        
        {!isMapLoaded && (
          <div className="w-full h-96 bg-muted/30 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
              <p className="text-muted-foreground mb-4">
                Enter your Mapbox token above to view our office location
              </p>
            </div>
          </div>
        )}

        {isMapLoaded && (
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="glass-card p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm mb-1">BUGnBULL Office</h4>
                  <p className="text-muted-foreground text-xs">
                    Jhotwara, Jaipur, Rajasthan
                  </p>
                </div>
                <Button 
                  variant="gradient" 
                  size="sm"
                  onClick={handleGetDirections}
                >
                  Get Directions
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;