'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  RotateCcw,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Image as ImageIcon,
  AlertCircle,
  RefreshCw,
  Eye,
} from 'lucide-react';
import { useProgress } from '@react-three/drei';
import type { GarmentViewerHandle } from './GarmentViewer';

// Dynamic import with SSR disabled to prevent server-side WebGL issues
const GarmentViewer = dynamic(
  () => import('./GarmentViewer').then((mod) => mod.GarmentViewer),
  {
    ssr: false,
    loading: () => null,
  }
);

/**
 * Inner loading indicator that tracks real download progress from Three.js DefaultLoadingManager
 */
function ModelLoadingCard() {
  const { progress, loaded, total } = useProgress();

  const loadedMB = loaded > 0 ? (loaded / (1024 * 1024)).toFixed(1) : null;
  const totalMB = total > 0 ? (total / (1024 * 1024)).toFixed(1) : null;
  const roundedPercent = Math.min(100, Math.max(0, Math.round(progress)));

  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/80 bg-surface/95 shadow-soft-lg text-center min-w-[240px] max-w-xs animate-in fade-in zoom-in-95 duration-200">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="w-9 h-9 rounded-full border-2 border-border border-t-accent animate-spin" />
        <Eye className="w-4 h-4 text-accent absolute inset-0 m-auto animate-pulse" />
      </div>

      <div className="w-full">
        <p className="font-serif text-lg text-foreground font-normal">
          Loading 3D model...
        </p>

        {progress > 0 ? (
          <div className="mt-3 flex flex-col items-center gap-1.5 w-full">
            <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-accent h-full transition-all duration-300 rounded-full"
                style={{ width: `${roundedPercent}%` }}
              />
            </div>
            <span className="text-[11px] text-muted font-sans font-medium tracking-wide">
              {roundedPercent}%
              {loadedMB && totalMB && ` • ${loadedMB} MB / ${totalMB} MB`}
            </span>
          </div>
        ) : (
          <p className="text-[11px] text-muted font-sans mt-1">
            Streaming high-resolution garment...
          </p>
        )}
      </div>
    </div>
  );
}

export interface Product3DViewerProps {
  modelUrl?: string;
  imageUrl: string;
  imageAlt: string;
  productName: string;
  aspectRatioClass?: string;
  craftsmanshipTag?: string;
  category?: string;
}

