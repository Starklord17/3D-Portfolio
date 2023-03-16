import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// This is a React component that renders a 3D model of the Earth using Three.js
const Earth = () => {
  // Load the 3D model of the Earth using useGLTF from the drei library
  const earth = useGLTF("./planet/scene.gltf");

  // Render the 3D model of the Earth
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// This is another React component that uses the Earth component to render a 3D canvas
const EarthCanvas = () => {
  return (
    <Canvas
      shadows // enable shadows
      frameloop='demand' // only render the canvas when requested (to improve performance)
      dpr={[1, 2]} // set the device pixel ratio
      gl={{ preserveDrawingBuffer: true }} // enable rendering to an image buffer
      camera={{
        fov: 45, // set the camera's field of view
        near: 0.1, // set the near clipping plane
        far: 200, // set the far clipping plane
        position: [-4, 3, 6], // set the camera's position
      }}
    >
      {/* Use the Suspense component to show a fallback component while the 3D model is being loaded */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls to allow the user to control the camera */}
        <OrbitControls
          autoRotate // automatically rotate the camera
          enableZoom={false} // disable zooming
          maxPolarAngle={Math.PI / 2} // set the maximum polar angle of the camera
          minPolarAngle={Math.PI / 2} // set the minimum polar angle of the camera
        />

        {/* Use the Earth component to render the 3D model of the Earth */}
        <Earth />

        {/* Use Preload to load all assets before rendering */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
