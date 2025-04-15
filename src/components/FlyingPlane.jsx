import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const FlyingPlane = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    let plane;
    loader.load("/assets/plane.glb", (gltf) => {
      plane = gltf.scene;
      plane.scale.set(1, 1, 1);
      scene.add(plane);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);

      if (plane) {
        plane.position.z -= 0.05;
        plane.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[500px] rounded-xl shadow-lg overflow-hidden"
    />
  );
};

export default FlyingPlane;
