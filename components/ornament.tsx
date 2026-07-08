/**
 * Ornament — a slim gold flourish inspired by the cloud-scroll border on the
 * restaurant's printed menu. Used as a divider / heading mark to carry the
 * Chinese-Mongolian visual language across the site. Colour follows currentColor.
 */
export function Ornament({
  width = 216,
  className = '',
}: {
  width?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={(width * 24) / 216}
      viewBox="0 0 216 24"
      fill="none"
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* tapered lines ending in a small scroll curl */}
      <path d="M6 12 H82 q11 0 13 -6" strokeWidth="1.3" opacity="0.5" strokeLinecap="round" />
      <path d="M210 12 H134 q-11 0 -13 -6" strokeWidth="1.3" opacity="0.5" strokeLinecap="round" />
      {/* flanking dots */}
      <circle cx="98" cy="12" r="1.9" fill="currentColor" stroke="none" />
      <circle cx="118" cy="12" r="1.9" fill="currentColor" stroke="none" />
      {/* central lozenge */}
      <path d="M108 2.5 L117 12 L108 21.5 L99 12 Z" fill="currentColor" stroke="none" />
      <path d="M108 7.5 L108 16.5" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
    </svg>
  );
}
