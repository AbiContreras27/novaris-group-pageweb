import { Navbar } from "@/components/layout";
import { Hero } from "@/features/home/hero";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}