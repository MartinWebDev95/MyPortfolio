import useLanguageContext from '../hooks/useLanguageContext';
import SocialButtons from './SocialButtons';

function HeroSection() {
  const { text } = useLanguageContext();

  return (
    <section id={text.navigation.firstItem} className="container mx-auto px-4 md:px-0 h-screen grid place-content-center">
      <h1 className="text-center uppercase font-bold text-[42px]/tight md:text-6xl lg:text-7xl dark:text-white text-black animate-title_animation origin-top break-words">
        {text.heroSection.title}
      </h1>

      <h2 className="text-black dark:text-white text-center mt-4 font-bold text-md md:text-lg animate-title_animation origin-top">
        {text.heroSection.subtitle}
      </h2>

      <SocialButtons />
    </section>
  );
}

export default HeroSection;
