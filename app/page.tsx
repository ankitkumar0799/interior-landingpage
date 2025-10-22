import SceneWrapper from "@/components/client/SceneWrapper";

export default function Page() {
  return (
    <main>
      <section className="min-h-[80svh] grid place-items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Cinematic Illusions</h1>
        <p className="mt-4 text-base.dim max-w-xl mx-auto">Scroll, hover, and interact — everything mapped to motion.</p>
      </section>
      <SceneWrapper />
    </main>
  );
}
