import Image from "next/image";
import Hero from "./Component/Hero";
import { FloatingNav } from "./Component/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./Component/Grid";
import RecentProjects from "./Component/RecentProjects";
import { navItems } from "@/data";
import Clients from "./Component/Clients";
import Experience from "./Component/Experience";
import Approach from "./Component/Approach";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}
        
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
