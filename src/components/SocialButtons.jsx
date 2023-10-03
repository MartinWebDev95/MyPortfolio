import Link from './Link';

function SocialButtons() {
  return (
    <div className="flex items-center gap-4 md:gap-8 mx-auto mt-12">
      <Link
        text="Github"
        href="https://github.com/MartinWebDev95"
      />

      <Link
        text="Linkedin"
        href="https://github.com/MartinWebDev95"
      />
    </div>
  );
}

export default SocialButtons;
