import Hero from "../app/components/Hero"
import TechStack from "../app/components/TechStack";
import Work from "./components/Work";
import Aboutpage from "./components/Aboutpage";


export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack/>
      <Work/>
      <Aboutpage/>
    </main>
  );
}