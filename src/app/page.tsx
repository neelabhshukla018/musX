
export default function HomePage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="text-5xl font-bold tracking-tight">
        mus<span style={{ color: "var(--primary)" }}>X</span>
      </h1>
    </main>
  );
}