import React, { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
extend({OrbitControls, Preload, useGLTF})  

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return ( 
    <mesh>
      <hemisphereLight intensity = {0.15} groundColor = "black" />
      <pointLight intensity = {2} />
      <spotLight  
        position = {[-21, 45, 7]}
        angle = {0.4}
        penumbra = {1}
        intensity = {1}
        castShadow 
        shadow-mapSize = {1024}
      /> 
      <primitive 
        object = {computer.scene} 
        scale = { isMobile ? 0.6 : 0.85 }
        position={ isMobile ? [0, 3.9, -3.8] : [0, -4.7, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  );  
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    //ADD LISTENER FOR CHANGES TO SCREEN SIZE
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    //CALLBACK TO HANDLE CHANGES TO MEDIA QUERY
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    //CALLBACK AS LISTENER FOR CHANGES TO THE MEDIA QUERY
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //REMOVE LISTENER WHEN COMPONENT UNMOUNTED
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop = "demand"
      shadows
      dpr={[1, 2]}
      camera = {{ position: [20, 3, 5], fov: 25 }}
      gl = {{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls
          enableZoom = {false}
          maxPolarAngle = {Math.PI / 2} 
          minPolarAngle = {Math.PI / 2}  
        />
        <Computers isMobile = {isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;