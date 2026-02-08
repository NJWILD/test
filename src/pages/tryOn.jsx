import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useCart } from "../context/cartContext";
import { Suspense } from "react";

const Avatar = ({ cartItems }) => {
  // Load base avatar
  const { scene: avatarScene } = useGLTF("/models/avatar.glb");

  // Map cart items to clothing models
  const clothingModels = cartItems.map((item, i) => {
    // For demo, we'll use placeholder glb paths
    let modelPath = "";
    if (item.category === "Hoodies") modelPath = "/models/hoodie.glb";
    if (item.category === "T-Shirts") modelPath = "/models/tshirt.glb";
    if (item.category === "Jackets") modelPath = "/models/jacket.glb";
    return <Clothing key={i} modelPath={modelPath} />;
  });

  return (
    <group>
      <primitive object={avatarScene} />
      {clothingModels}
    </group>
  );
};

const Clothing = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const TryOn = () => {
  const { cart } = useCart();

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Try Your Outfit</h1>
      <div className="w-full h-[80vh]">
        <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Avatar cartItems={cart} />
          </Suspense>
          <OrbitControls enablePan={true} enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
};

export default TryOn;
