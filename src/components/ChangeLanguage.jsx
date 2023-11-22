import { useState } from 'react';

function ChangeLanguage() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <button
        type="button"
        aria-hidden={isHidden}
        onClick={() => setIsHidden(!isHidden)}
        className="w-fit h-fit cursor-pointer bg-transparent"
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 31.416 31.416"
          xmlSpace="preserve"
          className="dark:fill-white fill-black cursor-pointer"
        >
          <g>
            <g>
              <path d="M28.755,6.968l-0.47,0.149L25.782,7.34l-0.707,1.129l-0.513-0.163L22.57,6.51l-0.289-0.934L21.894,4.58l-1.252-1.123 l-1.477-0.289l-0.034,0.676l1.447,1.412l0.708,0.834L20.49,6.506l-0.648-0.191L18.871,5.91l0.033-0.783l-1.274-0.524l-0.423,1.841 l-1.284,0.291l0.127,1.027l1.673,0.322l0.289-1.641l1.381,0.204l0.642,0.376h1.03l0.705,1.412l1.869,1.896l-0.137,0.737 l-1.507-0.192l-2.604,1.315l-1.875,2.249l-0.244,0.996h-0.673l-1.254-0.578l-1.218,0.578l0.303,1.285l0.53-0.611l0.932-0.029 l-0.065,1.154l0.772,0.226l0.771,0.866l1.259-0.354l1.438,0.227l1.67,0.449l0.834,0.098l1.414,1.605l2.729,1.605l-1.765,3.372 l-1.863,0.866l-0.707,1.927l-2.696,1.8l-0.287,1.038c6.892-1.66,12.019-7.851,12.019-15.253 C31.413,12.474,30.433,9.465,28.755,6.968z" />

              <path d="M17.515,23.917l-1.144-2.121l1.05-2.188l-1.05-0.314l-1.179-1.184l-2.612-0.586l-0.867-1.814v1.077h-0.382l-2.251-3.052 v-2.507L7.43,8.545L4.81,9.012H3.045L2.157,8.43L3.29,7.532L2.16,7.793c-1.362,2.326-2.156,5.025-2.156,7.916 c0,8.673,7.031,15.707,15.705,15.707c0.668,0,1.323-0.059,1.971-0.137l-0.164-1.903c0,0,0.721-2.826,0.721-2.922 C18.236,26.357,17.515,23.917,17.515,23.917z" />

              <path d="M5.84,5.065l2.79-0.389l1.286-0.705l1.447,0.417l2.312-0.128l0.792-1.245l1.155,0.19l2.805-0.263L19.2,2.09l1.09-0.728 l1.542,0.232l0.562-0.085C20.363,0.553,18.103,0,15.708,0C10.833,0,6.474,2.222,3.596,5.711h0.008L5.84,5.065z M16.372,1.562 l1.604-0.883l1.03,0.595l-1.491,1.135l-1.424,0.143l-0.641-0.416L16.372,1.562z M11.621,1.691l0.708,0.295l0.927-0.295 l0.505,0.875l-2.14,0.562l-1.029-0.602C10.591,2.526,11.598,1.878,11.621,1.691z" />
            </g>
          </g>
        </svg>
      </button>

      <div className={`${isHidden ? 'hidden' : 'flex'} items-center gap-2 absolute dark:bg-black dark:text-white bg-white text-black font-semibold pt-3 px-3 pb-1 top-9 right-6 md:right-10 rounded-lg shadow-lg text-md`}>
        <div>
          <p className="whitespace-nowrap mb-1">Choose the language: </p>

          <ul className="flex items-center gap-4 justify-center">
            <li>
              <button type="button">
                <span className="sr-only">Spanish</span>
                <img src="/assets/flag-spain.svg" alt="Spain Flag" className="w-9 h-9" />
              </button>
            </li>

            <li>
              <button type="button">
                <span className="sr-only">English</span>
                <img src="/assets/flag-usa.svg" alt="USA Flag" className="w-9 h-9" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ChangeLanguage;
