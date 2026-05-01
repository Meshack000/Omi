import Hero from "../app/components/Hero"
import TechStack from "../app/components/TechStack";
import Work from "./components/Work";


export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack/>
      <Work/>
    </main>
  );
}