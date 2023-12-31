import Blobs from './components/Blobs';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionContact from './components/SectionContact';
import SectionProjects from './components/SectionProjects';
import SectionSkills from './components/SectionSkills';
import Notification from './components/Notification';

function Portfolio() {
  return (
    <>
      <Blobs />

      <Header />

      <main>
        <HeroSection />

        <SectionProjects />

        <SectionSkills />

        <SectionContact />
      </main>

      <Notification />
    </>
  );
}

export default Portfolio;
