import { Navbar } from "@/components/layout";
import { Hero, Services } from "@/features/home";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}