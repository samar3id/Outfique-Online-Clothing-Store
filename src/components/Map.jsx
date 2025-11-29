import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const Map = () => {
  const shopLat = 29.8414; 
  const shopLon = 31.3342;  

  return (
    <div className="map-section">
      <h2 className="text-center mb-4">Find Us</h2>
      <MapContainer center={[shopLat, shopLon]} zoom={15} scrollWheelZoom={true} id="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[shopLat, shopLon]} icon={customIcon}>
          <Popup>Our Shop Location</Popup>
        </Marker>
      </MapContainer>
      <p className="text-center mt-3">
        Visit our store in Helwan, Cairo, Egypt. The marker shows the exact location.
      </p>
    </div>
  );
};

export default Map;
