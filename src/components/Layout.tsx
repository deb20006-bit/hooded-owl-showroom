import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
