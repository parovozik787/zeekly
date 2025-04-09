const resolutionBase = 2048;
const maxMultiplier = 8;

export function vw(size: number) {
  return `${(size / resolutionBase) * 100}vw`;
}

export function myClamp(size: number) {
  return `clamp(${size}px, ${vw(size)}, ${size * maxMultiplier}px)`;
}

export function responsiveSize(size: number): number {
  const screenWidth =
    typeof window !== 'undefined' ? window.innerWidth : resolutionBase;

  const scaled = (size / resolutionBase) * screenWidth;
  const max = size * maxMultiplier;

  const clamped = Math.max(size, Math.min(scaled, max));

  return Math.round(clamped);
}
