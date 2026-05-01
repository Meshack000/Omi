import Hero from "../app/components/Hero"
import TechStack from "../app/components/TechStack";
import Work from "./components/Work";
import Aboutpage from "./components/Aboutpage";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack/>
      <Work/>
      <Aboutpage/>
      <Footer/>
    </main>
  );
}