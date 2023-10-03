function Blobs() {
  return (
    <div className="fixed w-full h-full top-0 left-0 -z-10 dark:bg-black bg-white blur-3xl animate-blobs_animation_one">
      <svg className="absolute w-[45%] h-[45%] lg:w-[55%] lg:h-[55%] top-0 left-0 animate-blobs_animation_two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#C800FE" d="M52.7,-59.2C65.6,-51.9,71.6,-32.8,73.3,-14.3C75,4.3,72.4,22.3,64.4,38.1C56.4,54,43,67.7,28.9,67.7C14.8,67.7,0.1,54.1,-17.3,47.6C-34.6,41.2,-54.5,42.1,-61.8,33.6C-69.1,25.2,-63.8,7.4,-58.1,-7.7C-52.4,-22.8,-46.2,-35.2,-36.4,-43C-26.7,-50.9,-13.3,-54.1,3.3,-58C19.9,-61.9,39.7,-66.5,52.7,-59.2Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute w-[45%] h-[45%] lg:w-[55%] lg:h-[55%] bottom-0 left-0 animate-blobs_animation_two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FE7000" d="M60.6,1.3C60.6,28.4,30.3,56.8,-0.7,56.8C-31.6,56.8,-63.3,28.4,-63.3,1.3C-63.3,-25.7,-31.6,-51.5,-0.7,-51.5C30.3,-51.5,60.6,-25.7,60.6,1.3Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute w-[45%] h-[45%] lg:w-[55%] lg:h-[55%] bottom-0 right-0 animate-blobs_animation_two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M27.9,-51.7C31.8,-46.1,27.6,-29.8,26.7,-19.4C25.8,-9,28.1,-4.5,33.6,3.2C39.1,10.8,47.7,21.7,47.4,29.9C47.1,38.2,37.8,43.8,28.4,53.8C19,63.8,9.5,78.2,-0.3,78.8C-10.1,79.3,-20.3,66,-32.2,57.4C-44.1,48.8,-57.8,45.1,-64.5,36.3C-71.3,27.5,-71,13.8,-72.9,-1.1C-74.7,-15.9,-78.6,-31.7,-70.1,-37.5C-61.6,-43.2,-40.7,-38.8,-27,-38.7C-13.3,-38.5,-6.6,-42.6,2.7,-47.3C12,-51.9,24,-57.2,27.9,-51.7Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute w-[45%] h-[45%] lg:w-[55%] lg:h-[55%] top-0 right-0 animate-blobs_animation_two" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0F62FE" d="M45.4,-48.6C54.8,-36,55.6,-18,49.7,-5.9C43.8,6.2,31.1,12.3,21.7,21.4C12.3,30.4,6.2,42.3,-5.2,47.5C-16.5,52.7,-33,51.1,-46.5,42.1C-59.9,33,-70.3,16.5,-65.1,5.3C-59.8,-6,-38.9,-12,-25.5,-24.6C-12,-37.2,-6,-56.3,6,-62.3C18,-68.3,36,-61.1,45.4,-48.6Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
}

export default Blobs;
