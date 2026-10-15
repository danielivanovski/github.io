export default function StudioVideoShowcase() {
  return (
    <section id="video-tour" className="border-t border-stone-800/80 bg-stone-950 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <video
          src="/example_of_massage_by_sofia.mp4"
          controls
          playsInline
          preload="metadata"
          className="block h-auto w-full rounded-2xl border border-stone-800 bg-black shadow-2xl"
        >
          Вашиот прелистувач не поддржува HTML видео.
        </video>
      </div>
    </section>
  );
}
