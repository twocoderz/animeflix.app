export type VideoContainerProps = {
  src: string;
  className?: string;
};

export default function VideoContainer({
  src,
  className,
}: VideoContainerProps) {
  return (
    <div className={`relative mx-auto w-full max-w-90 ${className ?? ""}`}>
      <div
        className="absolute -inset-6 -z-10 rounded-[36px] bg-(--color-accent)/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative aspect-3/4 overflow-hidden rounded-[28px] border border-(--border) bg-black shadow-2xl">
        <video
          className="h-full w-full object-cover"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}
