import React, { useEffect, useState } from 'react';
import { Float } from '@react-three/drei';
import { GLTFLoader, DRACOLoader } from 'three-stdlib';
import { decryptFile } from './Character/utils/decrypt';

export const HeroCharacter: React.FC = () => {
  const [modelUrl, setModelUrl] = useState<string | null>(null);

  useEffect(() => {
    let url: string;
    const loadAndDecrypt = async () => {
      try {
        const encryptedBlob = await decryptFile('/models/character.enc', 'Character3D#@');
        url = URL.createObjectURL(new Blob([encryptedBlob]));
        setModelUrl(url);
      } catch (err) {
        console.error("Failed to decrypt model:", err);
      }
    };
    loadAndDecrypt();
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, []);

  if (!modelUrl) return null;

  return <ModelRenderer url={modelUrl} />;
};

const ModelRenderer = ({ url }: { url: string }) => {
  const [gltf, setGltf] = useState<any>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
    
    loader.load(url, (loadedGltf) => {
      // Optimize and setup shadows
      loadedGltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Adjust foot position from original character logic
      const footR = loadedGltf.scene.getObjectByName('footR');
      const footL = loadedGltf.scene.getObjectByName('footL');
      if (footR) footR.position.y = 3.36;
      if (footL) footL.position.y = 3.36;

      setGltf(loadedGltf);
    });
    
    return () => {
      dracoLoader.dispose();
    };
  }, [url]);

  if (!gltf) return null;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.3, 0.3]}>
      {/* Scale down and position appropriately */}
      <primitive object={gltf.scene} scale={1.2} position={[0, -5, 0]} rotation={[0.2, -0.4, 0]} />
    </Float>
  );
};
