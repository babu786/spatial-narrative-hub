import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Navigation } from 'lucide-react';

const GoogleMap = () => {
  // BUGnBULL office location
  const officeAddress = "Vishvakarma Colony, 1-B, Kalwar Rd, near Jhotwara Road, Krishna Colony, Jhotwara, Jaipur, Rajasthan 302012, India";
  
  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddress)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleViewOnMaps = () => {
    window.open('https://maps.app.goo.gl/VKUqgqzXtsZfF5Gn6', '_blank');
  };

  return (
    <div className="w-full">
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8140724721423!2d75.7598113!3d26.8930000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c6e1234567%3A0x1234567890abcdef!2sBUGnBULL!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
          title="BUGnBULL Office Location"
        />
        
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="glass-card p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-sm">BUGnBULL Office</h4>
                </div>
                <p className="text-muted-foreground text-xs">
                  Jhotwara, Jaipur, Rajasthan 302012
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleViewOnMaps}
                  className="flex-1 sm:flex-none"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button 
                  variant="gradient" 
                  size="sm"
                  onClick={handleGetDirections}
                  className="flex-1 sm:flex-none"
                >
                  <Navigation className="w-4 h-4 mr-1" />
                  Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;