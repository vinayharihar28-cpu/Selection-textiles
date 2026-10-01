'use client';

import React, { Suspense, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export interface GarmentViewerHandle {
  resetCamera: () => void;
}

export interface GarmentViewerProps {
  modelUrl: string;
  autoRotate?: boolean;
  onLoaded?: () => void;
  onError?: (error: Error) => void;
  className?: string;
}

/**
 * Inner component that loads and renders the GLB model.
 * Preserves the model exactly as provided (no mesh simplification or texture alteration).
 */
function GarmentModel({
  url,
  onLoaded,
}: {
  url: string;
  onLoaded?: () => void;
}) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    if (scene) {
      onLoaded?.();
    }
  }, [scene, onLoaded]);

  return (
    <Center top={false}>
      <primitive object={scene} dispose={null} />
    </Center>
  );
}

/**
 * Lighting rig tailored for high-end garment and tailoring visualization.
 * Clean, moderate studio lighting that preserves natural skin tones while keeping cloth textures crisp.
 */
function StudioLighting() {
  return (
    <>
      {/* Soft natural sky-to-ground ambient diffusion */}
      <hemisphereLight
        args={['#FFFFFF', '#D8D1C4', 1.0]}
      />

      {/* Gentle ambient base to soften shadow pockets */}
      <ambientLight intensity={0.9} color="#FFFFFF" />

      {/* Front key light: moderate intensity to avoid blowing out skin highlights */}
      <directionalLight
        position={[0, 2, 5]}
        intensity={1.2}
        color="#FFFFFF"
      />

      {/* Soft high-key front-left directional light */}
      <directionalLight
        position={[4, 7, 4]}
        intensity={1.3}
        color="#FFFDF9"
      />

      {/* Subtle fill light from front-right */}
      <directionalLight
        position={[-4, 5, 3]}
        intensity={0.9}
        color="#F8F4EE"
      />

      {/* Subtle rim lights from behind to sculpt silhouette contours without glare */}
      <directionalLight
        position={[-3, 5, -4]}
        intensity={0.7}
        color="#FFFFFF"
      />
      <directionalLight
        position={[3, 5, -4]}
        intensity={0.7}
        color="#FFFFFF"
      />

      {/* Subtle upward bounce to soften lower hem and trouser drape */}
      <directionalLight
        position={[0, -3, 3]}
        intensity={0.4}
        color="#FFFFFF"
      />
    </>
  );
}

/**
 * Custom Error Boundary to catch GLTF loading failures (e.g. S3 CORS, 403, 404, or WebGL errors).
 */
interface ErrorBoundaryProps {
  onError?: (error: Error) => void;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class GarmentErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('3D Garment Viewer encountered an error:', error, errorInfo);
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

/**
 * Production 3D Garment Viewer component.
 * Integrates React Three Fiber, Three.js, OrbitControls, and dynamic model URL.
 */
export const GarmentViewer = forwardRef<GarmentViewerHandle, GarmentViewerProps>(
  ({ modelUrl, autoRotate = false, onLoaded, onError, className }, ref) => {
    const controlsRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      resetCamera: () => {
        if (controlsRef.current) {
          controlsRef.current.target.set(0, 0.38, 0);
          controlsRef.current.object.position.set(0, 0.45, 1.35);
          controlsRef.current.update();
        }
      },
    }));

    return (
      <div className={className || 'w-full h-full'}>
        <GarmentErrorBoundary onError={onError}>
          <Canvas
            camera={{ position: [0, 0.45, 1.35], fov: 42 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.18,
            }}
            dpr={[1, 2]}
            style={{ width: '100%', height: '100%' }}
          >
            <StudioLighting />

            <Suspense fallback={null}>
              <GarmentModel url={modelUrl} onLoaded={onLoaded} />
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              target={[0, 0.38, 0]}
              enablePan={true}
              screenSpacePanning={true}
              enableZoom={true}
              minDistance={0.5}
              maxDistance={4.5}
              minPolarAngle={Math.PI / 16}
              maxPolarAngle={Math.PI / 1.75}
              enableDamping={true}
              dampingFactor={0.06}
              autoRotate={autoRotate}
              autoRotateSpeed={1.2}
              rotateSpeed={0.85}
              panSpeed={0.8}
            />
          </Canvas>
        </GarmentErrorBoundary>
      </div>
    );
  }
);

GarmentViewer.displayName = 'GarmentViewer';

export default GarmentViewer;
