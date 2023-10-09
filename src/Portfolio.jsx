import Blobs from './components/Blobs';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionProjects from './components/SectionProjects';

function Portfolio() {
  return (
    <>
      <Blobs />

      <Header />

      <main>
        <HeroSection />

        <SectionProjects />
      </main>
    </>
  );
}

export default Portfolio;
