"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const [mounted, setMounted] = useState(false);

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0 || !mounted) return null;

  const currentImage = images[currentIndex];

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image container */}
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src.replace(/w=\d+&h=\d+/, "w=1920&h=1080")}
          alt={currentImage.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        {/* Caption */}
        <div className="mt-4 px-6 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
          <p className="text-white text-lg font-medium text-center">
            {currentImage.alt}
          </p>
          <p className="text-white/60 text-sm text-center mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );

  // Use React Portal to render modal at document body level
  return createPortal(modalContent, document.body);
}

// Custom hook for lightbox state management
export function useLightbox(imagesLength: number) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? imagesLength - 1 : prev - 1));
  }, [imagesLength]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === imagesLength - 1 ? 0 : prev + 1));
  }, [imagesLength]);

  return {
    isOpen,
    currentIndex,
    open,
    close,
    goToPrev,
    goToNext,
  };
}
