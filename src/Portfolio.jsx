import Blobs from './components/Blobs';
import ChangeLanguage from './components/ChangeLanguage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionProjects from './components/SectionProjects';
import SectionSkills from './components/SectionSkills';

function Portfolio() {
  return (
    <>
      <Blobs />

      <Header />

      <main className="container mx-auto px-4 md:px-0">
        <HeroSection />

        <SectionProjects />

        <SectionSkills />
      </main>

      <ChangeLanguage />
    </>
  );
}

export default Portfolio;
