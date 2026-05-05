export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base off-white wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Soft mesh gradient blobs */}
      <div className="absolute inset-0 bg-mesh-light" />

      {/* Faint grid texture for depth (very low opacity) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating accent orbs */}
      <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute right-[-10%] top-[40%] h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute bottom-[-15%] left-[20%] h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
    </div>
  );
}