export function Product3DViewer({
  modelUrl,
  imageUrl,
  imageAlt,
  productName,
  aspectRatioClass = 'aspect-[3/4]',
  craftsmanshipTag = 'Full Canvas',
  category = 'Bespoke Garment',
}: Product3DViewerProps) {
  const [is3DActive, setIs3DActive] = useState(false);
  const [isLoading3D, setIsLoading3D] = useState(false);
  const [isLoaded3D, setIsLoaded3D] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Auto-hide hint badge after 4 seconds
  useEffect(() => {
    if (is3DActive && isLoaded3D) {
      setShowHint(true);
      const timer = setTimeout(() => {
        setShowHint(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [is3DActive, isLoaded3D]);

  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<GarmentViewerHandle>(null);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleActivate3D = () => {
    if (!modelUrl) return;
    setHasError(false);
    setErrorMessage(null);
    setIs3DActive(true);
    setIsLoading3D(true);
    setIsLoaded3D(false);
    setShowHint(true);
  };

  const handleDeactivate3D = () => {
    setIs3DActive(false);
    setIsLoading3D(false);
    setIsLoaded3D(false);
    setAutoRotate(false);
    if (document.fullscreenElement && containerRef.current) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleModelLoaded = useCallback(() => {
    setIsLoading3D(false);
    setIsLoaded3D(true);
    setHasError(false);
  }, []);

  const handleModelError = useCallback((error: Error) => {
    console.error('Failed to load 3D garment model:', error);
    setIsLoading3D(false);
    setHasError(true);
    setErrorMessage(error.message || 'Unable to retrieve 3D asset');
  }, []);

  const handleRetry = () => {
    setHasError(false);
    setErrorMessage(null);
    setIsLoading3D(true);
    setIsLoaded3D(false);
    setRetryKey((prev) => prev + 1);
  };

  const handleResetView = () => {
    viewerRef.current?.resetCamera();
  };

  const handleToggleAutoRotate = () => {
    setAutoRotate((prev) => !prev);
  };

  const handleToggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request could not be completed:', err);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${
        isFullscreen ? 'h-screen' : aspectRatioClass
      } rounded-2xl sm:rounded-3xl border border-border bg-surface-muted overflow-hidden shadow-soft select-none group`}
    >
      {/* 1. Permanent Product Image (Remains mounted & visible during initial load & loading) */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          is3DActive && isLoaded3D ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top Badges (Visible on image & 3D) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        <Badge variant="subtle" size="sm">
          {category}
        </Badge>
        <div className="flex items-center gap-2">
          {is3DActive && isLoaded3D ? (
            <Badge variant="accent" size="sm" className="shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1.5" />
              3D Interactive View
            </Badge>
          ) : (
            craftsmanshipTag && (
              <Badge variant="outline" size="sm" className="bg-surface/80 backdrop-blur-sm">
                {craftsmanshipTag}
              </Badge>
            )
          )}
        </div>
      </div>

      {/* 2. Initial CTA — View in 3D Button (Only rendered when 3D is available and not yet active) */}
      {!is3DActive && modelUrl && (
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-center pointer-events-auto">
          <Button
            id="view-in-3d-button"
            onClick={handleActivate3D}
            variant="primary"
            size="md"
            className="shadow-soft-lg gap-2 px-6 py-3 rounded-xl border border-accent/40 bg-accent text-accent-foreground hover:bg-accent/90 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Eye className="w-4 h-4 text-accent-foreground" />
            <span className="font-sans font-medium tracking-wide">View in 3D</span>
          </Button>
        </div>
      )}

      {/* 3. Loading State Overlay (Step 10: "Loading 3D model...", image stays visible) */}
      {is3DActive && isLoading3D && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-background/55 backdrop-blur-[4px] transition-all duration-300">
          <ModelLoadingCard />
        </div>
      )}

      {/* 4. Error State (Step 11: "Unable to load the 3D model.", "Try Again") */}
      {is3DActive && hasError && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-background/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-surface shadow-soft-lg text-center max-w-sm">
            <div className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-muted">
              <AlertCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-foreground font-normal">
                Unable to load the 3D model.
              </h4>
              <p className="text-xs text-muted font-sans mt-1.5 leading-relaxed">
                The garment model could not be retrieved from the cloud storage bucket.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2 w-full">
              <Button
                onClick={handleRetry}
                variant="primary"
                size="sm"
                className="flex-1 gap-2 text-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </Button>
              <Button
                onClick={handleDeactivate3D}
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
              >
                Return to Photo
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 5. 3D Viewer Canvas (Lazy mounted only when 3D is activated) */}
      {is3DActive && modelUrl && !hasError && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
            isLoaded3D ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <GarmentViewer
            key={retryKey}
            ref={viewerRef}
            modelUrl={modelUrl}
            autoRotate={autoRotate}
            onLoaded={handleModelLoaded}
            onError={handleModelError}
          />
        </div>
      )}

      {/* 6. Interactive 3D Controls Bar (Step 7: Reset View, Auto Rotate, Fullscreen) */}
      {is3DActive && isLoaded3D && (
        <>
          {/* Subtle gesture hint — placed safely at bottom above control deck so it never covers face or torso */}
          {showHint && (
            <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center pointer-events-none transition-opacity duration-700 animate-in fade-in duration-500">
              <span className="px-3.5 py-1.5 rounded-full bg-surface/85 border border-border/80 text-[10px] tracking-wider uppercase font-sans text-muted backdrop-blur-md shadow-sm">
                Drag to Rotate • Scroll / Pinch to Zoom
              </span>
            </div>
          )}

          {/* Bottom Floating Control Deck */}
          <div className="absolute bottom-5 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto gap-2">
            {/* Left: Switch back to editorial photo */}
            <button
              onClick={handleDeactivate3D}
              aria-label="Return to photo view"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-surface/90 hover:bg-surface text-foreground text-xs font-sans shadow-soft backdrop-blur-md transition-all active:scale-95"
            >
              <ImageIcon className="w-3.5 h-3.5 text-muted" />
              <span className="hidden sm:inline">Photo</span>
            </button>

            {/* Center / Right: 3D interactive tools */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl border border-border bg-surface/90 backdrop-blur-md shadow-soft">
              {/* Reset View */}
              <button
                onClick={handleResetView}
                title="Reset View"
                aria-label="Reset View"
                className="p-2 rounded-lg hover:bg-surface-muted text-foreground transition-colors text-xs inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5 text-muted" />
                <span className="hidden md:inline font-sans text-[11px]">Reset</span>
              </button>

              <div className="w-[1px] h-4 bg-border my-auto" />

              {/* Auto Rotate Toggle */}
              <button
                onClick={handleToggleAutoRotate}
                title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
                aria-label="Toggle Auto Rotation"
                className={`p-2 rounded-lg transition-colors text-xs inline-flex items-center gap-1.5 ${
                  autoRotate
                    ? 'bg-accent/15 text-accent font-medium'
                    : 'hover:bg-surface-muted text-foreground'
                }`}
              >
                {autoRotate ? (
                  <Pause className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-muted" />
                )}
                <span className="hidden md:inline font-sans text-[11px]">
                  {autoRotate ? 'Rotating' : 'Rotate'}
                </span>
              </button>

              <div className="w-[1px] h-4 bg-border my-auto" />

              {/* Fullscreen */}
              <button
                onClick={handleToggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                aria-label="Toggle Fullscreen"
                className="p-2 rounded-lg hover:bg-surface-muted text-foreground transition-colors text-xs inline-flex items-center gap-1.5"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3.5 h-3.5 text-muted" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5 text-muted" />
                )}
                <span className="hidden md:inline font-sans text-[11px]">
                  {isFullscreen ? 'Exit' : 'Expand'}
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product3DViewer;
