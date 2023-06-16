import { useState } from 'react';

function ChangeLanguage() {
  const [isVisible, setIsVisible] = useState(true);

  const handleLanguage = (e) => {
    setIsVisible(!isVisible);
  };

  return (
    <footer className={`sticky bottom-0 left-0 dark:bg-black bg-white w-full shadow-lg flex z-10 ${isVisible ? 'h-20' : 'h-0'} transition-all duration-300 ease-in-out`}>

      <button
        type="button"
        className={`text-pink-700 font-bold absolute right-1/2 flex items-center justify-center ${isVisible ? 'bottom-20' : 'bottom-0'} dark:bg-black bg-white w-14 h-8 rounded-t-full transition-all duration-300 ease-in-out group`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#be185d" className="group-hover:fill-blue-600 transition-all duration-300 ease-in-out">
            <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#be185d" className="group-hover:fill-blue-600 transition-all duration-300 ease-in-out">
            <polygon points="12 6.586 3.293 15.293 4.707 16.707 12 9.414 19.293 16.707 20.707 15.293 12 6.586" />
          </svg>
        )}
      </button>

      <div className={`container mx-auto w-full ${isVisible ? 'flex items-center justify-center gap-2' : 'hidden'} overflow-hidden`}>
        <p className="text-pink-700 font-bold">Select the language: </p>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            value="es"
            className="bg-[url('/assets/spain-flag.png')] w-10 h-10 bg-no-repeat bg-cover bg-center"
            onClick={handleLanguage}
          />

          <button
            type="button"
            value="en"
            className="bg-[url('/assets/usa-flag.png')] w-10 h-10 bg-no-repeat bg-cover bg-center"
            onClick={handleLanguage}
          />
        </div>
      </div>

    </footer>
  );
}

export default ChangeLanguage;
