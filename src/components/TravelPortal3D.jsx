// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { FiCompass, FiX, FiChevronRight } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const TravelPortal3D = () => {
//   const mountRef = useRef(null);
//   const [activeTransport, setActiveTransport] = useState(null);
//   const [sceneReady, setSceneReady] = useState(false);

//   // Transport models configuration
//   const transports = {
//     flight: {
//       title: "Flights",
//       icon: "✈️",
//       color: "#3B82F6",
//       modelUrl: "/models/airplane.glb",
//       scale: [0.5, 0.5, 0.5],
//     },
//     bus: {
//       title: "Buses",
//       icon: "🚌",
//       color: "#10B981",
//       modelUrl: "/models/bus.glb",
//       scale: [0.8, 0.8, 0.8],
//     },
//     train: {
//       title: "Trains",
//       icon: "🚆",
//       color: "#F59E0B",
//       modelUrl: "/models/train.glb",
//       scale: [0.6, 0.6, 0.6],
//     },
//   };

//   useEffect(() => {
//     // Scene setup
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x040d21);
//     scene.fog = new THREE.FogExp2(0x040d21, 0.002);

//     // Camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mountRef.current.appendChild(renderer.domElement);

//     // Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableZoom = false;
//     controls.enablePan = false;
//     controls.maxPolarAngle = Math.PI * 0.8;

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0x404040, 2);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1);
//     scene.add(directionalLight);

//     // Stars
//     const starsGeometry = new THREE.BufferGeometry();
//     const starVertices = [];
//     for (let i = 0; i < 10000; i++) {
//       starVertices.push(
//         (Math.random() - 0.5) * 2000,
//         (Math.random() - 0.5) * 2000,
//         (Math.random() - 0.5) * 2000
//       );
//     }
//     starsGeometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(starVertices, 3)
//     );
//     const starsMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 1,
//     });
//     const stars = new THREE.Points(starsGeometry, starsMaterial);
//     scene.add(stars);

//     // Load transport models
//     const loader = new GLTFLoader();
//     const transportModels = {};
//     let modelsLoaded = 0;

//     Object.keys(transports).forEach((key) => {
//       loader.load(
//         transports[key].modelUrl,
//         (gltf) => {
//           const model = gltf.scene;
//           model.scale.set(...transports[key].scale);
//           model.visible = false;
//           model.userData.type = key;
//           scene.add(model);
//           transportModels[key] = model;

//           modelsLoaded++;
//           if (modelsLoaded === Object.keys(transports).length) {
//             setSceneReady(true);
//           }
//         },
//         undefined,
//         (error) => {
//           console.error("Error loading model:", error);
//         }
//       );
//     });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       stars.rotation.y += 0.0005;

//       if (transportModels[activeTransport]) {
//         transportModels[activeTransport].rotation.y += 0.01;
//       }

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Responsive handling
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mountRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   useEffect(() => {
//     // Handle transport change
//     if (sceneReady && activeTransport) {
//       // Hide all models first
//       mountRef.current.querySelectorAll("canvas").forEach((canvas) => {
//         const scene = canvas.__scene;
//         if (scene) {
//           scene.children.forEach((child) => {
//             if (child.userData?.type) {
//               child.visible = child.userData.type === activeTransport;
//             }
//           });
//         }
//       });
//     }
//   }, [activeTransport, sceneReady]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* 3D Canvas */}
//       <div ref={mountRef} className="absolute inset-0 z-0" />

//       {/* Overlay UI */}
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Header */}
//         <header className="flex justify-between items-center px-8 py-6">
//           <h1 className="text-3xl font-bold text-white">
//             Travel<span className="text-blue-400">Ease</span>
//           </h1>
//           <button className="text-white hover:text-blue-300 transition-colors">
//             <FiCompass size={24} />
//           </button>
//         </header>

//         {/* Main Content */}
//         <main className="flex-grow flex flex-col items-center justify-center px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-5xl font-bold text-white mb-4">
//               Journey Beyond Limits
//             </h2>
//             <p className="text-xl text-blue-200 max-w-2xl">
//               Explore the world with seamless travel experiences across flights,
//               buses, and trains
//             </p>
//           </motion.div>

//           {/* Transport Selector */}
//           <motion.div
//             className="flex gap-8 mb-16"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             {Object.entries(transports).map(([key, transport]) => (
//               <motion.button
//                 key={key}
//                 whileHover={{ y: -10, scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setActiveTransport(key)}
//                 className={`flex flex-col items-center justify-center w-32 h-32 rounded-2xl backdrop-blur-sm border-2 transition-all ${
//                   activeTransport === key
//                     ? `bg-[${transport.color}]/20 border-[${transport.color}] shadow-lg`
//                     : "bg-white/10 border-white/20 hover:border-white/40"
//                 }`}
//                 style={{
//                   boxShadow:
//                     activeTransport === key
//                       ? `0 10px 30px -10px ${transport.color}`
//                       : "none",
//                 }}
//               >
//                 <span className="text-3xl mb-2">{transport.icon}</span>
//                 <span className="text-white font-medium">
//                   {transport.title}
//                 </span>
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Booking CTA */}
//           <AnimatePresence>
//             {activeTransport && (
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 50 }}
//                 className="bg-gradient-to-r from-blue-600/90 to-indigo-600/90 backdrop-blur-md rounded-xl p-6 shadow-2xl w-full max-w-md"
//               >
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   Book {transports[activeTransport].title}
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center bg-white/10 rounded-lg p-3">
//                     <input
//                       type="text"
//                       placeholder="From"
//                       className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full"
//                     />
//                   </div>
//                   <div className="flex items-center bg-white/10 rounded-lg p-3">
//                     <input
//                       type="text"
//                       placeholder="To"
//                       className="bg-transparent border-none outline-none text-white placeholder-blue-200 w-full"
//                     />
//                   </div>
//                   <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
//                     Search {transports[activeTransport].icon}
//                     <FiChevronRight />
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </main>

//         {/* Footer */}
//         <footer className="pb-6 text-center text-blue-300 text-sm">
//           Scroll to explore • Click to select • Anywhere you want to go
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default TravelPortal3D;

import React from "react";

const TravelPortal3D = () => {
  return <div>TravelPortal3D</div>;
};

export default TravelPortal3D;
