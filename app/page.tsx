import Feature from "@/components/Feature";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="font-osans text-black">
      <div className="lg:grid lg:grid-cols-2">
        <Hero />
        <Feature />
      </div>
    </main>
  );
}
