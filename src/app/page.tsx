import Home from "./home";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center text-white" style={{top: "calc(var(--topbar-height) - 60px)", position: 'relative'}}>
      <Home />
    </main>
  );
}