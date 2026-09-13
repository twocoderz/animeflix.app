import type { SVGProps } from "react";

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" {...props}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayStoreIcon(props: SVGProps<SVGSVGElement>) {
  // Reconstruction simplifiée du logo Play Store.
  // Remplace par l'asset officiel Google Play pour une conformité brand exacte.
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M52 32c-8 5-13 13-13 24v400c0 11 5 19 13 24l231-224z"
        fill="#00d1ff"
      />
      <path d="M283 256L52 32l280 154c14 8 14 28 0 36l-49 27z" fill="#00f076" />
      <path d="M283 256l49 27c14 8 14 28 0 36L52 480z" fill="#ffcd00" />
      <path d="M332 283l-49-27 49-27 76 42c14 8 14 28 0 36z" fill="#ff3d57" />
    </svg>
  );
}

export default function AppStoreButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#"
        className="flex items-center gap-3 rounded-xl bg-(--text) px-4 py-2.5 text-(--bg) transition-opacity hover:opacity-90"
      >
        <AppleIcon className="h-6 w-6 shrink-0" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] text-(--bg)/70">Télécharger sur</span>
          <span className="text-sm font-semibold">App Store</span>
        </span>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 rounded-xl bg-(--text) px-4 py-2.5 text-(--bg) transition-opacity hover:opacity-90"
      >
        <PlayStoreIcon className="h-6 w-6 shrink-0" />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[10px] text-(--bg)/70">Disponible sur</span>
          <span className="text-sm font-semibold">Google Play</span>
        </span>
      </a>

      <a
        href="#web"
        className="rounded-xl border border-(--border) px-4 py-2.5 text-sm font-medium text-(--text) transition-colors hover:bg-[var(--surface)]"
      >
        Regarder sur le Web
      </a>
    </div>
  );
}
