import Atropos from 'atropos/react';
import useLanguageContext from '../hooks/useLanguageContext';

function SectionSkills() {
  const { text } = useLanguageContext();

  return (
    <section id={text.skills.title} className="container mx-auto px-4 md:px-0 my-24">
      <h2
        className="text-center uppercase font-bold text-black dark:text-white text-3xl lg:text-4xl mb-6 lg:mb-16"
      >
        {text.skills.title}
      </h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-orange-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">
            <img className="w-20 atropos-img" src="/assets/html.png" alt="HTML" data-atropos-offset="-10" />
          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">
            <img className="w-20 absolute" src="/assets/react.png" alt="React" data-atropos-offset="-10" />
          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">
            <img className="w-20 absolute" src="/assets/js.png" alt="JavaScript" data-atropos-offset="-10" />
          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-blue-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">
            <img className="w-20 absolute" src="/assets/css.png" alt="CSS" data-atropos-offset="-10" />
          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-black/30 dark:via-white/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">

            <svg
              width="581"
              height="100"
              viewBox="0 0 1000 1000"
              id="svg2"
              version="1.1"
              className="absolute"
              data-atropos-offset="-10"
            >
              <defs
                id="defs4"
              />

              <g
                id="layer1"
                transform="translate(0,-52.36216)"
              >
                <g
                  transform="matrix(1.8594962,0,0,1.8594962,-30.174052,333.87231)"
                  className="dark:fill-white fill-black"
                >
                  <path
                    d="m 107.48114,103.51229 q 12.26074,0 19.02832,6.45996 6.76758,6.45996 7.51465,14.67773 l -8.52539,0 q -1.4502,-6.24023 -5.80078,-9.88769 -4.30664,-3.64746 -12.12891,-3.64746 -9.536134,0 -15.424806,6.72363 -5.844726,6.67969 -5.844726,20.52246 0,11.33789 5.273437,18.41309 5.317383,7.03125 15.820315,7.03125 9.66797,0 14.72168,-7.42676 2.68066,-3.91114 3.99902,-10.28321 l 8.52539,0 q -1.14257,10.19532 -7.55859,17.09473 -7.69043,8.30566 -20.74219,8.30566 -11.25,0 -18.896484,-6.81152 -10.063477,-9.00879 -10.063477,-27.81738 0,-14.28223 7.558594,-23.42285 8.173828,-9.93164 22.543947,-9.93164 z m -1.75781,0 0,0 z"
                  />

                  <path
                    d="m 151.03095,148.99568 q 0.30761,5.49317 2.59277,8.9209 4.35059,6.41602 15.33691,6.41602 4.92188,0 8.96485,-1.40625 7.82226,-2.72461 7.82226,-9.75586 0,-5.27344 -3.2959,-7.51465 -3.33984,-2.19726 -10.45898,-3.82324 l -8.74512,-1.97754 q -8.56933,-1.93359 -12.1289,-4.2627 -6.15235,-4.04296 -6.15235,-12.08496 0,-8.70117 6.02051,-14.28222 6.02051,-5.58106 17.05078,-5.58106 10.15137,0 17.22656,4.92188 7.11915,4.87793 7.11915,15.64453 l -8.21778,0 q -0.65918,-5.18555 -2.8125,-7.9541 -3.99902,-5.05371 -13.5791,-5.05371 -7.73437,0 -11.11816,3.25195 -3.38379,3.25195 -3.38379,7.55859 0,4.7461 3.95508,6.94336 2.59277,1.40625 11.73339,3.51563 l 9.05274,2.06543 q 6.54785,1.49414 10.10742,4.08691 6.15234,4.52637 6.15234,13.13965 0,10.72266 -7.82226,15.33691 -7.77832,4.61426 -18.10547,4.61426 -12.04102,0 -18.85254,-6.15234 -6.81152,-6.1084 -6.67969,-16.56739 l 8.21778,0 z m 17.66601,-45.48339 0,0 z"
                  />

                  <path
                    d="m 210.97235,148.99568 q 0.30762,5.49317 2.59278,8.9209 4.35058,6.41602 15.33691,6.41602 4.92187,0 8.96484,-1.40625 7.82227,-2.72461 7.82227,-9.75586 0,-5.27344 -3.2959,-7.51465 -3.33984,-2.19726 -10.45898,-3.82324 l -8.74512,-1.97754 q -8.56934,-1.93359 -12.12891,-4.2627 -6.15234,-4.04296 -6.15234,-12.08496 0,-8.70117 6.02051,-14.28222 6.0205,-5.58106 17.05078,-5.58106 10.15137,0 17.22656,4.92188 7.11914,4.87793 7.11914,15.64453 l -8.21777,0 q -0.65918,-5.18555 -2.8125,-7.9541 -3.99903,-5.05371 -13.5791,-5.05371 -7.73438,0 -11.11817,3.25195 -3.38379,3.25195 -3.38379,7.55859 0,4.7461 3.95508,6.94336 2.59277,1.40625 11.7334,3.51563 l 9.05273,2.06543 q 6.54786,1.49414 10.10743,4.08691 6.15234,4.52637 6.15234,13.13965 0,10.72266 -7.82227,15.33691 -7.77832,4.61426 -18.10546,4.61426 -12.04102,0 -18.85254,-6.15234 -6.81153,-6.1084 -6.67969,-16.56739 l 8.21777,0 z m 17.66602,-45.48339 0,0 z"
                  />

                  <path
                    d="m 80.059264,217.7701 12.524414,0 18.544922,54.58008 18.41309,-54.58008 12.39258,0 0,64.55566 -8.30567,0 0,-38.10058 q 0,-1.97754 0.0879,-6.54785 0.0879,-4.57032 0.0879,-9.79981 l -18.41308,54.44824 -8.65723,0 -18.544924,-54.44824 0,1.97754 q 0,2.37305 0.08789,7.25098 0.131836,4.83398 0.131836,7.11914 l 0,38.10058 -8.349609,0 0,-64.55566 z"
                  />

                  <path
                    d="m 183.19891,216.01229 q 17.09473,0 25.3125,10.98632 6.41602,8.56934 6.41602,21.92872 0,14.458 -7.33887,24.03808 -8.61328,11.25 -24.56543,11.25 -14.89746,0 -23.42285,-9.84375 -7.60254,-9.49219 -7.60254,-23.99414 0,-13.0957 6.50391,-22.41211 8.34961,-11.95312 24.69726,-11.95312 z m 0.87891,60.38086 q 11.55762,0 16.69922,-8.26172 5.18555,-8.30567 5.18555,-19.07227 0,-11.38183 -5.97657,-18.32519 -5.93261,-6.94336 -16.25976,-6.94336 -10.01953,0 -16.34766,6.89941 -6.32812,6.85547 -6.32812,20.25879 0,10.72266 5.40527,18.10547 5.44922,7.33887 17.62207,7.33887 z m -0.61523,-60.38086 0,0 z"
                  />

                  <path
                    d="m 250.08368,274.85506 q 4.43848,0 7.29492,-0.92285 5.09766,-1.71387 8.34961,-6.5918 2.59278,-3.91113 3.73535,-10.01953 0.65918,-3.64746 0.65918,-6.76758 0,-11.99707 -4.79004,-18.63281 -4.74609,-6.63574 -15.33691,-6.63574 l -15.5127,0 0,49.57031 15.60059,0 z m -24.38965,-57.08496 26.14746,0 q 13.31543,0 20.6543,9.44824 6.54785,8.52539 6.54785,21.84082 0,10.2832 -3.86719,18.58887 -6.81152,14.67773 -23.42285,14.67773 l -26.05957,0 0,-64.55566 z"
                  />

                  <path
                    d="m 299.82977,217.7701 0,39.90234 q 0,7.03125 2.63672,11.68946 3.91114,7.03125 13.1836,7.03125 11.11816,0 15.11718,-7.60254 2.15332,-4.13086 2.15332,-11.11817 l 0,-39.90234 8.87696,0 0,36.25488 q 0,11.90918 -3.20801,18.3252 -5.88867,11.68945 -22.23633,11.68945 -16.34765,0 -22.19238,-11.68945 -3.20801,-6.41602 -3.20801,-18.3252 l 0,-36.25488 8.87695,0 z m 16.56739,0 0,0 z"
                  />

                  <path
                    d="m 355.20087,217.7701 8.74512,0 0,56.86523 32.69531,0 0,7.69043 -41.44043,0 0,-64.55566 z"
                  />

                  <path
                    d="m 406.13349,217.7701 47.06542,0 0,7.91016 -38.54003,0 0,19.5996 35.63964,0 0,7.47071 -35.63964,0 0,21.88476 39.19921,0 0,7.69043 -47.7246,0 0,-64.55566 z m 23.8623,0 0,0 z"
                  />

                  <path
                    d="m 471.1286,261.49568 q 0.30762,5.49317 2.59278,8.9209 4.35058,6.41602 15.33691,6.41602 4.92187,0 8.96484,-1.40625 7.82227,-2.72461 7.82227,-9.75586 0,-5.27344 -3.2959,-7.51465 -3.33984,-2.19726 -10.45898,-3.82324 l -8.74512,-1.97754 q -8.56934,-1.93359 -12.12891,-4.2627 -6.15234,-4.04296 -6.15234,-12.08496 0,-8.70117 6.02051,-14.28222 6.0205,-5.58106 17.05078,-5.58106 10.15137,0 17.22656,4.92188 7.11914,4.87793 7.11914,15.64453 l -8.21777,0 q -0.65918,-5.18555 -2.8125,-7.9541 -3.99903,-5.05371 -13.5791,-5.05371 -7.73438,0 -11.11817,3.25195 -3.38379,3.25195 -3.38379,7.55859 0,4.7461 3.95508,6.94336 2.59277,1.40625 11.7334,3.51563 l 9.05273,2.06543 q 6.54786,1.49414 10.10743,4.08691 6.15234,4.52637 6.15234,13.13965 0,10.72266 -7.82227,15.33691 -7.77832,4.61426 -18.10546,4.61426 -12.04102,0 -18.85254,-6.15234 -6.81153,-6.1084 -6.67969,-16.56739 l 8.21777,0 z m 17.66602,-45.48339 0,0 z"
                  />
                </g>

                <rect
                  id="rect4156"
                  width="695.01526"
                  height="695.01526"
                  x="76.203529"
                  y="204.85454"
                  className="stroke-black dark:stroke-white stroke-2"
                  fill="none"
                />
              </g>
            </svg>

          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center py-8 rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-pink-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">
            <img className="w-20 absolute" src="/assets/styledComponents.png" alt="Styled Components" data-atropos-offset="-10" />
          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 262 33" className="absolute w-full px-2 lg:px-8" data-atropos-offset="-10">
              <g fillRule="evenodd" clipPath="url(#prefix__clip0)" clipRule="evenodd">
                <path fill="#38bdf8" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />

                <path className="dark:fill-white fill-black" d="M80.996 13.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V28.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V9.7h3.496V4.596l4.104-1.216V9.7h4.712v3.952zM98.958 9.7h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V9.7zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zM107.85 28.7v-19h4.104v19h-4.104zm8.854 0V.96h4.104V28.7h-4.104zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 012.622-2.622 2.627 2.627 0 012.622 2.622c0 1.406-1.178 2.622-2.622 2.622zm-2.052 21.85v-19h4.104v19h-4.104zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V28.7h-4.104V17.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V28.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926zM200.418 2.1h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V2.1zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014z" />
              </g>

              <defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h262v32.4H0z" /></clipPath></defs>
            </svg>

          </li>
        </Atropos>

        <Atropos
          className="atropos atropos-rotate-touch-scroll-y"
          activeOffset={40}
          shadowScale={1.1}
        >
          <li className="dark:bg-black/50 bg-white/50 flex items-center justify-center rounded-3xl backdrop-blur-lg shadow-lg border-2 border-black/20 aspect-square lg:aspect-video overflow-hidden relative before:absolute before:w-full before:h-full before:rounded-3xl before:opacity-0 before:hover:bg-gradient-to-r from-transparent via-green-500/30 to-transparent before:hover:opacity-100 before:transition-opacity before:duration-500 before:ease-in-out" data-atropos-offset="-5">

            <svg viewBox="0 0 581 113" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full px-2 lg:px-8" data-atropos-offset="-10">
              <path className="dark:fill-white fill-black" d="M151.397 66.7608C151.996 72.3621 157.091 81.9642 171.877 81.9642C184.764 81.9642 190.959 73.7624 190.959 65.7607C190.959 58.559 186.063 52.6577 176.373 50.6571L169.379 49.1569C166.682 48.6568 164.884 47.1565 164.884 44.7559C164.884 41.9552 167.681 39.8549 171.178 39.8549C176.772 39.8549 178.87 43.5556 179.27 46.4564L190.359 43.9558C189.76 38.6546 185.064 29.7527 171.078 29.7527C160.488 29.7527 152.696 37.0543 152.696 45.8561C152.696 52.7576 156.991 58.4591 166.482 60.5594L172.976 62.0598C176.772 62.8599 178.271 64.6605 178.271 66.8609C178.271 69.4615 176.173 71.762 171.777 71.762C165.983 71.762 163.085 68.1611 162.786 64.2602L151.397 66.7608Z" />

              <path className="dark:fill-white fill-black" d="M233.421 80.4639H246.109C245.909 78.7635 245.609 75.3628 245.609 71.5618V31.2529H232.321V59.8592C232.321 65.5606 228.925 69.5614 223.031 69.5614C216.837 69.5614 214.039 65.1604 214.039 59.6592V31.2529H200.752V62.3599C200.752 73.0622 207.545 81.7642 219.434 81.7642C224.628 81.7642 230.325 79.7638 233.022 75.1627C233.022 77.1631 233.221 79.4636 233.421 80.4639Z" />

              <path className="dark:fill-white fill-black" d="M273.076 99.4682V75.663C275.473 78.9636 280.469 81.6644 287.263 81.6644C301.149 81.6644 310.439 70.6617 310.439 55.7584C310.439 41.1553 302.148 30.1528 287.762 30.1528C280.37 30.1528 274.875 33.4534 272.677 37.2544V31.253H259.79V99.4682H273.076ZM297.352 55.8585C297.352 64.6606 291.958 69.7616 285.164 69.7616C278.372 69.7616 272.877 64.5605 272.877 55.8585C272.877 47.1566 278.372 42.0554 285.164 42.0554C291.958 42.0554 297.352 47.1566 297.352 55.8585Z" />

              <path className="dark:fill-white fill-black" d="M317.964 67.0609C317.964 74.7627 324.357 81.8643 334.848 81.8643C342.139 81.8643 346.835 78.4634 349.332 74.5625C349.332 76.463 349.532 79.1635 349.832 80.4639H362.02C361.72 78.7635 361.422 75.2627 361.422 72.6622V48.4567C361.422 38.5545 355.627 29.7527 340.043 29.7527C326.855 29.7527 319.761 38.2544 318.963 45.9562L330.751 48.4567C331.151 44.1558 334.348 40.455 340.141 40.455C345.737 40.455 348.434 43.3556 348.434 46.8564C348.434 48.5568 347.536 49.9572 344.738 50.3572L332.65 52.1576C324.458 53.3579 317.964 58.2589 317.964 67.0609ZM337.644 71.962C333.349 71.962 331.25 69.1614 331.25 66.2608C331.25 62.4599 333.947 60.5594 337.345 60.0594L348.434 58.359V60.5594C348.434 69.2615 343.239 71.962 337.644 71.962Z" />

              <path className="dark:fill-white fill-black" d="M387.703 80.4641V74.4627C390.299 78.6637 395.494 81.6644 402.288 81.6644C416.276 81.6644 425.467 70.5618 425.467 55.6585C425.467 41.0552 417.174 29.9528 402.788 29.9528C395.494 29.9528 390.1 33.1535 387.902 36.6541V8.04785H374.815V80.4641H387.703ZM412.178 55.7584C412.178 64.7605 406.784 69.7616 399.99 69.7616C393.297 69.7616 387.703 64.6606 387.703 55.7584C387.703 46.7564 393.297 41.8554 399.99 41.8554C406.784 41.8554 412.178 46.7564 412.178 55.7584Z" />

              <path className="dark:fill-white fill-black" d="M432.99 67.0609C432.99 74.7627 439.383 81.8643 449.873 81.8643C457.165 81.8643 461.862 78.4634 464.358 74.5625C464.358 76.463 464.559 79.1635 464.858 80.4639H477.046C476.748 78.7635 476.448 75.2627 476.448 72.6622V48.4567C476.448 38.5545 470.653 29.7527 455.068 29.7527C441.881 29.7527 434.788 38.2544 433.989 45.9562L445.776 48.4567C446.177 44.1558 449.374 40.455 455.167 40.455C460.763 40.455 463.46 43.3556 463.46 46.8564C463.46 48.5568 462.561 49.9572 459.763 50.3572L447.676 52.1576C439.484 53.3579 432.99 58.2589 432.99 67.0609ZM452.671 71.962C448.375 71.962 446.276 69.1614 446.276 66.2608C446.276 62.4599 448.973 60.5594 452.371 60.0594L463.46 58.359V60.5594C463.46 69.2615 458.265 71.962 452.671 71.962Z" />

              <path className="dark:fill-white fill-black" d="M485.645 66.7608C486.243 72.3621 491.339 81.9642 506.124 81.9642C519.012 81.9642 525.205 73.7624 525.205 65.7607C525.205 58.559 520.311 52.6577 510.62 50.6571L503.626 49.1569C500.929 48.6568 499.132 47.1565 499.132 44.7559C499.132 41.9552 501.928 39.8549 505.425 39.8549C511.021 39.8549 513.118 43.5556 513.519 46.4564L524.607 43.9558C524.007 38.6546 519.312 29.7527 505.326 29.7527C494.735 29.7527 486.944 37.0543 486.944 45.8561C486.944 52.7576 491.238 58.4591 500.73 60.5594L507.224 62.0598C511.021 62.8599 512.519 64.6605 512.519 66.8609C512.519 69.4615 510.421 71.762 506.025 71.762C500.23 71.762 497.334 68.1611 497.034 64.2602L485.645 66.7608Z" />

              <path className="dark:fill-white fill-black" d="M545.385 50.2571C545.685 45.7562 549.482 40.5549 556.375 40.5549C563.967 40.5549 567.165 45.3561 567.365 50.2571H545.385ZM568.664 63.0601C567.065 67.4609 563.668 70.5617 557.474 70.5617C550.88 70.5617 545.385 65.8606 545.087 59.3593H580.252C580.252 59.159 580.451 57.1587 580.451 55.2582C580.451 39.4547 571.361 29.7527 556.175 29.7527C543.588 29.7527 531.998 39.9548 531.998 55.6584C531.998 72.262 543.886 81.9642 557.374 81.9642C569.462 81.9642 577.255 74.8626 579.753 66.3607L568.664 63.0601Z" />

              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)" />

              <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2" />

              <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />

              <defs>
                <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#249361" />
                  <stop offset="1" stopColor="#3ECF8E" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </li>
        </Atropos>
      </ul>

    </section>
  );
}

export default SectionSkills;
