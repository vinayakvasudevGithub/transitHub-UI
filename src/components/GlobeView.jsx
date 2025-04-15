import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import { FiX, FiMapPin, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const GlobeView = ({ onSelectCity, onClose }) => {
  const globeEl = useRef();
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isRotating, setIsRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Premium destination data
  const destinations = [
    // {
    //   city: "Paris",
    //   country: "France",
    //   lat: 48.8566,
    //   lng: 2.3522,
    //   color: "#FFD700",
    //   flights: 128,
    //   hotels: 92,
    // },
    // {
    //   city: "Tokyo",
    //   country: "Japan",
    //   lat: 35.6762,
    //   lng: 139.6503,
    //   color: "#FF6B6B",
    //   flights: 85,
    //   hotels: 76,
    // },
    // {
    //   city: "New York",
    //   country: "USA",
    //   lat: 40.7128,
    //   lng: -74.006,
    //   color: "#48DBFB",
    //   flights: 210,
    //   hotels: 145,
    // },
    {
      city: "Dubai",
      country: "UAE",
      lat: 25.2048,
      lng: 55.2708,
      color: "#FFA502",
      flights: 176,
      hotels: 118,
    },
    // {
    //   city: "Sydney",
    //   country: "Australia",
    //   lat: -33.8688,
    //   lng: 151.2093,
    //   color: "#7BED9F",
    //   flights: 62,
    //   hotels: 54,
    // },
  ];

  // Generate dynamic flight paths
  const arcs = destinations.map((dest) => ({
    startLat: 37.7749, // Default from San Francisco
    startLng: -122.4194,
    endLat: dest.lat,
    endLng: dest.lng,
    color: [dest.color, "#FFFFFF"],
    flightTime: Math.floor(Math.random() * 8) + 4, // 4-12 hrs
  }));

  useEffect(() => {
    if (!globeEl.current) return;

    // Configure globe
    const globe = globeEl.current;
    globe.controls().enableZoom = true;
    globe.controls().autoRotate = isRotating;
    globe.controls().autoRotateSpeed = 0.8;

    // Advanced material
    globe.scene().children[0].children.forEach((obj) => {
      if (obj.type === "Mesh") {
        obj.material = new THREE.MeshPhongMaterial({
          //   color: new THREE.Color("#1E3A8A"),
          color: new THREE.Color("#1E3A8A"),
          emissive: new THREE.Color("#1E40AF"),
          emissiveIntensity: 0.2,
          specular: new THREE.Color("lightblue"),
          shininess: 15,
          bumpScale: 0.05,
          transparent: true,
          opacity: 0.9,
        });
      }
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    globe.scene().add(ambientLight, directionalLight);

    // Pulse animation for selected point
    if (selectedPoint) {
      const pulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 32, 32),
        new THREE.MeshBasicMaterial({
          color: selectedPoint.color,
          transparent: true,
          opacity: 0.5,
        })
      );
      pulse.position.set(
        ...globe.getCoords(selectedPoint.lat, selectedPoint.lng, 0.01)
      );
      globe.scene().add(pulse);

      // Animate
      let scale = 1;
      const animatePulse = () => {
        scale += 0.02;
        pulse.scale.set(scale, scale, scale);
        pulse.material.opacity = 0.5 * (1 - scale / 3);
        if (scale < 3) requestAnimationFrame(animatePulse);
        else globe.scene().remove(pulse);
      };
      animatePulse();
    }

    return () => {
      globe.scene().remove(ambientLight, directionalLight);
    };
  }, [selectedPoint, isRotating]);

  const handlePointClick = (point) => {
    setSelectedPoint(point);
    globeEl.current.pointOfView(
      { lat: point.lat, lng: point.lng, altitude: 1.5 },
      1000
    );
  };

  return (
    <div className="relative w-full h-full">
      {/* Interactive Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
        >
          {isRotating ? "⏸️" : "▶️"}
        </button>
        <button
          onClick={onClose}
          className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <FiX />
        </button>
      </div>

      {/* Zoom Controls */}
      <div className=" absolute bottom-20 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.2))}
          className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
        >
          +
        </button>
        <button
          onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.2))}
          className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
        >
          -
        </button>
      </div>

      {/* 3D Globe */}
      <Globe
        ref={globeEl}
        width={800}
        height={600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        animateIn={false}
        zoom={zoomLevel}
        pointsData={destinations}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius={0.08}
        pointAltitude={0.02}
        pointsMerge={true}
        onPointClick={handlePointClick}
        arcsData={arcs}
        arcColor="color"
        arcDashLength={0.3}
        arcDashGap={0.2}
        arcDashAnimateTime={3000}
        arcStroke={0.5}
      />

      {/* City Details Panel */}
      <AnimatePresence>
        {selectedPoint && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs"
          >
            <div className="flex items-start gap-3">
              <div
                className="p-2 rounded-full"
                style={{ backgroundColor: `${selectedPoint.color}20` }}
              >
                <FiMapPin style={{ color: selectedPoint.color }} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{selectedPoint.city}</h3>
                <p className="text-gray-600">{selectedPoint.country}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span>✈️ {selectedPoint.flights} flights</span>
                  <span>🏨 {selectedPoint.hotels} hotels</span>
                </div>
                <button
                  onClick={() => {
                    onSelectCity(selectedPoint.city);
                    onClose();
                  }}
                  className="mt-3 flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View travel options <FiChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Watermark */}
      <div className="absolute bottom-2 right-2 text-xs text-white/50">
        Powered by Three.js
      </div>
    </div>
  );
};

export default React.memo(GlobeView);
