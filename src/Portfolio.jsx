import Blobs from './components/Blobs';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionProjects from './components/SectionProjects';
import SectionSkills from './components/SectionSkills';

function Portfolio() {
  return (
    <>
      <Blobs />

      <Header />

      <main>
        <HeroSection />

        <SectionProjects />

        <SectionSkills />
      </main>
    </>
  );
}

export default Portfolio;
