import { useState } from 'react';

function ChangeLanguage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <footer className={`absolute bottom-0 left-0 dark:bg-black/30 bg-white/30 w-full shadow-lg flex z-10 ${isVisible ? 'h-20' : 'h-0'} transition-all duration-300 ease-in-out`}>
      <button
        type="button"
        className={`text-pink-700 font-bold absolute right-1/2 ${isVisible ? 'bottom-20 bg-[url(/assets/arrow-down.png)]' : 'bottom-0 bg-[url(/assets/arrow-up.png)]'} dark:bg-black/30 bg-white/30 w-16 h-8 z-0 text-xl rounded-t-full bg-no-repeat bg-center bg-contain transition-all duration-300 ease-in-out`}
        onClick={() => setIsVisible(!isVisible)}
      />

      <div className={`container mx-auto w-full ${isVisible ? 'flex items-center justify-center gap-2' : 'hidden'}`}>
        <p className="text-pink-700 font-bold">Select the language: </p>

        <div className="flex gap-4 items-center">
          <button type="button" className="bg-[url('/assets/spain-flag.png')] w-10 h-10 bg-no-repeat bg-cover bg-center" />

          <button type="button" className="bg-[url('/assets/usa-flag.png')] w-10 h-10 bg-no-repeat bg-cover bg-center" />
        </div>
      </div>

    </footer>
  );
}

export default ChangeLanguage;
