import {
  Hero,
  PortfolioSections,
  Footer,
} from "@/components/portfolio/sections";
import MotionEnhancement from "@/components/portfolio/motion";
export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <PortfolioSections />
      </main>
      <Footer />
      <MotionEnhancement />
    </>
  );
}
