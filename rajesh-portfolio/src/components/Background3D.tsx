import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Stars, MeshTransmissionMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const PremiumMonolith: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -8]}>
      <torusKnotGeometry args={[3.5, 1.2, 256, 64]} />
      <MeshTransmissionMaterial 
        backside 
        samples={6} 
        thickness={2.5} 
        chromaticAberration={0.4} 
        anisotropy={0.3} 
        roughness={0.08} 
        transmission={1}
        clearcoat={1} 
        clearcoatRoughness={0.1} 
        ior={1.4} 
        color="#e5e7eb" 
        attenuationColor="#2563eb" 
        attenuationDistance={1.2} 
      />
    </mesh>
  );
};

const SceneGroup: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Very subtle, premium parallax (slow and damped)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * Math.PI) / 20, 0.03);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 20, 0.03);
    }
  });

  return (
    <group ref={groupRef}>
      <PremiumMonolith />
      
      {/* Very subtle, slow silver dust for high-end feel */}
      <Sparkles count={50} scale={20} size={1} speed={0.1} opacity={0.2} color="#ffffff" />
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'auto' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
        
        {/* Environment setup - Deep Premium Charcoal */}
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.6} />
        
        {/* Soft, studio-style lighting */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#3b82f6" /> 
        <spotLight position={[0, 10, 0]} intensity={2} color="#60a5fa" penumbra={1} distance={20} />
        
        {/* Elegant minimal stars */}
        <Stars radius={100} depth={50} count={1000} factor={2} saturation={0} fade speed={0.2} />

        {/* Parallax Scene Group */}
        <SceneGroup />
        
        {/* Premium City reflections for the glass */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Background3D;
