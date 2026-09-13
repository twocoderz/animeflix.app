export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="absolute -inset-6 -z-10 rounded-[56px] bg-(--color-accent)/10 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative rounded-[40px] border-[6px] border-neutral-950 bg-neutral-950 p-2 shadow-2xl">
        <div
          className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-950"
          aria-hidden="true"
        />
        <div className="relative aspect-9/19.5 w-full overflow-hidden rounded-4xl bg-black">
          <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white">
              Direct
            </span>
          </div>
          <video
            className="h-full w-full object-cover"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
