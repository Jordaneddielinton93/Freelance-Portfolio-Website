import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Statue from "../models/Statue";

const CanvasLayout = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <Suspense fallback={null}>
        <spotLight position={[0, 1, 7]} />
        <Statue />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CanvasLayout;
