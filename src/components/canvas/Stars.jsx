import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  // Create a reference to the Points object
  const ref = useRef();
  // Generate an array of random points inside a sphere
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Use the useFrame hook to update the rotation of the Points object every frame
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // Return a group containing the Points object with a PointMaterial
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // Return a Canvas component with a camera and a Stars component wrapped in a Suspense component
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;

// In summary, this code creates a 3D canvas with a group of randomly positioned stars represented by Points objects with a PointMaterial applied to them. The rotation of the Points object is updated every frame using the useFrame hook. The entire scene is wrapped in a Suspense component to handle loading of assets, and a Preload component is used to preload all assets in the scene.:star: