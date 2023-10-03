import SocialButtons from './SocialButtons';

function HeroSection() {
  return (
    <section className="h-screen grid place-content-center">
      <div className="overflow-hidden">
        <h1 className="text-center uppercase font-bold text-5xl md:text-6xl lg:text-7xl dark:text-white text-black animate-title_animation origin-top">
          Hi, I&apos;m a Junior Frontend Developer
        </h1>
      </div>

      <div className="overflow-hidden">
        <h2 className="text-black dark:text-white text-center mt-4 font-bold text-md md:text-lg animate-title_animation origin-top">
          My name is Juan Antonio Martín and I&apos;m looking for a job as frontend developer
        </h2>
      </div>

      <SocialButtons />
    </section>
  );
}

export default HeroSection;
