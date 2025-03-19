import React from 'react';
import styles from '../../styles/Contact.module.css';

const Map = ({ location }) => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${location.lat},${location.lng}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;