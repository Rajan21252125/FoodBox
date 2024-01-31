import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({latitude:19.3061063,longitude:72.8629943});

  useEffect(() => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude:latitude, longitude:longitude });
    };

    const error = () => {
      console.error('Geolocation error');
      // Handle error if needed
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      // If geolocation is not supported, provide a default location
      setLocation({ latitude: 19.3061063, longitude: 72.8629943 });
    }
  }, []); // Empty dependency array ensures that this effect runs once on component mount

  // Log the location when it changes
  useEffect(() => {
    console.log(location);
  }, [location]);

  return location;
};

export default useCurrentLocation;
