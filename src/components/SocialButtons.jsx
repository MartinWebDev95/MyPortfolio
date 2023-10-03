import Link from './Link';

function SocialButtons() {
  return (
    <div className="md:gap-8 mx-auto mt-6 overflow-hidden p-4">
      <div className="flex items-center gap-4 animate-socials_animation">
        <Link
          text="Github"
          href="https://github.com/MartinWebDev95"
        />

        <Link
          text="Linkedin"
          href="https://github.com/MartinWebDev95"
        />
      </div>
    </div>
  );
}

export default SocialButtons;
